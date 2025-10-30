# Deployment Guide

This guide will help you deploy your portfolio website to Vercel or Netlify.

## Prerequisites

- Git installed on your computer
- A GitHub account
- Your portfolio code pushed to a GitHub repository

## Option 1: Deploy to Vercel (Recommended)

Vercel is the recommended hosting platform for Next.js applications.

### Steps:

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up using your GitHub account

2. **Import Your Project**
   - Click "Add New Project"
   - Select your portfolio repository from GitHub
   - Vercel will automatically detect it's a Next.js project

3. **Configure (Optional)**
   - Project Name: Choose a name for your project
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings ? Domains
   - Add your custom domain
   - Follow the DNS configuration instructions

### Automatic Deployments

- Every push to your main branch will trigger a new deployment
- Pull requests will get preview deployments

## Option 2: Deploy to Netlify

### Steps:

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account

2. **Import Your Project**
   - Click "Add new site" ? "Import an existing project"
   - Select GitHub and authorize Netlify
   - Choose your portfolio repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Configure Next.js (Important for Netlify)**
   - Install the Netlify plugin for Next.js:
     ```bash
     npm install -D @netlify/plugin-nextjs
     ```
   - Create a `netlify.toml` file (see below)
   - Commit and push the changes

5. **Custom Domain (Optional)**
   - Go to Site Settings ? Domain management
   - Add your custom domain
   - Follow the DNS configuration instructions

### netlify.toml Configuration

Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Environment Variables

If you need to add environment variables:

### Vercel:
1. Go to Project Settings ? Environment Variables
2. Add your variables
3. Redeploy your site

### Netlify:
1. Go to Site Settings ? Build & deploy ? Environment
2. Add your variables
3. Trigger a new deploy

## Custom Domain Setup

### For both Vercel and Netlify:

1. **Purchase a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. **Configure DNS**:
   - Add CNAME record pointing to your deployment URL
   - Or use A records for apex domain
   - Wait for DNS propagation (can take up to 48 hours)

3. **Enable HTTPS**:
   - Both Vercel and Netlify provide free SSL certificates
   - HTTPS is enabled automatically

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test dark mode toggle
- [ ] Verify social media links
- [ ] Test resume download
- [ ] Check page load speed
- [ ] Verify SEO meta tags (use view-source or inspector)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Share on social media to test Open Graph images

## Troubleshooting

### Build Fails

- Check the build logs for errors
- Ensure all dependencies are in `package.json`
- Test the build locally: `npm run build`
- Check Node.js version compatibility

### Images Not Loading

- Ensure images are in the `public` folder
- Check file paths are correct (case-sensitive)
- Update `next.config.js` image domains if loading external images

### Dark Mode Not Working

- Check browser console for JavaScript errors
- Ensure `next-themes` is properly installed
- Clear browser cache and cookies

## Monitoring and Analytics

### Add Google Analytics:

1. Get your GA tracking ID
2. Add to `app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
  strategy="afterInteractive"
/>
```

### Vercel Analytics:

- Enable in Vercel dashboard (Project Settings ? Analytics)
- Provides page views, performance metrics

## Updates and Maintenance

To update your live site:

1. Make changes locally
2. Test thoroughly
3. Commit and push to GitHub
4. Deployment happens automatically
5. Check the live site to verify changes

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
