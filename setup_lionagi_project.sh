#!/bin/bash

# Create root directory
mkdir -p lionagi-webapp
cd lionagi-webapp

# Create src directory and its subdirectories
mkdir -p src/{pages,components/{layout,home,features,testimonials,comparison,ui},styles,lib,types,providers}

# Create pages
touch src/pages/{index.tsx,_app.tsx,404.tsx,features.tsx,testimonials.tsx,comparison.tsx,faq.tsx}
mkdir src/pages/api
touch src/pages/api/contact.ts

# Create components
touch src/components/layout/{Header.tsx,Footer.tsx,Layout.tsx}
touch src/components/home/Hero.tsx
touch src/components/features/FeatureCard.tsx
touch src/components/testimonials/{TestimonialCard.tsx,TestimonialCarousel.tsx}
touch src/components/comparison/ComparisonTable.tsx
touch src/components/{ContactForm.tsx,FAQAccordion.tsx,LazyImage.tsx,SEOHead.tsx,ErrorBoundary.tsx}
touch src/components/ui/{button.tsx,accordion.tsx,card.tsx,carousel.tsx,input.tsx,textarea.tsx,tooltip.tsx,toast.tsx,icons.tsx}

# Create other files
touch src/styles/globals.css
touch src/lib/utils.ts
touch src/types/index.ts
touch src/providers/theme-provider.tsx

# Create config files
touch {.gitignore,next.config.js,package.json,README.md,tsconfig.json}

echo "Project structure created successfully!"