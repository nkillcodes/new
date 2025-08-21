# 🚀 Vercel Deployment Guide - CTF Competition 2025

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub first:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CTF Competition 2025"
   git remote add origin https://github.com/yourusername/ctf-competition-2025.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Click "Deploy"

### Option 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy directly:**
   ```bash
   vercel --prod
   ```

## Project Configuration

The project is already configured for Vercel with:

### ✅ Files Created:
- `vercel.json` - Vercel deployment configuration
- `api/index.ts` - Serverless API functions
- `VERCEL_DEPLOYMENT.md` - This deployment guide

### ✅ Configuration Details:
- **Build Command**: `vite build` (builds the React frontend)
- **Output Directory**: `dist` (where Vite outputs the built files)
- **API Routes**: Handled by `api/index.ts` as serverless functions
- **Static Files**: Served from `dist` folder

## Environment Variables

If you need to add environment variables in Vercel:

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add the following if needed:
   ```
   NODE_ENV=production
   DATABASE_URL=your_database_url_here
   ```

## Domain Configuration

After deployment:
- Your site will be available at `https://your-project-name.vercel.app`
- You can add a custom domain in the Vercel dashboard under Settings → Domains

## API Endpoints

The following API endpoints will be available:
- `GET /api/health` - Health check endpoint
- `GET /api/stats` - Competition statistics

## Project Structure (Vercel Ready)

```
ctf-competition-2025/
├── api/
│   └── index.ts          # Serverless API functions
├── client/               # React frontend
├── server/               # Express server (for development)
├── vercel.json           # Vercel configuration
├── vite.config.ts        # Vite build configuration
└── package.json          # Dependencies
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that TypeScript compilation passes: `npm run check`
- Verify Vite build works locally: `npm run build`

### API Issues
- API functions are in `/api` folder
- Each file in `/api` becomes a serverless function
- Use `export default` for the main handler function

### Static Files
- All static files should be in the `dist` folder after build
- Images and assets are bundled by Vite

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN distribution
- ✅ Automatic HTTPS
- ✅ Serverless functions scaling
- ✅ Static file optimization
- ✅ Image optimization

## Monitoring

After deployment, monitor your site:
- Vercel Dashboard → Analytics
- Function logs in Vercel Dashboard → Functions
- Performance metrics in Vercel Dashboard → Speed Insights

---

## 🎯 Ready for Competition!

Your CTF website will be live at:
`https://your-project-name.vercel.app`

The site includes:
- 📱 Responsive design for all devices
- ⚡ Fast loading with CDN distribution
- 🔒 HTTPS by default
- 🌐 Global availability
- 📊 Real-time analytics

**Perfect for a national cybersecurity competition!** 🏆