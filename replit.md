# PLAIN TIME - Retro Pixelated Stopwatch

## Overview

PLAIN TIME is a minimalist stopwatch application featuring a retro pixelated aesthetic inspired by classic gaming visuals. The application presents a simple timer interface with start/pause and reset controls, adhering to a strict two-color design philosophy (pure blue background with white text). The project is built as a full-stack web application using modern React tooling on the frontend and Express.js on the backend, though the current implementation focuses primarily on client-side timer functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast hot module replacement
- Client-side routing handled by Wouter (lightweight alternative to React Router)
- Component structure follows a single-page application pattern with the timer as the primary view

**UI Component System**
- Shadcn/ui component library (New York style variant) providing pre-built accessible components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom theme configuration
- CSS variables system for consistent theming and color management

**Design System Implementation**
- Strict adherence to retro pixelated aesthetic defined in `design_guidelines.md`
- Two-color palette: pure blue (#0000FF) background with white (#FFFFFF) text
- Press Start 2P Google Font for authentic pixel-art typography
- Flexbox-based vertical centering layout system
- No animations or transitions to maintain authentic retro feel

**State Management**
- TanStack Query (React Query) for server state management and caching
- Local React state (useState, useRef) for timer logic and UI interactions
- Timer implementation uses `useRef` for tracking elapsed time and interval management
- localStorage for persistent timer state across browser sessions and device sleep/wake cycles

**Timer Logic Design**
- Accumulator pattern: tracks total elapsed time separately from running intervals
- High-precision timing using `Date.now()` instead of interval counting
- State tracking for running/paused status with dynamic UI updates
- Format switching: displays MM:SS.ss format, switches to H:MM:SS.ss after one hour
- Persistent state management: timer state (accumulatedTime, isRunning, startTime) saved to localStorage
- On app reopen/reload, if timer was running, actual elapsed time is recalculated based on stored start time
- Ensures timer remains accurate even when browser is closed or device is locked

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript throughout the backend for type consistency
- Module system using ES modules (type: "module" in package.json)

**Development vs Production**
- Development: Vite middleware integration for HMR and asset serving
- Production: Pre-built static assets served from dist/public
- Environment-aware configuration via NODE_ENV

**API Structure**
- RESTful API pattern with `/api` prefix for all backend routes
- Request/response logging middleware for debugging
- Error handling middleware with status code and message extraction
- Currently minimal API implementation (placeholder routes in `server/routes.ts`)

**Storage Layer**
- Abstraction layer defined via `IStorage` interface for database operations
- In-memory storage implementation (`MemStorage`) for development/testing
- User model defined with username/password fields
- Prepared for database integration via Drizzle ORM

### Data Storage Design

**ORM & Database**
- Drizzle ORM configured for PostgreSQL dialect
- Schema-first approach with TypeScript type inference
- Migration system configured to output to `./migrations` directory
- Database connection via `@neondatabase/serverless` for serverless PostgreSQL

**Schema Design**
- Users table with UUID primary keys (generated via `gen_random_uuid()`)
- Username uniqueness constraint for authentication scenarios
- Password storage field (note: requires hashing implementation for production)
- Zod validation schemas generated from Drizzle schema for runtime type checking

**Current State**
- Database schema defined but not actively used in current timer implementation
- Storage abstraction allows switching between in-memory and database persistence
- Ready for expansion to support user accounts, saved timer sessions, or historical data

### External Dependencies

**Core UI Libraries**
- Radix UI component primitives (20+ packages) for accessible, unstyled UI components
- Shadcn/ui configuration for pre-styled component variants
- Tailwind CSS with PostCSS for utility-first styling
- Lucide React for iconography (though minimally used given retro design constraints)

**Fonts & Assets**
- Google Fonts: Press Start 2P for pixelated retro typography
- Font loading via link tags in HTML head for performance

**State & Data Management**
- TanStack React Query v5 for server state, caching, and data fetching
- React Hook Form with Hookform Resolvers for potential form handling
- Date-fns for date/time manipulation utilities

**Database & Backend Services**
- Neon Database serverless PostgreSQL driver
- Drizzle ORM for type-safe database queries
- Drizzle Zod for schema validation integration
- Connect-pg-simple for PostgreSQL session storage (prepared for authentication)

**Development Tools**
- Replit-specific plugins: runtime error modal, cartographer, dev banner
- ESBuild for production server bundling
- TSX for TypeScript execution in development
- Vite plugins for React and development tooling

**Routing & Navigation**
- Wouter for lightweight client-side routing

**Validation**
- Zod for runtime type validation and schema definitions

**Note on Database**
- While Drizzle ORM is configured, the application may be extended to use PostgreSQL for persistent storage of timer data, user sessions, or application state. The current implementation operates entirely client-side without database persistence.