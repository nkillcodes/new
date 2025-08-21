# ACM CTF Championship 2024

## Overview

This is a full-stack web application for the National Level Cybersecurity CTF Competition 2025. It serves as the main landing page and information portal for a national cybersecurity competition targeting college students across India. The application provides comprehensive information about the two-phase competition (online qualifiers and offline grand finale), categories, rules, timeline, FAQ, prizes worth ₹50,000, and registration details. It features a modern cybersecurity-themed design with dark colors, neon accents, and interactive components to create an engaging user experience for potential participants.

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