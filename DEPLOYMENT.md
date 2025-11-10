# 🚀 Deployment Guide

## Step-by-Step Setup for GitHub Pages

### 1. Create GitHub Repository

1. Go to GitHub and create a new repository
2. **Name it exactly**: `ahmed-eltawil.github.io` (or your-username.github.io)
3. Make it **Public**
4. **Do NOT** initialize with README (we already have one)

### 2. Push Code to GitHub

```bash
# Navigate to your project folder
cd portfolio-site

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add remote (replace with your GitHub username)
git remote add origin https://github.com/ahmed-eltawil/ahmed-eltawil.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save

### 4. Configure GitHub Actions

The workflow file is already created at `.github/workflows/deploy.yml`.

It will automatically:
- Trigger on every push to `main`
- Install dependencies
- Build the Next.js site
- Deploy to GitHub Pages

### 5. First Deployment

After pushing your code, GitHub Actions will automatically run:

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see a workflow running: "Deploy to GitHub Pages"
4. Wait for it to complete (usually 2-3 minutes)
5. Once complete, your site will be live at: `https://ahmed-eltawil.github.io`

## 🔄 Future Updates

### Updating Content

1. Edit the data files in the `data/` folder
2. Commit and push:
```bash
git add .
git commit -m "Update project information"
git push
```

3. GitHub Actions will automatically rebuild and deploy!

### Adding Images

1. Add images to appropriate folders:
   - Projects: `public/images/projects/`
   - Certificates: `public/images/certificates/`

2. Update image paths in data files

3. Commit and push:
```bash
git add public/images
git commit -m "Add project images"
git push
```

## 🧪 Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run start
```

## 📝 Customization Checklist

Before deploying, make sure to:

- [ ] Update personal information in `data/` files
- [ ] Add your project images to `public/images/projects/`
- [ ] Add certificate images to `public/images/certificates/`
- [ ] Upload your latest CV to `public/resume/`
- [ ] Update GitHub and LinkedIn URLs in components
- [ ] Test locally with `npm run dev`
- [ ] Build successfully with `npm run build`

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
# Check for type errors
npm run lint
```

### Site Not Updating

1. Check GitHub Actions completed successfully
2. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
3. Wait 5-10 minutes for GitHub Pages to propagate

### Images Not Loading

1. Verify image paths in data files match actual file locations
2. Check image file extensions (case-sensitive)
3. Ensure images are in `public/images/` directory

## 📊 Performance Optimization

### Image Optimization

1. Compress images before uploading:
   - Use tools like TinyPNG or ImageOptim
   - Target < 500KB per image
   - Recommended dimensions: 1200x800px

2. Convert to WebP format for better compression:
```bash
# Install sharp
npm install -g sharp-cli

# Convert images
sharp -i input.jpg -o output.webp
```

### Lighthouse Score

Test your site's performance:
1. Open your site in Chrome
2. Press F12 (DevTools)
3. Go to "Lighthouse" tab
4. Run audit

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🔐 Security

### Environment Variables

If you add environment variables:
1. Never commit `.env` files
2. Use GitHub Secrets for sensitive data
3. Access via `process.env.VARIABLE_NAME`

### Dependencies

Keep dependencies updated:
```bash
# Check for updates
npm outdated

# Update dependencies
npm update
```

## 📱 Mobile Testing

Test on actual devices:
1. Get your local IP: `ifconfig` or `ipconfig`
2. Run dev server: `npm run dev`
3. Access from phone: `http://YOUR_IP:3000`

## 🎨 Custom Domain (Optional)

To use a custom domain (e.g., ahmedeltawil.com):

1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Add `CNAME` file to `public/` folder:
   ```
   yourdomain.com
   ```
3. Configure DNS:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `ahmed-eltawil.github.io`
4. In GitHub repo settings → Pages, add custom domain

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs for errors
2. Review Next.js build output
3. Test locally first with `npm run dev`
4. Check browser console for JavaScript errors

## ✅ Final Checklist Before Launch

- [ ] All personal information updated
- [ ] Project descriptions complete
- [ ] Images added and optimized
- [ ] CV/Resume uploaded
- [ ] Contact information correct
- [ ] Tested locally
- [ ] Build succeeds
- [ ] Links work (GitHub, LinkedIn, email)
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)
- [ ] No console errors

---

**You're ready to deploy! 🎉**

Run these commands:
```bash
git add .
git commit -m "Ready for deployment"
git push
```

Then watch your portfolio go live! 🚀
