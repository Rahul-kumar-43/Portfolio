# Rahul Kumar — Portfolio

A modern, production-ready developer portfolio built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4**.

## ✨ Features

- **Next.js 15 App Router** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** animations
- **Dark/Light mode** with system preference detection
- **MDX Blog** system with reading time
- **Project Case Studies** with SSG
- **GitHub API** integration for live stats
- **Command Palette** (Ctrl+K) for quick navigation
- **Contact Form** with EmailJS and spam protection
- **SEO optimized** — Metadata API, JSON-LD, sitemap, robots.txt
- **Vercel Analytics** integration
- **Responsive design** — desktop and mobile
- **Lighthouse 95+** target

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Rahul-kumar-43/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `NEXT_PUBLIC_SITE_URL` | Your deployed site URL |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub username for stats |

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt
│   ├── globals.css         # Global styles
│   ├── blog/               # Blog pages
│   └── projects/           # Project case study pages
├── components/             # React components
│   ├── ThemeProvider.tsx    # Dark mode context
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer
│   ├── GitHubStats.tsx      # GitHub API stats
│   ├── CommandPalette.tsx   # Ctrl+K command palette
│   ├── LoadingScreen.tsx    # Loading animation
│   ├── ScrollToTop.tsx      # Scroll-to-top button
│   └── Resume.tsx           # Resume download
├── content/blog/           # MDX blog posts
├── lib/                    # Utilities
│   ├── blog.ts             # Blog post utilities
│   └── projects.ts         # Project data
├── public/                 # Static assets
└── .env.example            # Environment template
```

## 🛠️ Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

This project is optimized for **Vercel**:

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Add environment variables in Vercel settings
4. Deploy

## 📝 Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2026-03-01"
excerpt: "A brief description"
tags:
  - Tag1
  - Tag2
---

Your content here...
```

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.
