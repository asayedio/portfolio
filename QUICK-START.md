# ? Quick Reference Card

## ?? Prerequisites

### Install Node.js First!

**NVM is already installed!** Now install Node.js:

```powershell
# Close this terminal, open NEW PowerShell (as Admin), then:
nvm install 20.11.0
nvm use 20.11.0
node --version
```

?? **Need help?** See [NODE-INSTALLATION-GUIDE.md](NODE-INSTALLATION-GUIDE.md) or [START-HERE.md](START-HERE.md)

---

## ?? Start Development
```bash
npm install    # First time only
npm run dev    # Start server at http://localhost:3000
```

## ?? Edit These Files

| What to Change | File to Edit |
|----------------|--------------|
| **Your Info** | `data/profile.ts` |
| **Work History** | `data/experience.ts` |
| **Projects** | `data/projects.ts` |
| **Education** | `data/education.ts` |
| **Colors** | `tailwind.config.ts` |
| **Fonts** | `app/layout.tsx` |

## ?? Add Media

| Item | Location |
|------|----------|
| **Your Photo** | `public/avatar.jpg` |
| **Resume PDF** | `public/resume.pdf` |
| **Social Image** | `public/og-image.jpg` |
| **Favicon** | `public/favicon.ico` |

## ?? Quick Customizations

### Change Primary Color
1. Go to `tailwind.config.ts`
2. Edit the `primary` color values
3. Use [uicolors.app/create](https://uicolors.app/create)

### Change Font
1. Go to `app/layout.tsx`
2. Change `import { Inter }` to another Google Font
3. Update the variable usage

### Add/Remove Sections
1. Edit `app/page.tsx`
2. Comment out unwanted sections
3. Or create new components in `components/`

## ?? Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Click Deploy

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repo
4. Configure: Build = `npm run build`, Publish = `.next`

## ?? Common Issues

| Problem | Solution |
|---------|----------|
| Module errors | Run `npm install` |
| Dark mode broken | Clear browser cache |
| Images not showing | Check file names and paths |
| Build fails | Run `npm run lint` |

## ?? Test Checklist

- [ ] Desktop view
- [ ] Mobile view
- [ ] Tablet view
- [ ] Dark mode
- [ ] All links work
- [ ] Form works
- [ ] Resume downloads
- [ ] Smooth scrolling

## ?? Your Contact Info

- **Email**: asayedio@hotmail.com
- **Phone**: +968 9234 3839
- **Location**: Muscat, Oman
- **LinkedIn**: [linkedin.com/in/asayedio](https://www.linkedin.com/in/asayedio/)
- **GitHub**: [github.com/asayedio](https://github.com/asayedio)

## ?? Full Documentation

- **GET-STARTED.md** - Complete getting started guide
- **CUSTOMIZATION.md** - Detailed customization guide
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT-STRUCTURE.md** - File organization
- **README.md** - Overview

## ?? Commands

```bash
npm run dev      # Development server
npm run build    # Build for production
npm start   # Run production build
npm run lint     # Check code quality
```

## ?? Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes

---

**Quick Start**: `npm install` ? `npm run dev` ? Open localhost:3000 ? Start customizing!
