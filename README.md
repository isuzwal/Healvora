## Project Overview

Healvora is a healthcare web app built with the Next.js App Router. It includes public marketing content, authentication flows, and separate areas for admins, users, and doctors. The admin dashboard provides management views for appointments, chats, compliance items, doctors, meetings, patients, and payments. User pages cover bookings and settings, while doctor pages use a dynamic route to render profile or detail views. Legal and policy content is stored as MDX documents and served through the docs routes.

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?logo=radixui&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F23?logo=mdx&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5A3?logo=recharts&logoColor=white)
![TanStack Table](https://img.shields.io/badge/TanStack%20Table-FF4154?logo=reacttable&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-C04392?logo=emotion&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)

Key folders:

- `app/`: routes for public pages, auth flows, admin dashboard, user area, and doctor pages.
- `components/ui/`: reusable UI building blocks and feature sections.
- `hooks/`: shared React hooks.
- `lib/`: utilities and form schemas.
- `markdown/`: MDX content for policy and security pages.
- `public/`: static assets and images.

## Project Structure

```
.
|-- .env
|-- .git/
|-- .next/
|-- app/
|   |-- (auth)/
|   |   |-- admin-login/
|   |   |   `-- page.tsx
|   |   |-- admin-register/
|   |   |   `-- page.tsx
|   |   |-- login/
|   |   |   `-- page.tsx
|   |   `-- register/
|   |       `-- page.tsx
|   |-- (doc)/
|   |   |-- blog/ (empty)
|   |   |-- help/ (empty)
|   |   |-- policy/
|   |   |   `-- page.tsx
|   |   |-- security/
|   |   |   `-- page.tsx
|   |   `-- terms/
|   |       `-- page.tsx
|   |-- admin/
|   |   `-- dashboard/
|   |       |-- (managment)/
|   |       |   |-- appointments/
|   |       |   |   `-- page.tsx
|   |       |   |-- chat/
|   |       |   |   `-- page.tsx
|   |       |   |-- compliances/
|   |       |   |   |-- [id]/
|   |       |   |   |   `-- page.tsx
|   |       |   |   `-- page.tsx
|   |       |   |-- doctors/
|   |       |   |   |-- [id]/
|   |       |   |   |   `-- page.tsx
|   |       |   |   `-- page.tsx
|   |       |   |-- meeting/
|   |       |   |   `-- page.tsx
|   |       |   |-- patients/
|   |       |   |   |-- [id]/
|   |       |   |   |   `-- page.tsx
|   |       |   |   `-- page.tsx
|   |       |   `-- payments/
|   |       |       `-- page.tsx
|   |       |-- layout.tsx
|   |       `-- page.tsx
|   |-- compliance/
|   |   `-- page.tsx
|   |-- doctor/
|   |   `-- [...name]/
|   |       `-- page.tsx
|   |-- user/
|   |   |-- (managment)/
|   |   |   |-- bookings/
|   |   |   |   `-- page.tsx
|   |   |   `-- settings/
|   |   |       `-- page.tsx
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- favicon.ico
|   |-- globals.css
|   |-- layout.tsx
|   |-- mdx-components.tsx
|   `-- page.tsx
|-- components/
|   `-- ui/
|       |-- about-section-view.tsx
|       |-- accordion.tsx
|       |-- add-doctor-sidebar.tsx
|       |-- admin-login.tsx
|       |-- admin-register.tsx
|       |-- app-sidebar.tsx
|       |-- badge.tsx
|       |-- button.tsx
|       |-- card.tsx
|       |-- chart-area-interactive.tsx
|       |-- chart.tsx
|       |-- compliance-form.tsx
|       |-- conatiner-view.tsx
|       |-- dropdown-menu.tsx
|       |-- faq-view.tsx
|       |-- field.tsx
|       |-- footer-user.tsx
|       |-- footer-view.tsx
|       |-- hero-section-view.tsx
|       |-- input.tsx
|       |-- label.tsx
|       |-- nav-main.tsx
|       |-- navbar-view.tsx
|       |-- section.cards.tsx
|       |-- select.tsx
|       |-- separator.tsx
|       |-- services-section.tsx
|       |-- sheet.tsx
|       |-- sidebar-bottom-links.tsx
|       |-- sidebar.tsx
|       |-- site-header.tsx
|       |-- skeleton.tsx
|       |-- sonner.tsx
|       |-- table.tsx
|       |-- testimonials-sections.tsx
|       |-- text-animate.tsx
|       |-- textarea.tsx
|       |-- toggle-group.tsx
|       |-- toggle.tsx
|       |-- tooltip.tsx
|       |-- user-app-sidebar.tsx
|       |-- user-chat.tsx
|       |-- user-login-view.tsx
|       |-- user-register-view.tsx
|       |-- user-sections-card.tsx
|       |-- user-sidebar-footer.tsx
|       |-- user.header.tsx
|       `-- user.nav.tsx
|-- components.json
|-- eslint.config.mjs
|-- hooks/
|   `-- use-mobile.ts
|-- lib/
|   |-- forms-schema.ts
|   `-- utils.ts
|-- markdown/
|   |-- data-security.mdx
|   |-- privacy-poliy.mdx
|   `-- term-service.mdx
|-- next-env.d.ts
|-- next.config.ts
|-- node_modules/
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- public/
|   |-- file.svg
|   |-- globe.svg
|   |-- images/
|   |   |-- Avatar-1.png
|   |   |-- Avatar-2.png
|   |   |-- doctor-1.png
|   |   |-- doctor-2.png
|   |   |-- doctor-3.png
|   |   |-- first.png
|   |   |-- Hero.png
|   |   |-- lady.png
|   |   |-- third.png
|   |   `-- video-image.png
|   |-- next.svg
|   |-- vercel.svg
|   `-- window.svg
|-- README.md
|-- tsconfig.json
`-- types/
	|-- demo.data.ts
	|-- index.ts
	`-- url.ts
```

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
