# React Project Analysis
## Project Structure
```
 |-tailwind.config.js
 |-.env.local
 |-analyze_react_project.sh
 |-next.config.js
 | |-fallback-build-manifest.json
 | |-trace
 | |-react-loadable-manifest.json
 | |-build-manifest.json
 | | |-pages-manifest.json
 | | |-next-font-manifest.js
 | | |-_error.js
 | | |-interception-route-rewrite-manifest.js
 | | |-middleware-manifest.json
 | | |-middleware-react-loadable-manifest.js
 | | |-webpack-runtime.js
 | | |-middleware-build-manifest.js
 | | |-next-font-manifest.json
 | |-package.json
 |-next-env.d.ts
 |-README.md
 |-project_analysis.md
 |-.gitignore
 |-package-lock.json
 |-package.json
 |-tsconfig.json
 |-postcss.config.js
 | | |-index.ts
 | | |-theme-provider.tsx
 | | |-globals.css
 | | |-FAQAccordion.tsx
 | | |-SEOHead.tsx
 | | |-LazyImage.tsx
 | | |-ContactForm.tsx
 | | |-ErrorBoundary.tsx
 | | |-utils.ts
 | | |-index.tsx
 | | |-404.tsx
 | | |-features.tsx
 | | |-comparison.tsx
 | | |-testimonials.tsx
 | | |-component-showcase.tsx
 | | |-faq.tsx
 | | |-_app.tsx
```
## Package Information
### package.json
```json
{
    "name": "lionagi-webapp",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
    "dependencies": {
        "@hookform/resolvers": "^3.3.4",
        "@radix-ui/react-accordion": "^1.1.2",
        "@radix-ui/react-tooltip": "^1.0.7",
        "class-variance-authority": "^0.7.0",
        "clsx": "^2.1.0",
        "embla-carousel-react": "^8.0.0",
        "framer-motion": "^11.0.8",
        "lucide-react": "^0.350.0",
        "next": "^14.2.4",
        "next-themes": "^0.2.1",
        "nodemailer": "^6.9.12",
        "react": "18.2.0",
        "react-dom": "18.2.0",
        "react-hook-form": "^7.51.0",
        "tailwind-merge": "^2.2.1",
        "tailwindcss-animate": "^1.0.7",
        "zod": "^3.22.4"
    },
    "devDependencies": {
        "@types/node": "20.11.25",
        "@types/nodemailer": "^6.4.14",
        "@types/react": "18.2.64",
        "@types/react-dom": "18.2.21",
        "autoprefixer": "10.4.18",
        "eslint": "8.57.0",
        "eslint-config-next": "14.2.0",
        "postcss": "8.4.35",
        "tailwindcss": "3.4.1",
        "typescript": "5.4.2"
    },
    "engines": {
        "node": ">=20.0.0"
    }
}
```
### Dependencies
```
lionagi-webapp@0.1.0 /Users/lion/Library/Mobile Documents/com~apple~CloudDocs/GitHub/lion-site/lionagi-webapp
├── @hookform/resolvers@3.6.0
├── @radix-ui/react-accordion@1.2.0
├── @radix-ui/react-tooltip@1.1.1
├── @types/node@20.11.25
├── @types/nodemailer@6.4.15
├── @types/react-dom@18.2.21
├── @types/react@18.2.64
├── autoprefixer@10.4.18
├── class-variance-authority@0.7.0
├── clsx@2.1.1
├── embla-carousel-react@8.1.5
├── eslint-config-next@14.2.0
├── eslint@8.57.0
├── framer-motion@11.2.11
├── lucide-react@0.350.0
├── next-themes@0.2.1
├── next@14.2.4
├── nodemailer@6.9.14
├── postcss@8.4.35
├── react-dom@18.2.0
├── react-hook-form@7.52.0
├── react@18.2.0
├── tailwind-merge@2.3.0
├── tailwindcss-animate@1.0.7
├── tailwindcss@3.4.1
├── typescript@5.4.2
└── zod@3.23.8

```
## Potential React Component Files
List of .js and .jsx files in the src directory:
```
Warning: Command 'find src -type f ( -name *.js -o -name *.jsx )' failed, skipping...
```
