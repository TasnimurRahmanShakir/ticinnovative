# TIC Innovative Inc - Web Application

Welcome to the TIC Innovative Inc web application repository. This project is a Next.js application designed to showcase the logistics and fulfillment services offered by TIC Innovative Inc, specifically focusing on Amazon FBA/FBM and Walmart Fulfillment Services (WFS).

## Features

-   **Dynamic Service Pages**: Reusable layout and components for various services (Amazon FBA, WFS, etc.).
-   **WFS Prep Service Page**: A dedicated page for Walmart Fulfillment Service preparation, featuring:
    -   Hero section with call-to-action.
    -   Problem/Solution intro.
    -   "How It Works" steps.
    -   Detailed service list.
    -   "Why Choose Us" value propositions.
-   **Reusable Components**:
    -   `HeroSection`: Configurable hero banner with optional buttons.
    -   `ServiceCard`: Displays service details with alternating layouts.
    -   `HowItWorks`: Animated step-by-step guide.
    -   `WhyChooseUs`: Feature list with an accompanying image.
    -   `GetStartedToday`: Call-to-action section.
    -   `ContentSection`: Generic section for text-heavy content.
-   **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile.
-   **Modern UI**: Clean, professional aesthetics with smooth animations (Framer Motion).

## Project Structure

-   `app/(main)`: Main application routes.
    -   `services/[service]`: Dynamic route for service pages.
-   `components`: Reusable React components.
    -   `UI`: Basic UI elements (Cards, Icons).
-   `Constants`: Data files for static content.
    -   `ServiceItems.js`: Data for Amazon and general services.
    -   `WfsData.js`: Data for the WFS Prep Service page.
    -   `HowItWorks.js`: Default data for the "How It Works" section.
-   `public/images`: Static assets.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Pages

-   **Home**: `/`
-   **Amazon FBA/FBM**: `/services/amazon-fba-fbm`
-   **WFS Prep Service**: `/services/wfs-service`

## Technologies Used

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion/)
