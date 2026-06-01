# Portfolio Project Structure & File Guide

This document explains the purpose of each file and directory in your React + Vite portfolio project. This will help you navigate and update your website in the future.

## Project Root

- **`index.html`**: The main HTML entry point of your website. This is where your React app is injected. You can update your `<title>`, meta tags for SEO, and Favicon here.
- **`package.json`**: Lists all the dependencies (like `react`, `framer-motion`, `react-icons`) and scripts (like `npm run dev` and `npm run build`) used in your project.
- **`vite.config.ts`**: Configuration file for Vite, the build tool powering your project. It optimizes how your code is bundled and served locally.
- **`tsconfig.json` & `tsconfig.app.json` & `tsconfig.node.json`**: Configuration files for TypeScript, ensuring your code is type-checked and compiled correctly.

## Source Directory (`/src`)

This is where all the actual code for your website lives.

### Core Files
- **`main.tsx`**: The main entry point for the React application. It grabs the root element from `index.html` and renders the `<App />` component into it.
- **`App.tsx`**: The root component of your website. It acts as the skeleton, bringing together the Navbar, all the page sections (Hero, About, Skills, etc.), and the Footer in the correct order.
- **`vite-env.d.ts`**: TypeScript declaration file to help TS understand Vite-specific environment variables.

### Styling
- **`index.css`**: Your global stylesheet and design system. It contains:
  - Font imports (Inter & Outfit).
  - CSS Variables for colors, spacing, and shadows for both **Light Mode** and **Dark Mode** (`[data-theme='dark']`).
  - Global CSS resets and base styles (e.g., body background, default font).
  - Reusable utility classes like `.glass` (for glassmorphism) and `.text-gradient`.

### Custom Hooks (`/src/hooks`)
- **`useTheme.ts`**: A custom React hook that manages switching between Light Mode and Dark Mode. It remembers the user's preference by saving it to the browser's `localStorage` and applies the theme to the `document.documentElement`.

### UI Components (`/src/components/ui`)
These are small, reusable building blocks used across different sections of your site.
- **`Button.tsx` / `.css`**: A highly reusable button component with built-in hover and tap animations using Framer Motion. It supports multiple styles (primary, outline, ghost) and sizes.
- **`SectionHeading.tsx` / `.css`**: A standardized, animated title component used at the top of every major section (e.g., "About Me", "Featured Projects") to keep the design consistent.
- **`ThemeToggle.tsx` / `.css`**: The interactive sun/moon button in the Navbar that triggers the `useTheme` hook to switch colors.

### Layout Components (`/src/components/layout`)
These are the persistent components that appear on every page.
- **`Navbar.tsx` / `.css`**: The top navigation bar. It includes your logo, links to sections, the theme toggle, and a responsive mobile hamburger menu. It also detects scrolling to add a glassmorphism effect.
- **`Footer.tsx` / `.css`**: The bottom section of your website containing a brief tagline, copyright information, and links to your social profiles (GitHub, LinkedIn, Email).

### Page Sections (`/src/components/sections`)
Each of these files represents a distinct visual block (or "page section") on your portfolio.
- **`Hero.tsx` / `.css`**: The very top of your website that visitors see first. It includes the animated gradient blobs in the background, your main title, value proposition, and call-to-action buttons.
- **`About.tsx` / `.css`**: Your professional summary, mission statement, and key highlights (AI Integration, Full-Stack, Data-Driven).
- **`Skills.tsx` / `.css`**: Displays your technical arsenal (Languages, AI/ML, Databases) using categorized lists and animated progress bars.
- **`Experience.tsx` / `.css`**: A vertical timeline component showcasing your professional work history (e.g., HELYXON Internship).
- **`Projects.tsx` / `.css`**: A responsive grid of interactive cards detailing your recent projects, including technologies used, achievements, and links to GitHub.
- **`Education.tsx` / `.css`**: Highlights your academic background, degree, and CGPA from Amrita Vishwa Vidyapeetham.
- **`Achievements.tsx` / `.css`**: Displays your notable milestones, such as your participation in the CodeOClock Hackathon.
- **`Contact.tsx` / `.css`**: The bottom section featuring your contact information (Email, Phone, Location) and a professional form layout.

---

### How to Update Content
To update any text on your website, simply locate the corresponding section in `/src/components/sections/`. 
For example, if you want to add a new project, open `Projects.tsx`, look for the `const projects = [...]` array at the top of the file, and add your new project object to the list. The UI will automatically update to display it!
