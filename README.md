# National Level Cybersecurity CTF Competition 2025

![CTF Competition Banner](https://img.shields.io/badge/CTF-Competition%202025-00ff88?style=for-the-badge&logo=security&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat&logo=tailwindcss)

## 🏆 Competition Overview

Welcome to the **National Level Cybersecurity CTF Competition 2025**! This is the official website for a two-phase cybersecurity competition hosted by **ACM Student Chapter, The NorthCap University**.

### 📅 Event Schedule
- **Online Qualifiers**: September 19-20, 2025 (24 hours)
- **Offline Grand Finale**: September 26, 2025 (8 hours)
- **Prize Pool**: ₹50,000

### 🎯 Competition Categories
- Web Security
- Cryptography  
- Binary Exploitation
- Reverse Engineering
- Steganography
- OSINT (Open Source Intelligence)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ctf-competition-2025.git
   cd ctf-competition-2025
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your database URL and other configurations
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5000`

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for client-side routing
- **Framer Motion** for animations

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** database
- **Neon Database** for serverless hosting

### Key Features
- 📱 **Responsive Design** - Works on all devices
- 🌙 **Dark Theme** - Cybersecurity-themed UI
- 🔒 **Security Focus** - Built with security best practices
- 🎨 **Modern UI/UX** - Clean, professional design
- 📧 **Registration System** - Integrated with external forms
- 🔗 **Social Integration** - Connected to social media

## 📁 Project Structure

```
ctf-website-2025/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components  
│   │   ├── lib/            # Utility functions
│   │   └── index.css       # Global styles
├── server/                 # Express backend
│   ├── routes.ts           # API route handlers
│   ├── storage.ts          # Database interface
│   └── index.ts            # Server entry point
├── shared/                 # Shared type definitions
│   └── schema.ts           # Database schemas
└── package.json           # Project dependencies
```

## 🎨 Design System

The website uses a custom cybersecurity-themed design system with:

- **Primary Colors**: Cyber green (#00ff88) and Cyber blue (#00d4ff)  
- **Background**: Dark theme with gradient overlays
- **Typography**: Modern, clean fonts optimized for readability
- **Components**: Custom-built components with hover effects and animations

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### Vercel (Recommended) 🚀
Deploy instantly with Vercel for optimal performance:

1. **GitHub Integration:**
   ```bash
   git push origin main
   ```
   Then deploy via [vercel.com](https://vercel.com)

2. **Direct CLI:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Other Platforms
- **Netlify** - Works out of the box
- **Replit Deployments** - Click "Deploy" button
- **Traditional VPS** - Use `npm run build` and serve `dist` folder

**🎯 Vercel provides automatic HTTPS, global CDN, and serverless functions - perfect for a national competition!**

## 📊 Competition Details

### 🏅 Prizes
- **1st Place**: ₹25,000 + CRTP voucher (Altered Security)
- **2nd Place**: ₹15,000 + OffSec training voucher  
- **3rd Place**: ₹10,000 + gift vouchers

### 📝 Registration
- **Fee**: ₹400 per team
- **Team Size**: 1-4 members
- **Eligibility**: Students and cybersecurity enthusiasts across India

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Support

- **Email**: ctf@thenorthcap.edu
- **Discord**: [Join our server](https://discord.gg/ctf-competition)
- **Twitter**: [@acm_northcap](https://twitter.com/acm_northcap)
- **LinkedIn**: [ACM TNU](https://linkedin.com/company/acm-tnu)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ACM Student Chapter, The NorthCap University** for hosting
- **Altered Security** and **OffSec** for sponsorship
- All contributors and participants

---

**Ready to hack? Register now and join the competition!** 🚀

[![Register Now](https://img.shields.io/badge/Register%20Now-Click%20Here-00ff88?style=for-the-badge)](https://forms.google.com/register-ctf)