# CTF Website 2025 - Export Instructions

## Project Overview
This is a complete National Level Cybersecurity CTF Competition website for 2025, built with:
- **Frontend**: React + TypeScript + Vite
- **Backend**: Express.js + TypeScript  
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + shadcn/ui components
- **Features**: Responsive design, social media integration, registration system

## Recent Updates (August 2025)
✅ Fixed button visibility issues with improved CSS contrast
✅ Updated all branding to "National CTF 2025"
✅ Updated copyright to 2025 in Footer
✅ All registration buttons redirect to Google Forms
✅ Added social media links (Twitter, GitHub, LinkedIn, Discord)
✅ Updated event dates to September 19-26, 2025
✅ Prize pool: ₹50,000 with detailed breakdown
✅ Registration fee: ₹400 per team

## How to Export to Your GitHub Repository

### Method 1: Direct Git Push (Recommended)
1. **Initialize Git in your local folder:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: National CTF 2025 website"
   ```

2. **Connect to your GitHub repository:**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Method 2: Download and Upload
1. **Download these files from Replit:**
   - All files in `client/` folder (React frontend)
   - All files in `server/` folder (Express backend)
   - All files in `shared/` folder (shared schemas)
   - `package.json`, `package-lock.json`
   - `tailwind.config.ts`, `tsconfig.json`, `vite.config.ts`
   - `drizzle.config.ts`, `components.json`
   - `postcss.config.js`
   - This `EXPORT_INSTRUCTIONS.md` file

2. **Upload to GitHub:**
   - Create new repository on GitHub
   - Upload all downloaded files
   - Maintain folder structure

## Project Structure
```
ctf-website-2025/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utilities
│   │   └── index.css     # Global styles
├── server/               # Express backend
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database interface
│   └── index.ts          # Server entry
├── shared/               # Shared schemas
│   └── schema.ts         # Database schemas
├── package.json          # Dependencies
├── vite.config.ts        # Build configuration
├── tailwind.config.ts    # Styling config
└── drizzle.config.ts     # Database config
```

## Setup Instructions for New Environment
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   # Create .env file with:
   DATABASE_URL=your_postgresql_url
   NODE_ENV=development
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Access the website:**
   - Open http://localhost:5000
   - The application serves both frontend and backend on the same port

## Key Features
- **Two-phase competition**: Online Qualifiers (Sept 19-20) + Offline Grand Finale (Sept 26)
- **Registration system**: ₹400 fee with external form integration
- **Prize pool**: ₹50,000 total with detailed breakdown
- **Responsive design**: Works on desktop, tablet, and mobile
- **Social media integration**: Links to all major platforms
- **Modern UI**: Cybersecurity theme with dark colors and neon accents
- **SEO optimized**: Meta tags and proper HTML structure

## Important Notes
- All registration buttons redirect to: `https://forms.google.com/register-ctf`
- Social media links are configured for ACM TNU chapter
- Database is configured for PostgreSQL with Neon Database
- The project uses Wouter for client-side routing (not React Router)
- All styling uses Tailwind CSS with custom cybersecurity theme

## Support
- Contact: ctf@thenorthcap.edu  
- Discord: https://discord.gg/ctf-competition
- Hosted by ACM Student Chapter, The NorthCap University

---
**Ready to deploy!** 🚀 The website is fully functional and ready for your GitHub repository.