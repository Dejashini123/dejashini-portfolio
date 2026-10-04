# Dejashini T. P. — Premium AI & Full Stack Portfolio Website

A personal portfolio and freelancing platform built for **Dejashini T. P.**, an aspiring AI Full Stack Engineer, AI developer, and freelance software developer.

Designed with a high-contrast palette combining Electric Blue (`#5865F2`), Deep Purple (`#7548E8`), Lavender (`#C4B5FD`), Cyan (`#67E8F9`), and Deep Navy (`#11152E`).

---

## 🚀 Quick Start

### 1. Requirements
* Node.js v18+ (tested with Node v24.13.0)
* npm v9+

### 2. Development Mode
Run the development server with Hot Module Replacement:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Verify TypeScript types and compile optimized production assets:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Architecture

```
dejashini-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpeg          # Primary profile portrait
│   │   ├── projects/             # Real project screenshots & diagrams
│   │   │   ├── yolo_output.png
│   │   │   ├── traffic_results.png
│   │   │   ├── piezo_model1.jpeg
│   │   │   └── forest_gis_map.png
│   │   └── certificates/         # Verified certification badges
│   ├── documents/
│   │   └── Resume_Dejashini.pdf  # Active downloadable resume PDF
│   └── favicon.svg               # Custom 'D' monogram brand mark
├── src/
│   ├── components/
│   │   ├── common/               # Navbar, Footer, Lightbox, Badges, BrandIcons
│   │   ├── hero/                 # HeroSection with rotating titles & portrait frame
│   │   ├── about/                # Bio, Education card (CGPA 8.74), Approach
│   │   ├── skills/               # 6 categorized skill groups without fake bars
│   │   ├── experience/           # REtech Solutions AI internship with YOLOv8 metrics
│   │   ├── projects/             # Featured projects gallery with lightbox
│   │   ├── services/             # 3 Freelance services + Why Collaborate pillars
│   │   ├── achievements/         # LeetCode 50+, Hackathons, SIH 2026, Internship
│   │   ├── certifications/       # AWS, IBM, JPMC, L&T EduTech credentials
│   │   └── contact/              # Interactive inquiry form with email client fallback
│   ├── pages/
│   │   ├── HomePage.tsx          # Single-page layout with scroll-spy navigation
│   │   └── ProjectDetailPage.tsx # Deep-dive case studies for each featured project
│   ├── data/
│   │   ├── siteConfig.ts         # Contact info, social links, resume URLs
│   │   └── portfolioData.ts      # Projects, metrics, skills, services, milestones
│   ├── hooks/
│   │   └── useScrollSpy.ts       # Active section detection during scroll
│   ├── styles/
│   │   └── index.css             # Tailwind styles, glassmorphism, glowing gradients
│   ├── App.tsx                   # Client routes (/ and /projects/:projectId)
│   └── main.tsx
└── tailwind.config.js
```

---

## ⚙️ How to Customize Your Content

### 1. Profile Photo
* Replace `public/images/profile.jpeg` with any new high-resolution photo.
* If missing or error occurs, the website displays a monogram avatar with your initial **"D"**.

### 2. Resume PDF
* Replace `public/documents/Resume_Dejashini.pdf`. Both "Download My Resume" and "View PDF Online" buttons point to this file.

### 3. Contact & Social Links
* Open `src/data/siteConfig.ts` to update your email, phone, LinkedIn, GitHub, or LeetCode URLs.

### 4. Live Project Demos & Repositories
* Open `src/data/portfolioData.ts` to update:
  - `githubUrl`: Your repository links
  - `liveDemoUrl`: Deployed application URLs
  - `gallery`: Screenshot arrays and captions

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for Dejashini portfolio"
   git branch -M main
   git remote add origin https://github.com/Dejashini123/<repo-name>.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**
4. Root Directory: `./` (or directory where `package.json` is located)
5. Click **Deploy**.

### Single Page Application (SPA) Routing Note
For Netlify or Vercel, client-side routing on `/projects/:projectId` requires a rewrite rule:
* A `vercel.json` or `public/_redirects` file (`/* /index.html 200`) ensures direct URL visits reload properly.
