# Project Structure

This document explains the organization and purpose of files in your portfolio project.

```
portfolio/
?
??? app/      # Next.js App Router directory
?   ??? layout.tsx    # Root layout with metadata, theme provider
?   ??? page.tsx           # Home page (combines all sections)
?   ??? globals.css       # Global styles and Tailwind directives
?
??? components/                # React components
?   ??? About.tsx  # About Me section with bio and skills
?   ??? Contact.tsx         # Contact form and information
?   ??? Experience.tsx     # Work experience timeline
?   ??? Footer.tsx       # Footer with links and copyright
?   ??? Hero.tsx                 # Landing/hero section
?   ??? Navbar.tsx       # Navigation bar with theme toggle
?   ??? Projects.tsx     # Projects showcase
?   ??? ThemeProvider.tsx        # Dark mode provider wrapper
?
??? data/       # Data files (edit these with your info)
?   ??? education.ts             # Education and certifications
?   ??? experience.ts          # Work experience data
?   ??? profile.ts      # Personal information and skills
?   ??? projects.ts         # Projects portfolio
?
??? public/    # Static files (served directly)
?   ??? avatar.jpg         # Your profile photo (add yours)
?   ??? og-image.jpg          # Social media preview image (add yours)
?   ??? resume.pdf       # Your resume PDF (add yours)
?   ??? favicon.ico          # Browser tab icon (add yours)
?   ??? FAVICON-INSTRUCTIONS.md  # Guide for adding favicons
?
??? node_modules/                 # Dependencies (auto-generated)
?
??? .next/         # Next.js build output (auto-generated)
?
??? .eslintrc.json          # ESLint configuration
??? .gitignore    # Git ignore rules
??? CUSTOMIZATION.md         # Guide for customizing your portfolio
??? DEPLOYMENT.md     # Guide for deploying to hosting
??? next.config.js # Next.js configuration
??? package.json      # Project dependencies and scripts
??? postcss.config.js            # PostCSS configuration for Tailwind
??? README.md        # Project overview and getting started
??? setup.ps1     # Windows setup script
??? tailwind.config.ts       # Tailwind CSS configuration
??? tsconfig.json     # TypeScript configuration
??? vercel.json            # Vercel deployment configuration
```

## Key Directories

### `/app` - Application Code
Next.js 14 uses the App Router. This directory contains:
- **layout.tsx**: Wraps all pages, includes metadata, fonts, theme provider
- **page.tsx**: The main page that combines all sections
- **globals.css**: Global CSS, Tailwind directives, custom utilities

### `/components` - UI Components
Reusable React components for each section:
- **Hero**: Landing section with intro and profile
- **About**: Biography, skills, expertise
- **Experience**: Timeline of work history
- **Projects**: Portfolio projects showcase
- **Contact**: Contact form and social links
- **Footer**: Site footer
- **Navbar**: Navigation with dark mode toggle
- **ThemeProvider**: Wrapper for next-themes

### `/data` - Content Data
TypeScript files containing your information:
- **profile.ts**: Name, title, bio, contact info, skills
- **experience.ts**: Work history, achievements, technologies
- **projects.ts**: Projects with descriptions and links
- **education.ts**: Education and certifications

**This is where you'll spend most time customizing!**

### `/public` - Static Assets
Files served directly without processing:
- Images (avatar, og-image, favicon)
- PDFs (resume)
- Any other static files

## Configuration Files

### `package.json`
Defines project dependencies and scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### `tsconfig.json`
TypeScript compiler configuration:
- Strict type checking enabled
- Path aliases (@/ for root)
- JSX settings for React

### `tailwind.config.ts`
Tailwind CSS configuration:
- Custom colors (primary palette)
- Custom animations
- Dark mode settings
- Content paths for purging

### `next.config.js`
Next.js configuration:
- React strict mode
- Image optimization domains
- Other Next.js settings

### `.eslintrc.json`
ESLint rules for code quality:
- Extends Next.js recommended config
- Helps catch common errors

### `vercel.json`
Deployment configuration for Vercel:
- Build commands
- Framework detection
- Output directory

## File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`)
- **Data files**: kebab-case (e.g., `profile.ts`)
- **Config files**: lowercase (e.g., `next.config.js`)
- **Markdown docs**: UPPERCASE (e.g., `README.md`)

## Import Aliases

The project uses `@/` as an alias for the root directory:

```typescript
// Instead of:
import { profile } from '../../../data/profile'

// You can use:
import { profile } from '@/data/profile'
```

## TypeScript Types

All data files include TypeScript interfaces:
- Provides autocomplete in your editor
- Catches errors at compile time
- Self-documenting code

Example from `data/profile.ts`:
```typescript
export interface Profile {
  name: string;
  title: string;
  // ... more fields
}
```

## Styling Approach

The project uses:
1. **Tailwind CSS**: Utility-first CSS framework
2. **CSS Classes**: Custom utilities in `globals.css`
3. **Inline Styles**: Occasionally for dynamic values

Tailwind classes are composed directly in JSX:
```typescript
<div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg">
```

## Animation

Framer Motion is used for animations:
- Page transitions
- Scroll animations
- Hover effects
- Loading states

## Dark Mode

Implemented using `next-themes`:
- System preference detection
- Toggle button in navbar
- Persists user preference
- Classes: `dark:` prefix in Tailwind

## Responsive Design

Mobile-first approach using Tailwind breakpoints:
- Default: Mobile (< 640px)
- `sm:` Small devices (? 640px)
- `md:` Medium devices (? 768px)
- `lg:` Large devices (? 1024px)
- `xl:` Extra large (? 1280px)

## Adding New Features

### New Section
1. Create component in `/components`
2. Add data file in `/data` (if needed)
3. Import in `app/page.tsx`
4. Add nav link in `components/Navbar.tsx`

### New Page
1. Create folder in `/app` (e.g., `/app/blog`)
2. Add `page.tsx` in that folder
3. Link from other pages

### New Data
1. Create TypeScript interface
2. Export data constant
3. Import where needed

## Build Output

When you run `npm run build`:
- `.next/` folder is created
- Contains optimized production build
- This is what gets deployed

## Development vs Production

**Development** (`npm run dev`):
- Hot reload
- Detailed error messages
- Source maps
- Not optimized

**Production** (`npm run build` ? `npm start`):
- Optimized bundle
- Minified code
- No source maps
- Maximum performance

## Environment

The project doesn't require environment variables by default, but you can add them:

1. Create `.env.local` (already in .gitignore)
2. Add variables: `NEXT_PUBLIC_API_KEY=value`
3. Access in code: `process.env.NEXT_PUBLIC_API_KEY`

## Best Practices

1. **Keep data separate**: Edit `/data` files, not components
2. **Use TypeScript**: Leverage type safety
3. **Follow conventions**: PascalCase components, etc.
4. **Test responsive**: Check all breakpoints
5. **Optimize images**: Use Next.js Image component
6. **Semantic HTML**: Use proper HTML5 elements
7. **Accessibility**: Add ARIA labels, alt text

## Getting Help

- Check component comments for inline documentation
- Review data interfaces for structure
- See CUSTOMIZATION.md for how-to guides
- See DEPLOYMENT.md for hosting guides
