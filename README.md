# DreamPath Prep

A conversion-optimized marketing and lead generation website for DreamPath Prep — a college admissions consulting firm led by PhD-level advisors helping students get into their dream schools.

## 🎓 About the Site

DreamPath Prep's website serves as the primary marketing and client acquisition platform for the business. The centerpiece is an interactive college readiness diagnostic that qualifies leads, captures contact information, and syncs responses to a CRM pipeline — all in a seamless user flow.

## 🧩 Sections

- **Hero** — Value proposition and primary call-to-action
- **Problem** — Pain-point framing for the college admissions process
- **Mission** — Company philosophy and PhD-advisor differentiation
- **Services** — Consulting packages and service tiers
- **Logo Ticker** — Animated scroll of college/university logos
- **Team** — PhD consultant profiles and credentials
- **Diagnostic Quiz** — Interactive 5-question college readiness assessment with dynamic lead capture
- **Testimonials** — Client social proof
- **Footer** — Contact information and strategy session booking CTA

## ⭐ Feature Highlight: Interactive Diagnostic

The lead generation diagnostic guides prospective clients through 5 personalized questions covering grade level, academic performance, extracurricular narrative, career clarity, and financial fit. After completing the quiz, users submit their contact information to unlock personalized results. On submission:

- Contact data (name, email, phone, high school) is saved to the backend database
- Quiz responses are synced to Google Sheets for the sales team
- Users receive a dynamically-generated result ("Foundation Phase" vs. "Execution Phase") based on their answers

## 🛠 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Backend, Functions & Deployment:** Base44
- **CRM Sync:** Google Sheets (via Base44 server function)

## 🔧 Local Development

```bash
npm install
npm run dev
```

> **Note:** The lead capture and Google Sheets sync requires Base44 backend credentials. The live site is deployed via Base44.

## 📸 Live Site

[https://dreampathprep.com]

## 📋 Context

Designed and developed as a personal project for a college consulting business. Built with a focus on conversion rate optimization — the diagnostic quiz functions as an interactive lead funnel rather than a static contact form.
