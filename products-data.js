// ============================================================
// ATELIER NOIR - Product Database
// All product data stored as JavaScript objects
// ============================================================

const PRODUCTS = [
  {
    "id": 1,
    "name": "Structured Wool Blazer",
    "price": 495,
    "category": "tops",
    "color": "charcoal",
    "description": "A sharp, structured blazer crafted from premium virgin wool. The double-breasted design and sharp lapels create a bold, architectural silhouette.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvUNQMJGBgApgdJWOIBm3fKDJblTsHFsHgX21cR-V_LUkoGLppppQrP6eL-AByEFB-tPlSCc7DeQv3baCTC5oQgb7cuClGTHpsN3uwfWL9Yyo8eKGeh3RthG_M7Qr-64cFKwpNx_sMNU75lv_tpYOPdNddU3_syrXq7CrV7N1VZ3_kxLQTTSOtYWGkKADoF52xGYVL8N9mrLSwVmOiUekcaHYlRDukF0Ij41iC2fiwGk1ebieWg1_4auNZejhesqfS_3sD7fXx9kE"
    ],
    "fabric": "100% Virgin Wool. Lining: 100% Cupro.",
    "care": "Dry clean only.",
    "subline": "NOIR ESSENTIALS"
  },
  {
    "id": 2,
    "name": "Asymmetric Silk Gown",
    "price": 1250,
    "category": "dresses",
    "color": "ecru",
    "description": "A flowing asymmetric gown crafted from pure mulberry silk. The draping creates an effortless, sculptural silhouette perfect for evening occasions.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "badge": "Limited Edition",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkAyYyaLTOUMJaYFGMH4_6R1avIDCNbBq4mqDc-63uBWloM2PpzAqHkZn4U0E7rlXNYrkbGTkN19cYNIhF1_he9V3zYdFy-x-2xi72Uz4kNB_gvBtlTjkw1N5B9SvK6klTmS8U7IcXCk1RjzlqLkqH_nc0mH-_5kTB7nOfAuacnQhlbW4Tsk3NNF_e2xfAKMzPsoUU8s5Ei2QVW1rzfgYcpGhj2YnXIAzsEJAwbMYC5Vn5R3X6n3uS0lhrPFJbOpdyk8ay8e29aMo"
    ],
    "fabric": "100% Pure Mulberry Silk.",
    "care": "Dry clean only. Store flat.",
    "subline": "EVENING WEAR"
  },
  {
    "id": 3,
    "name": "Ribbed Merino Mock",
    "price": 340,
    "category": "tops",
    "color": "noir",
    "description": "A heavyweight merino wool mock-neck sweater with fine ribbing. Designed for layering, this piece provides warmth without bulk.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxUeUlZJLZG_RjGkoBmtKjBwfcSePbfPHEOlpO-E-bGPhohR1nJehrNlGWFZzoQXzP5Q96ewgK0opWXsiRVcVY1v6Ggqo-zvBQdNzn-rguaBqYUu3YcKXCHhh0Mjrp_O9jc-lsiYXdUQguxE3mfbxd8CxkC20rIJdGPg5dc2ZkLb_d7DWrPW5D0nFMSv0jdvgkaZKJQw0EQuY1M7qFpiVgWY3roVvqM_joTAjRNBKNY5fKLzLX6b-puAp00fDVUUwAVy0V9lL1jn8"
    ],
    "fabric": "100% Merino Wool.",
    "care": "Hand wash cold, lay flat to dry.",
    "subline": "SEASONAL LAYERS"
  },
  {
    "id": 4,
    "name": "Pleated Wide Trousers",
    "price": 420,
    "category": "bottoms",
    "color": "camel",
    "description": "Wide-leg trousers featuring deep pleats and a high waist. Crafted from Italian wool crepe for a fluid, architectural drape.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_VwMXuWJZEyDK3ewKWW9rl20EFQ4NgQAZmlcxUmoRyRfq7XC6Wsk-ZKkB654RgYsQOa-6RkwD3VQt7ij1wsDzfZzBUUt_LFf4rm0UHBdOLc7Iq89aBRx2ZYaXi0Tr--WKQuGQcH9hx3h1-eKz1LtaP7Lp5y1gu9K4E6d4yCi9XM9z0IQZYR-rDarZqtWkZOFp_Ws85jr_X_udrDPxqNExK8QyED-e16Lupl_o2DOtSoEXacY60aSTnAVRcEhyt9n96LO55qjVnU"
    ],
    "fabric": "98% Wool, 2% Elastane.",
    "care": "Dry clean recommended.",
    "subline": "TAILORED ESSENTIALS"
  },
  {
    "id": 5,
    "name": "Nappa Leather Blazer",
    "price": 1800,
    "category": "outerwear",
    "color": "noir",
    "description": "A supremely soft Nappa leather blazer with a relaxed oversized fit. The buttery texture and clean lines make this a statement piece for any wardrobe.",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "badge": "Limited Edition",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYBEsm6j-0oFAK4QBUREjOFimK8iQQCK9Ej7FT3US2zvTGRKMpJJTkVEbZv6JrBGnpirF1k48azwpB3zfq7z9BLB-7PPhYWf0qSg6gr8aslKG58mbNpG9fjSXz9bcWYEQ3apavKl3QKcKqNVL8XEm9jaO8Es8y5zeldR0L18atyJjoIOmq29I7Ll3h2q3CuC6uer8W9e5Ov-R4oTiIPfCSJlY8rsnbv2ac5nV-x581njZFHBjfhWEJFkg0fl023MuZKEhPrJ6DO0s"
    ],
    "fabric": "100% Nappa Lambskin Leather. Lining: 100% Silk.",
    "care": "Professional leather clean only.",
    "subline": "ATELIER EXCLUSIVE"
  },
  {
    "id": 6,
    "name": "Oversized Poplin Shirt",
    "price": 220,
    "category": "tops",
    "color": "optic white",
    "description": "An oversized crisp white poplin shirt with sharp cuffs and a structured collar. The relaxed fit and premium cotton create effortless sophistication.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwDDQKwZwDfJoHr9x6vMiQtCllH7EXzA5ez24DcjBiwXNoFS7rNgaph5B8FbPtLtoCJYcjghGv_yOjapPPkI24utR21jxNjNemBhZBW8RAwdxgn-g6Zdmv3EWCBcb-fGucBCFFSTRjdZHAgn2R2amkNVva1KOlIx7o6Wau2u0u0reOVvFhW5HtK9ZFETo3Ogfswn27e4jZ2JywkYUzeyTUj4B-QAWGPxhjOww-FwIgtoVrN9OcxANs2oqhnEPhyzN-vlsqfwU1h6M"
    ],
    "fabric": "100% Egyptian Cotton Poplin.",
    "care": "Machine wash 30°C. Iron medium heat.",
    "subline": "WARDROBE STAPLES"
  },
  {
    "id": 7,
    "name": "Structured Wool Oversized Coat",
    "price": 895,
    "category": "outerwear",
    "color": "charcoal",
    "description": "A study in architectural minimalism. This coat is crafted from heavy-weight Italian virgin wool with dropped shoulders and a sharp notched lapel, designed to create a bold, gender-neutral silhouette.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_MuteUkKL4iIxjCw63Pl8Dde5fz-e5WbPRjqlEyC6ROnSUbilyMbh5tJrohGdojkiL6Id0_4gVKXLfa1KjGRSLwtgIOUBcpfojM9K0r07EJf0V243sBF7S6CrhmPnNp8Z50urIo7eY72siGtjUn4IdHGhiQoLbk6v6O28nTZzHbjV9ImSWJMCO1P60wcnM-oz6eBOFRw2Gw0uYxx2UST9z6fQNZ-QMwQTuMttMsctXhw-yH9XDRNzduvUmXGAwe9duvTEu8oXhEo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeIDQUpZi80ZS7TuRJbPgJyNqQPZPjUMd5_4wg_ArleanMXChjWnn-YiWogAjV628L2ecojJq7vxoX5yUJPpWzzeHjJx_w26Vzp7azS_V8Gw1esB-wui3KTu2eWaFWBs48RRV3BOjTyyGsPyOO-TlwgtpK-o0MtCxSvpKBKJjgJ3l9F6JbDs2TIzIXk3lIZTwyN9Zw1eZ6VkzkZPWW79v-D5exvEA2wV4pZe3CzvL3SUVOQSF_ApXtdpQlMxNdUME81-jMCCA-_Zw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ieIqK_7cWUR5NS8WVt5uorbKAMBpuFztbQ9iT7rBIk6d_hIekSmg3JlCiWqHFxtPm9C7H8tkFYcc4qBFYER0dkA995zQdXqC9nq93Bhk0aKt-MxSS_7VuFcHTKAImrAfAtCOvot_ZrYkNlKAjrh6Cyq2FxlBT10cAEQTIo9hiO2EqLVZOGX8Dl7pAWpL1UQpRiInuLjISHsyY3hYFvCwLzY95MpF14D_0RxipXgKveCiEaBAnIFEiMIhkPpPn72Kl-EShPaiUD8"
    ],
    "fabric": "Body: 100% Virgin Wool. Lining: 100% Cupro.",
    "care": "Dry clean only. Store on a wide-shoulder hanger.",
    "subline": "SIGNATURE OUTERWEAR"
  },
  {
    "id": 8,
    "name": "Architectural Midi Skirt",
    "price": 320,
    "category": "bottoms",
    "color": "olive",
    "description": "A pleated midi skirt with architectural draping, cut from flowing Italian crepe. The movement and structure create a distinctly modern silhouette.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWIKTXy062k1eH74F-u74rpHtsRYNIR94hAT7vE1UphNsgu3uxj-sJACOrodVf_LCxQxS3w_Nmf4NvdVyncIPQ_WDkdS5IS04lQwHN-Y_6AJ6TmWEEjGMVx6AxkMYgR5K0wGlTA7XPS8grwPTLZz8HxI_OoJTW43uGxmp1tMkl6lWhBeo5havCOo0N1sAicoXrKkHfpV4ZLLjZAPXnZWvHc1sGEpEPHG-lPgmZwh2ce11FX1D2CIaQyss3iA-VYNWftS_TVFLwoKs"
    ],
    "fabric": "100% Viscose Crepe.",
    "care": "Dry clean only.",
    "subline": "EVENING WEAR"
  },
  {
    "id": 9,
    "name": "Ribbed Cashmere Knit",
    "price": 285,
    "category": "tops",
    "color": "noir",
    "description": "Ultra-soft cashmere knit with fine ribbing throughout. A perfect layering piece that brings warmth and luxury to any outfit.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": "New Arrival",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtmL7kGWTmsZ7EKmb-NYpJym7hg_udMrWt0N7EhTatYycWia9MMGXD0olEa0uJBatqfb26RdrdM6pERFwjRiI4MFYo7u6fwdfYoC_JpM5zY8ueGhSuB26q3UeBuuGsPexopPKMIRZHJkO6kKy6qH2S_qT2gtLpvVZ6mbZ_sFas95cFW2nAosqwh-QmMpZBSbMpB3lgzMo9x0Xk6U0ncHR8YAU-4w55KAhjExDwyWqqu2JCZ_IzSHMhr6IyoaFWgHvGrpqZMmKuYtE"
    ],
    "fabric": "100% Mongolian Cashmere.",
    "care": "Hand wash cold, reshape and dry flat.",
    "subline": "SEASONAL LAYERS"
  },
  {
    "id": 10,
    "name": "Combat Leather Boot",
    "price": 420,
    "category": "accessories",
    "color": "noir",
    "description": "Minimalist leather boots with a chunky sole and squared toe. Crafted from premium Italian leather with a full leather lining.",
    "sizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwuxPMdmXS5RHtc3pQNKA-Q2-VrMLo7omPFwvxsf_WUjdBLLmYDayRL5G6ZKLH4BaOi-MDpaNJ_8DlJqOpkdi9OrrMGba37M1Qf5gGV84_sNcjjRprj6Su6HOf-Bq28Ol2A0nLLueF8hZXczci04V4uqKjPj4cjvZyiJ-6mpMwEXyxNjDT17aOGxGNAy1UWnVoBE_DZYhpBcQB731tufiMuaTXnB3QqTJnwfxWN-1E4pWBmSQpJVc-pTWIc5ycTKf82mcbybuz6J0"
    ],
    "fabric": "100% Italian Leather. Sole: Rubber.",
    "care": "Condition with leather cream regularly.",
    "subline": "FOOTWEAR"
  },
  {
    "id": 11,
    "name": "Tailored Wool Trousers",
    "price": 310,
    "category": "bottoms",
    "color": "noir",
    "description": "Slim-fit high-waisted trousers with a sharp center crease. Cut from Japanese worsted wool for clean, precise lines.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAmCHYONj6YWcFgx33EqojT89rHMuwX1rqDjaCjgHl0lkJk16CsVt3HMvaLfls2Kn21KKephrBYVdsExgC7nOq1xEvLsBM_EDpWcVfrP5AYuU5QaRDsUWp1E-fG5rxphn9PcRR3qkRed_-eyir7ycFiDpiZn4a87CNuwQ5dzU8yPI11x3zK-rD0BYR9-OdSficV9u6_bvutfrccNNVopdG3phTfWgFEtmL0oAbs_DgNRrs3gcJQ9R1FIuL9IL-dmKi4vXmTHAxL7Q"
    ],
    "fabric": "100% Japanese Worsted Wool.",
    "care": "Dry clean only.",
    "subline": "TAILORED ESSENTIALS"
  },
  {
    "id": 12,
    "name": "Essential Cashmere Tee",
    "price": 185,
    "category": "tops",
    "color": "noir",
    "description": "A minimal cashmere t-shirt with a relaxed fit. The fine gauge knit provides a luxurious hand-feel that elevates the everyday essential.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "badge": null,
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDA9K2THijzamXVMC5JtdV4GMhbu4VnjmunIkrAr_p8xfOtpwQgxa7Ib7CBCcnYvKse1scpuHIfpqlnY_Tlitu91NXW61H3wyL9kFBlrhx_OkjU0JI2JuuRBwJ13MPh4WrvvGMsUkQNs9K75sNGx17G0lz_Ig6OATDuXVjzLMV43xxKYHjJStoaupYuPOUQiUpjF8qy2BFv-KW_vw5Px4UpZVdMN8eeDRWJCYyvyMXGF7uuBRZTakPa5SDIIvIuYC0nfimnYSfSv7A"
    ],
    "fabric": "100% Cashmere.",
    "care": "Hand wash cold, dry flat.",
    "subline": "WARDROBE STAPLES"
  }
];
