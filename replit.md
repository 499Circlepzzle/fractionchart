# Rectangle Ratio Creator

## Overview

This is a React-based web application built with TypeScript, Vite, and Tailwind CSS that appears to be designed for creating and managing rectangle ratios. The project uses the shadcn/ui component library for a modern, accessible user interface and is set up as a single-page application (SPA) with client-side routing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for client-side navigation with a catch-all route for 404 handling
- **State Management**: React Query (TanStack Query) for server state management and caching

### Styling and UI Components
- **CSS Framework**: Tailwind CSS with custom configuration for consistent theming
- **Component Library**: shadcn/ui providing a comprehensive set of accessible, customizable components
- **Theme System**: CSS variables-based theming with dark mode support via next-themes
- **Design System**: Custom color palette, typography, and spacing configured through Tailwind

### Development and Code Quality
- **TypeScript Configuration**: Strict mode disabled for flexibility, with path aliases for clean imports
- **Linting**: ESLint with TypeScript and React-specific rules
- **Build Process**: Vite with SWC for fast compilation and hot module replacement
- **Development Server**: Configured to run on port 8080 with IPv6 support

### Component Architecture
- **UI Components**: Modular component system with consistent styling using class-variance-authority
- **Toast Notifications**: Dual toast system using both Radix UI toast and Sonner for different notification needs
- **Form Handling**: React Hook Form integration with Zod resolvers for validation
- **Responsive Design**: Mobile-first approach with custom mobile detection hooks

### External Integrations
- **Lovable Platform**: Integrated with Lovable development platform for collaborative editing
- **Component Tagging**: Development-mode component tagging for enhanced debugging

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router DOM for core functionality
- **Build Tools**: Vite with React SWC plugin for fast development and building
- **TypeScript**: Full TypeScript support with strict configuration options

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and functionality
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library providing consistent iconography

### State and Data Management
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration layer for form validation libraries

### Utility Libraries
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditional CSS class concatenation
- **date-fns**: Date manipulation and formatting library
- **cmdk**: Command palette component for enhanced UX
- **next-themes**: Theme switching functionality

### Development Dependencies
- **ESLint**: Code linting with TypeScript and React-specific rules
- **TypeScript ESLint**: TypeScript-aware linting rules and parser
- **Globals**: Global variable definitions for different environments

The application is structured as a modern, component-driven React application with a focus on developer experience, accessibility, and maintainability. The architecture supports rapid development while maintaining code quality through TypeScript, linting, and a well-organized component system.