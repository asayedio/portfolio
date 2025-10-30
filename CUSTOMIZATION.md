# Customization Guide

This guide will help you customize your portfolio to match your personal brand and preferences.

## Table of Contents

1. [Personal Information](#personal-information)
2. [Colors and Branding](#colors-and-branding)
3. [Fonts](#fonts)
4. [Content](#content)
5. [Adding Your Photo](#adding-your-photo)
6. [Resume](#resume)
7. [Projects](#projects)
8. [Social Media Links](#social-media-links)
9. [SEO and Meta Tags](#seo-and-meta-tags)
10. [Advanced Customization](#advanced-customization)

## Personal Information

### Update Your Profile Data

Edit `data/profile.ts`:

```typescript
export const profile: Profile = {
  name: "Your Name",
  title: "Your Job Title",
  bio: "Your bio...",
  location: "Your Location",
  phone: "+1 234 567 890",
  email: "your.email@example.com",
  // ... update other fields
}
```

### Update Your Experience

Edit `data/experience.ts`:

- Add new positions
- Update job descriptions
- Add achievements
- Update technologies

### Update Your Education

Edit `data/education.ts`:

- Update degree information
- Add certifications
- Add relevant courses

## Colors and Branding

### Primary Color

Edit `tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
 400: '#38bdf8',
  500: '#0ea5e9',  // Base color
    600: '#0284c7',  // Use this for main actions
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',  // Darkest
  },
}
```

**Color Palette Generators:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co)
- [Adobe Color](https://color.adobe.com)

### Background Colors

To change the background gradient in the Hero section, edit `components/Hero.tsx`:

```typescript
// Find this line:
className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"

// Change the gradient colors
```

## Fonts

### Change Font Family

Edit `app/layout.tsx`:

```typescript
// Currently using Inter
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Example: Switch to Poppins
import { Poppins } from 'next/font/google'
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
})

// Then use: className={poppins.className}
```

**Popular Font Combinations:**
- **Modern:** Inter + Roboto Mono
- **Professional:** Poppins + Open Sans
- **Elegant:** Playfair Display + Source Sans Pro
- **Tech:** JetBrains Mono + IBM Plex Sans

Browse fonts: [Google Fonts](https://fonts.google.com)

## Content

### Hero Section

Edit `components/Hero.tsx`:

- Change the greeting text
- Update the subtitle
- Modify button labels
- Change the avatar display

### About Section

Edit `components/About.tsx`:

- Update the "Who I Am" description
- Rearrange skills display
- Change section layout

### Experience Timeline

Edit `components/Experience.tsx`:

- Change the timeline layout (vertical/horizontal)
- Modify card styles
- Update achievement bullet points

## Adding Your Photo

### Option 1: Local Image

1. Add your photo to `public/` folder (e.g., `avatar.jpg`)
2. Update `data/profile.ts`:
   ```typescript
   avatar: "/avatar.jpg"
   ```
3. Uncomment the Image component in `components/Hero.tsx`:
   ```typescript
   <Image
     src="/avatar.jpg"
     alt={profile.name}
     width={320}
     height={320}
     className="object-cover"
   />
   ```

### Option 2: External Image

If hosting your image on a CDN or external service:

1. Update `next.config.js`:
   ```javascript
   images: {
     domains: ['your-cdn-domain.com'],
   }
   ```
2. Update the image source in `components/Hero.tsx`

## Resume

### Add Your Resume PDF

1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. The download button will automatically link to it

### Alternative: Link to External Resume

Edit `components/Hero.tsx`:

```typescript
<a
  href="https://your-resume-url.com/resume.pdf"
  // or link to Google Drive, Dropbox, etc.
  target="_blank"
  className="btn-secondary flex items-center gap-2"
>
```

## Projects

### Add a New Project

Edit `data/projects.ts`:

```typescript
{
  title: "Project Name",
  description: "Short description",
  longDescription: "Detailed description...",
  technologies: ["Tech1", "Tech2"],
  github: "https://github.com/username/repo",
  demo: "https://project-demo.com",
  featured: true, // Shows in featured section
}
```

### Remove the Projects Section

If you don't want to show projects:

1. Open `app/page.tsx`
2. Remove or comment out: `<Projects />`

## Social Media Links

### Update Social Links

Edit `data/profile.ts`:

```typescript
social: {
  linkedin: "https://linkedin.com/in/username",
  github: "https://github.com/username",
  leetcode: "https://leetcode.com/username",
  // Add more if needed
}
```

### Add More Social Platforms

1. Update the `Profile` interface in `data/profile.ts`
2. Add the links to the profile object
3. Update `components/Hero.tsx` and `components/Footer.tsx` to include new icons

**Popular icon libraries:**
- Already included: `react-icons` (includes FiTwitter, FiInstagram, etc.)

## SEO and Meta Tags

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description...",
  keywords: [
    'your keywords',
    'relevant',
    'terms',
  ],
  // ... update other fields
}
```

### Open Graph Image

Create a social media preview image:

1. Create an image (1200x630px)
2. Save as `public/og-image.jpg`
3. Include your name, title, and optionally your photo
4. Use tools like Canva or Figma

## Advanced Customization

### Add a Blog Section

To add a blog:

1. Create `app/blog/page.tsx`
2. Create `data/blog-posts.ts`
3. Add a link in the navigation
4. Consider using MDX for blog posts

### Add Animations

The site uses Framer Motion. Customize animations in any component:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Change Layout Structure

All components are in the `components/` folder:

- `Hero.tsx` - Landing section
- `About.tsx` - About section
- `Experience.tsx` - Work history
- `Projects.tsx` - Portfolio projects
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer
- `Navbar.tsx` - Navigation

Rearrange them in `app/page.tsx` or modify their content.

### Add New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

Example - Skills section:

```typescript
// components/Skills.tsx
export default function Skills() {
  return (
    <section id="skills" className="section-container">
      {/* Your content */}
    </section>
  )
}
```

### Modify Responsive Behavior

Tailwind uses breakpoints:

- `sm:` - Small devices (640px+)
- `md:` - Medium devices (768px+)
- `lg:` - Large devices (1024px+)
- `xl:` - Extra large devices (1280px+)

Example:
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// 1 column on mobile, 2 on tablet, 3 on desktop
```

### Contact Form Integration

The contact form currently opens the default email client. To integrate with a backend:

1. **Option 1: Formspree**
   - Sign up at [formspree.io](https://formspree.io)
- Replace form action in `components/Contact.tsx`

2. **Option 2: Netlify Forms**
   - Add `data-netlify="true"` to the form
   - Handle form in `components/Contact.tsx`

3. **Option 3: API Route**
   - Create `app/api/contact/route.ts`
   - Implement email sending (using SendGrid, etc.)

## Testing Your Changes

After making changes:

1. Run development server: `npm run dev`
2. Test on multiple screen sizes (browser dev tools)
3. Test dark mode toggle
4. Check all links work
5. Verify form functionality
6. Test in different browsers

## Getting Help

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion Docs:** [framer.com/motion](https://www.framer.com/motion/)
- **React Icons:** [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)

## Need More Help?

Feel free to:
- Check the component code comments
- Review the data structure in `data/` folder
- Experiment with small changes first
- Use browser dev tools to inspect elements
