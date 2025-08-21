# National Level Cybersecurity CTF Competition 2025

## Overview

This is a complete full-stack web application for the National Level Cybersecurity CTF Competition 2025, hosted by ACM Student Chapter at The NorthCap University. The application serves as the official landing page and information portal for a two-phase national cybersecurity competition targeting students and enthusiasts across India. 

Key features include:
- **Two-Phase Competition Structure**: Online Qualifiers (Sept 19-20) + Offline Grand Finale (Sept 26)
- **Prize Pool**: ₹50,000 worth of prizes with detailed breakdown
- **Registration System**: ₹400 fee-based registration with redirect to external form
- **Comprehensive Information**: Rules, timeline, FAQ, and contact details
- **Social Media Integration**: Links to Twitter, GitHub, LinkedIn, and Discord
- **Modern Design**: Cybersecurity-themed UI with dark colors, neon accents, and responsive layout

## Recent Changes (August 2025)
- ✅ Updated all content to match CTF competition proposal requirements
- ✅ Restructured Rules section with 6 main categories including registration fee and team size
- ✅ Updated Timeline with correct dates (September 19-26, 2025)
- ✅ Simplified FAQ to 5 key questions with emoji headers
- ✅ Added social media links in Footer component
- ✅ Updated Navigation and branding to "National CTF 2025"
- ✅ Modified Registration Banner with ₹400 fee information
- ✅ All registration buttons now redirect to Google Forms placeholder URL
- ✅ Fixed button visibility issues with improved CSS contrast
- ✅ Configured for Vercel deployment with vercel.json and API routes
- ✅ Created comprehensive deployment documentation
- ✅ Added .gitignore for proper version control

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Modern component-based UI built with React 18 and TypeScript for type safety
- **Vite Build System**: Fast development server and optimized production builds
- **Single Page Application**: Client-side routing using Wouter for seamless navigation
- **Component Library**: Extensive use of shadcn/ui components built on Radix UI primitives
- **Styling Framework**: Tailwind CSS with custom cybersecurity theme including dark backgrounds, neon colors (cyber-green, cyber-blue), and HSL color system
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation schemas

### Backend Architecture
- **Express.js Server**: RESTful API server with middleware for logging, JSON parsing, and error handling
- **TypeScript**: Full type safety across the backend codebase
- **Modular Structure**: Separation of concerns with dedicated files for routes, storage, and server configuration
- **Development Setup**: Hot reload with Vite integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM with Neon Database serverless connection
- **Schema Management**: Type-safe database operations using Drizzle with Zod integration
- **Development Storage**: In-memory storage implementation for development and testing
- **Migration System**: Drizzle Kit for database schema migrations and updates

### Authentication and Authorization
- **User Management**: Basic user entity with username/password fields ready for authentication implementation
- **Schema Validation**: Zod schemas for user input validation and type safety
- **Extensible Design**: Storage interface designed to easily accommodate authentication middleware

### External Dependencies
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Replit Integration**: Development environment optimizations including cartographer plugin and runtime error overlay
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Animation Library**: Embla Carousel for interactive content presentation
- **Date Handling**: date-fns for consistent date formatting and manipulation throughout the application