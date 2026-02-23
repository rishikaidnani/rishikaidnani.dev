# Rishika Idnani - Portfolio Website

A modern, Netflix-inspired portfolio website for Rishika Idnani, showcasing her work as a Data Engineer.

## 🎨 Design Theme

- **Color Scheme**: Netflix-style black and red theme
- **Primary Colors**:
  - Background: Pure black (#000000) and dark gray (#141414)
  - Accent: Netflix Red (#E50914)
- **Inspiration**: Based on rameshmokariya.in with Netflix aesthetics

## 🚀 Tech Stack

- **Framework**: Vite + React 19
- **Styling**: Tailwind CSS 4 + CSS Variables
- **Icons**: React Icons
- **Deployment Ready**: Vercel configuration included

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Button, Card, Header, Footer)
│   ├── home/           # Hero/About Me section
│   ├── experience/     # Work Experience cards
│   ├── blogs/          # Blog grid and cards
│   └── contact/        # Contact section
├── data/
│   ├── experience.json # Work experience data
│   └── blogs.json      # Blog summaries
├── App.jsx             # Main application
└── index.css           # Global styles + Netflix theme
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ✅ TODO: Manual Data Entry Required

### 1. About Me Section
Update the placeholder text in src/components/home/Hero.jsx:
- Replace the 3 Lorem Ipsum paragraphs with actual bio/description

### 2. Work Experience
Update src/data/experience.json with LinkedIn data:
- Position titles
- Company names
- Employment dates
- Tech stacks (from LinkedIn skills)
- Impact/achievements for each role

**LinkedIn Profile**: https://www.linkedin.com/in/rishikaidnani/

### 3. Blog Summaries (Optional)
Verify and adjust blog summaries in src/data/blogs.json if needed.

## 📄 Sections

1. **About Me** - Introduction with name, title, and bio
2. **Work Experience** - Card-based display of professional experience
3. **Blogs** - 2x2 grid showcasing 4 technical blog posts
4. **Contact** - GitHub, LinkedIn, and Email links

## 🌐 Deployment

This project is ready to deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 Blog Posts Included

1. **ETL Development Life-Cycle with Dataflow** - Netflix Tech Blog
2. **Are All Netflix Application Crashes User-Impacting?** - Netflix Tech Blog
3. **Improve S3 Write Performance with Magic Committer in Spark3**
4. **Late-Arriving Data: Challenges and Traditional Solutions**

## 🎯 Features

- ✅ Netflix-style black and red theme
- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Hover animations and transitions
- ✅ Mobile-friendly hamburger menu
- ✅ Card-based layouts with red accents
- ✅ Tech stack pill badges
- ✅ Social media integration

## 📧 Contact Information

- **GitHub**: https://github.com/rishikaidnani
- **LinkedIn**: https://www.linkedin.com/in/rishikaidnani/
- **Email**: rishika.r.idnani@gmail.com

---

Built with ❤️ using Vite + React + Tailwind CSS
