# Ahmed Sayed - Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

---

## ?? Automatic Deployment

This portfolio is configured with **GitHub Actions** for automatic deployment to Vercel.

? **Every push to `main` branch automatically deploys to production**  
? **Pull requests get preview deployments**  
? **No manual deployment steps needed**

**Live Site:** Visit your Vercel dashboard to see your deployment URL

---

## Prerequisites

Before you begin, you need to have Node.js installed on your computer.

### Installing Node.js

**Recommended:** Node.js LTS version 18.x or 20.x

Download and install from [nodejs.org](https://nodejs.org/)

**Verify installation:**
```bash
node --version
npm --version
```

## Features

- ?? Modern, minimal design
- ?? Dark mode support
- ?? Fully responsive
- ? Optimized for performance
- ? Accessible
- ?? SEO optimized
- ? Smooth animations with Framer Motion

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Theme:** next-themes
- **Deployment:** Vercel (with GitHub Actions CI/CD)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment

### Automatic Deployment (Already Configured) ??

This project uses **GitHub Actions** for continuous deployment:

- ? Push to `main` ? Automatic deployment to Vercel
- ? Pull requests ? Preview deployments
- ? Build errors ? Notifications in GitHub Actions

**Monitor deployments:**
- GitHub Actions: https://github.com/asayedio/portfolio/actions
- Vercel Dashboard: https://vercel.com/ahmed-sayeds-projects-4065aad7

### Manual Deployment (Alternative)

If you need to deploy manually:

**Option 1: Vercel CLI**
```bash
npm install -g vercel
vercel --prod
```

**Option 2: Vercel Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click "Deploy"

**Option 3: Netlify**
1. Visit [netlify.com](https://netlify.com)
2. Connect your repository
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Customization

### Personal Data

Update your information in:
- `data/profile.ts` - Personal information, bio, skills
- `data/experience.ts` - Work experience
- `data/projects.ts` - Projects and side work
- `data/education.ts` - Education and certifications

### Styling

- **Colors:** Edit `tailwind.config.ts`
- **Fonts:** Update in `app/layout.tsx`
- **Components:** Modify files in `components/`

### Assets

- **Resume:** Place your PDF in `public/resume.pdf`
- **Avatar:** Replace `public/avatar.jpg` with your photo
- **Favicon:** Update `public/favicon.ico`

## Project Structure

```
portfolio/
??? app/       # Next.js App Router
?   ??? layout.tsx         # Root layout
?   ??? page.tsx     # Home page
?   ??? globals.css        # Global styles
??? components/        # React components
??? data/      # Content data (customize here!)
??? public/                # Static assets
??? .github/workflows/     # GitHub Actions (deployment)
??? README.md             # This file
```

## ?? Documentation

- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - How to customize your portfolio
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment options and guides
- **[PROJECT-STRUCTURE.md](PROJECT-STRUCTURE.md)** - Detailed project structure

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Environment Variables (Optional)

If you need environment variables, create `.env.local`:

```env
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Issues

- Check GitHub Actions logs: https://github.com/asayedio/portfolio/actions
- Verify GitHub Secrets are set correctly
- Ensure all dependencies are in `package.json`

## License

MIT License - Feel free to use this template for your own portfolio!

## Contact

**Ahmed Sayed**

?? Email: [asayedio@hotmail.com](mailto:asayedio@hotmail.com)  
?? LinkedIn: [linkedin.com/in/asayedio](https://www.linkedin.com/in/asayedio/)  
?? GitHub: [github.com/asayedio](https://github.com/asayedio)

---

**Built with ?? using Next.js and TypeScript**
