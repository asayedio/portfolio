# Ahmed Sayed - Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

---

## ?? IMPORTANT: First Time Setup?

**?? [START HERE - Click to see setup instructions](START-HERE.md)**

Or double-click: `setup-node.bat` to auto-install everything!

---

## ?? Quick Deploy to Vercel with GitHub Actions

Want automatic deployments? **Double-click `setup-wizard.bat`** or run:

```powershell
.\setup-wizard.ps1
```

This interactive wizard will:
- ? Get your Vercel IDs
- ? Guide you to add GitHub secrets
- ? Set up automatic deployments
- ? Trigger your first deployment

**See:** [GITHUB-ACTIONS-COMPLETE-GUIDE.md](GITHUB-ACTIONS-COMPLETE-GUIDE.md) for detailed instructions.

---

## Prerequisites

Before you begin, you need to have Node.js installed on your computer.

### Installing Node.js via NVM (Recommended)

**NVM (Node Version Manager) allows you to easily manage multiple Node.js versions.**

#### For Windows:

1. **NVM has been installed!** If not, run:
   ```powershell
   winget install CoreyButler.NVMforWindows
   ```

2. **Close and reopen your terminal** (PowerShell as Administrator)

3. **Install Node.js LTS:**
   ```powershell
   nvm install 20.11.0
   nvm use 20.11.0
   ```

4. **Verify installation:**
   ```powershell
   node --version
   npm --version
   ```

?? **Need detailed help?** See [NODE-INSTALLATION-GUIDE.md](NODE-INSTALLATION-GUIDE.md) for complete instructions.

#### Alternative: Direct Installation

Download and install Node.js directly from [nodejs.org](https://nodejs.org/) (choose LTS version 18.x or 20.x)

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

### Option 1: Automatic Deployment with GitHub Actions (Recommended) ??

Set up once, deploy automatically on every push!

```powershell
# Run the interactive setup wizard
.\setup-wizard.ps1
```

Or see the complete guide: [GITHUB-ACTIONS-COMPLETE-GUIDE.md](GITHUB-ACTIONS-COMPLETE-GUIDE.md)

**Available Helper Scripts:**
- `setup-wizard.ps1` - Interactive setup (recommended)
- `get-vercel-ids.ps1` - Get your Vercel IDs via API
- `quick-deploy.ps1` - Deploy and get IDs in one step
- `validate-setup.ps1` - Check your configuration

**See:** [DEPLOYMENT-SCRIPTS-README.md](DEPLOYMENT-SCRIPTS-README.md) for script details.

### Option 2: Manual Deployment to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Option 3: Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

**See:** [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Customization

### Personal Data

Update your information in:
- `data/profile.ts` - Personal information, bio, skills
- `data/experience.ts` - Work experience
- `data/projects.ts` - Projects and side work
- `data/education.ts` - Education and certifications

### Styling

- Colors: Edit `tailwind.config.ts`
- Fonts: Update in `app/layout.tsx`
- Components: Modify files in `components/`

### Resume

Place your resume PDF in `public/resume.pdf`

## ?? Documentation

- **[START-HERE.md](START-HERE.md)** - First time setup guide
- **[GITHUB-ACTIONS-COMPLETE-GUIDE.md](GITHUB-ACTIONS-COMPLETE-GUIDE.md)** - Automatic deployment setup
- **[DEPLOYMENT-SCRIPTS-README.md](DEPLOYMENT-SCRIPTS-README.md)** - Helper scripts documentation
- **[GET-VERCEL-IDS.md](GET-VERCEL-IDS.md)** - Quick reference for Vercel IDs
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Manual deployment guide
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Customization guide
- **[PROJECT-STRUCTURE.md](PROJECT-STRUCTURE.md)** - Project structure explained
- **[NODE-INSTALLATION-GUIDE.md](NODE-INSTALLATION-GUIDE.md)** - Node.js installation help

## License

MIT License - Feel free to use this template for your own portfolio!

## Contact

Ahmed Sayed - [asayedio@hotmail.com](mailto:asayedio@hotmail.com)

LinkedIn: [linkedin.com/in/asayedio](https://www.linkedin.com/in/asayedio/)

GitHub: [github.com/asayedio](https://github.com/asayedio)
