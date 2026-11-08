# TGMS SOMARAM - Official School Website

A modern, responsive, multi-page website built with semantic **HTML5**, **CSS3**, and vanilla **JavaScript**, modeled faithfully after the structure, content, and guidelines of the Model School portal, customized specifically for **PM SHRI Telangana Government Model School & Junior College, Somaram** (Saidapur Mandal, Karimnagar District).

---

## ⚡ Deploying to Vercel (Ready Out-of-the-Box)

This repository includes a production-ready `vercel.json` and `404.html` configuration.

### Option 1: Via Vercel Dashboard (Easiest & Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Choose your repository: **`rishikesh-2k6/TGMS_SOMARAM`** and click **Import**.
4. Leave settings as default (**Framework Preset: Other**, **Root Directory: `./`**).
5. Click **"Deploy"**.
6. Done! Your website will be live with a free, secure `https://tgms-somaram.vercel.app` domain within 30 seconds.

### Option 2: Via Vercel CLI
```bash
npx vercel
```

### Vercel Optimizations Included:
- **Clean URLs enabled:** URLs work without `.html` extension (e.g. `/staff`, `/gallery`, `/contact`).
- **Asset caching:** Long-term caching for images (1 year immutable) and optimized caching for styles and scripts.
- **Security headers:** X-Content-Type-Options, X-Frame-Options, XSS protection, and Referrer Policy.
- **Custom 404 page:** Branded `404.html` with school identity and instant redirect to home.

---

## 🚀 How to View Locally

You don't need any complex server or database setup!

1. Open this project folder:
   `c:\Users\rishi\OneDrive\Desktop\TGMS SOMARAM`
2. Simply double-click **`index.html`** (or right-click and choose **Open with Google Chrome / Microsoft Edge / Firefox**).
3. All pages, interactive menus, photo gallery filter, and image lightbox modal work directly offline!

---

## 📂 Project Structure & Pages

```
TGMS SOMARAM/
├── index.html                 # Home page (Hero, Motto, Features, School photo, Principal snapshot)
├── principals-corner.html     # Principal's message & Class Teacher Duties code
├── staff.html                 # Teaching faculty directory (PGTs & TGTs with subject wings)
├── gallery.html               # Filterable photo gallery with full-screen lightbox
├── administration.html        # Governance, committees (SMC, PTA), bell schedule, rules
├── case-study.html            # Institutional report, campus profile, Program "Alchemy", Houses
├── contact.html               # Contact details, inquiry form, Google Maps integration
├── 404.html                   # Custom branded 404 error page for Vercel
├── vercel.json                # Vercel deployment configuration (clean URLs, caching, headers)
├── .vercelignore              # Files excluded from Vercel deployments
├── package.json               # Node metadata and local dev script
├── css/
│   └── style.css              # Responsive styling, color variables, mobile layouts
├── js/
│   └── main.js                # Mobile navigation drawer, photo filter, lightbox viewer
└── images/                    # Image assets
    ├── tgms-somaram-building.jpg # Official PM SHRI TGMS Somaram building photo
    ├── logo.svg               # School crest emblem for TGMS Somaram
    ├── principal.svg          # Principal portrait
    ├── principal-desk.svg     # Principal office & administration desk
    ├── staff-m.svg            # Male teacher avatar
    ├── staff-f.svg            # Female teacher avatar
    ├── science-lab.svg        # Physics, Chemistry, Biology laboratories
    ├── computer-lab.svg       # ICT computer workstations
    ├── library.svg            # School library & reading resource
    ├── sports.svg             # Sports playground, athletics, cricket, volleyball
    ├── republic-day.svg       # Republic Day flag hoisting celebrations
    ├── science-day.svg        # Sir C.V. Raman Science Day exhibition
    ├── medical-camp.svg       # Women's Day free health & medical checkup
    ├── food-carnival.svg      # Annual student traditional food carnival
    ├── mock-assembly.svg      # Morning mock assembly & student cabinet
    └── alchemy.svg            # Program "Alchemy" mentorship graphic
```

---

## 🏫 School Details Configured

- **School Name:** TGMS SOMARAM (PM SHRI Telangana Model School & Junior College)
- **Village:** Somaram
- **Mandal:** Saidapur
- **District:** Karimnagar, Telangana - 505472
- **UDISE Code:** 36131100206
- **School Category:** PM SHRI Selected School
- **Motto:** *"KNOWLEDGE is TREASURE but... PRACTICE is its KEY"*
- **Classes:** VI to XII (English Medium, Co-Educational)
- **Junior College Groups:** MPC, BiPC, CEC, MEC
