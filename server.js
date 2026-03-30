// ============================================================
// ATELIER NOIR - Express Backend Server
// JSON File Database (No Native Bindings / Node-Gyp Required)
// ============================================================
const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Middleware ----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname)));

// ---- Database Setup (JSON File) ----
const dbDir = path.join(__dirname, 'db');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir);
const dbFile = path.join(dbDir, 'data.json');

let db = {
  users: [],
  orders: [],
  messages: [],
  nextId: { user: 1, order: 1, message: 1 }
};

// Load default data
if (fs.existsSync(dbFile)) {
  try { db = JSON.parse(fs.readFileSync(dbFile, 'utf8')); } catch(e) { console.error('Error loading DB', e); }
}

function saveDb() {
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
}

// Create default admin if not exists
if (!db.users.find(u => u.email === 'admin@atelier.com')) {
  db.users.push({
    id: db.nextId.user++,
    name: 'Admin',
    email: 'admin@atelier.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin',
    created_at: new Date().toISOString()
  });
  saveDb();
  console.log('Default admin created: admin@atelier.com / admin123');
}

// ---- Simple Session (cookie-based) ----
function getUser(req) {
  const userId = parseInt(req.cookies.userId);
  if (!userId) return null;
  const user = db.users.find(u => u.id === userId);
  if(!user) return null;
  return { id: user.id, name: user.name, email: user.email, role: user.role };
}

function requireAuth(req, res, next) {
  const user = getUser(req);
  if (!user) return res.status(401).json({ error: 'Please login first' });
  req.user = user;
  next();
}

function requireAdmin(req, res, next) {
  const user = getUser(req);
  if (!user || user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
  req.user = user;
  next();
}

// ============================================================
// AUTH API
// ============================================================

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
  if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });

  if (db.users.find(u => u.email === email)) return res.status(400).json({ error: 'Email already registered' });

  const hash = bcrypt.hashSync(password, 10);
  const newUser = { id: db.nextId.user++, name, email, password: hash, role: 'customer', created_at: new Date().toISOString() };
  db.users.push(newUser);
  saveDb();
  
  res.cookie('userId', newUser.id, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.json({ success: true, user: { id: newUser.id, name, email, role: 'customer' } });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const user = db.users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'Invalid email or password' });

  if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: 'Invalid email or password' });

  res.cookie('userId', user.id, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('userId');
  res.json({ success: true });
});

app.get('/api/me', (req, res) => {
  const user = getUser(req);
  if (!user) return res.json({ loggedIn: false });
  res.json({ loggedIn: true, user });
});

// ============================================================
// ORDERS API
// ============================================================

app.post('/api/orders', requireAuth, (req, res) => {
  const { items, total, shipping_name, shipping_address, shipping_city, shipping_country } = req.body;
  const newOrder = {
    id: db.nextId.order++,
    user_id: req.user.id,
    items: items,
    total: total,
    status: 'pending',
    shipping_name, shipping_address, shipping_city, shipping_country,
    created_at: new Date().toISOString()
  };
  db.orders.push(newOrder);
  saveDb();
  res.json({ success: true, orderId: newOrder.id });
});

app.get('/api/orders', requireAuth, (req, res) => {
  const userOrders = db.orders.filter(o => o.user_id === req.user.id).sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
  res.json(userOrders);
});

// ============================================================
// CONTACT API
// ============================================================

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message required' });
  const newMsg = {
    id: db.nextId.message++,
    name, email, subject, message,
    created_at: new Date().toISOString()
  };
  db.messages.push(newMsg);
  saveDb();
  res.json({ success: true });
});

// ============================================================
// ADMIN API
// ============================================================

app.get('/api/admin/stats', requireAdmin, (req, res) => {
  const totalUsers = db.users.length;
  const totalOrders = db.orders.length;
  const totalRevenue = db.orders.reduce((sum, o) => sum + o.total, 0);
  const totalMessages = db.messages.length;
  
  const recentOrders = [...db.orders].sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 10).map(o => {
    const user = db.users.find(u => u.id === o.user_id);
    return { ...o, customer_name: user?.name, customer_email: user?.email };
  });
  
  const recentMessages = [...db.messages].sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 10);
  const sortedUsers = [...db.users].sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map(u => ({id: u.id, name: u.name, email: u.email, role: u.role, created_at: u.created_at}));
  
  res.json({ totalUsers, totalOrders, totalRevenue, totalMessages, recentOrders, recentMessages, users: sortedUsers });
});

app.put('/api/admin/orders/:id', requireAdmin, (req, res) => {
  const { status } = req.body;
  const order = db.orders.find(o => o.id === parseInt(req.params.id));
  if(order) { order.status = status; saveDb(); }
  res.json({ success: true });
});

app.delete('/api/admin/messages/:id', requireAdmin, (req, res) => {
  db.messages = db.messages.filter(m => m.id !== parseInt(req.params.id));
  saveDb();
  res.json({ success: true });
});

app.post('/api/admin/products', requireAdmin, (req, res) => {
  const { name, price, category, imageUrl } = req.body;
  if(!name || !price || !category || !imageUrl) return res.status(400).json({error: 'Missing fields'});
  
  const pfile = path.join(__dirname, 'js', 'products-data.js');
  let content = fs.readFileSync(pfile, 'utf8');
  
  const newProduct = {
    id: Date.now(), name, price: parseFloat(price), category, color: "custom", description: "Added via Admin Panel.",
    sizes: ["S", "M", "L"], badge: "New Arrival", images: [imageUrl], fabric: "Custom", care: "See label", subline: "NEW ADDITION"
  };
  
  const cleanContent = content.trim().replace(/\];?$/, '');
  const updatedContent = cleanContent + ",\n  " + JSON.stringify(newProduct, null, 2) + "\n];\n";
  
  fs.writeFileSync(pfile, updatedContent);
  res.json({ success: true });
});

app.get('/api/admin/catalog', requireAdmin, (req, res) => {
  try {
    const pfile = path.join(__dirname, 'js', 'products-data.js');
    let content = fs.readFileSync(pfile, 'utf8');
    let jsonStr = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
    const productsArr = new Function('return ' + jsonStr)();
    res.json(productsArr);
  } catch (err) { res.status(500).json({ error: 'Failed to load catalog', details: err.message }); }
});

app.delete('/api/admin/products/:id', requireAdmin, (req, res) => {
  try {
    const pfile = path.join(__dirname, 'js', 'products-data.js');
    let content = fs.readFileSync(pfile, 'utf8');
    let jsonStr = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
    let productsArr = new Function('return ' + jsonStr)();
    productsArr = productsArr.filter(p => parseInt(p.id) !== parseInt(req.params.id));
    let newContent = content.substring(0, content.indexOf('[')) + JSON.stringify(productsArr, null, 2) + ";\n";
    fs.writeFileSync(pfile, newContent);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Failed to delete' }); }
});

app.put('/api/admin/products/:id', requireAdmin, (req, res) => {
  try {
    const { name, price, category, imageUrl } = req.body;
    const pfile = path.join(__dirname, 'js', 'products-data.js');
    let content = fs.readFileSync(pfile, 'utf8');
    let jsonStr = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
    let productsArr = new Function('return ' + jsonStr)();
    
    const idx = productsArr.findIndex(p => parseInt(p.id) === parseInt(req.params.id));
    if(idx !== -1) {
      if(name) productsArr[idx].name = name;
      if(price) productsArr[idx].price = parseFloat(price);
      if(category) productsArr[idx].category = category;
      if(imageUrl) productsArr[idx].images = [imageUrl];
      
      let newContent = content.substring(0, content.indexOf('[')) + JSON.stringify(productsArr, null, 2) + ";\n";
      fs.writeFileSync(pfile, newContent);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) { res.status(500).json({ error: 'Failed to update' }); }
});

// ---- Start Server ----
app.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`  ATELIER NOIR Server running at:`);
  console.log(`  => http://localhost:${PORT}`);
  console.log(`========================================\n`);
});
