# Your Personal AI Employee: Build, Train & Deploy Your Digital Worker

This is a Next.js 14 application built with the App Router, TypeScript, and Tailwind CSS. It presents a complete professional AI book as a premium book-style website.

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS for styling
- Responsive design
- Dark/light mode toggle
- Complete book content with 10 chapters
- Professional, book-style typography
- Chapter navigation and sidebar
- Fully static content (no backend required)

## Book Chapters

1. The Rise of AI Employees
2. What Is a Personal AI Employee?
3. Human vs AI Worker: Collaboration, Not Replacement
4. Core Skills of an AI Employee
5. Training Your AI Employee (Conceptual only)
6. AI Employees in Business (HR, Marketing, Trading, Support)
7. Building a Daily-Work AI Assistant
8. Ethics, Control, and Safety of AI Employees
9. The Future Workplace: Humans + AI
10. How Anyone Can Start Using an AI Employee Today

## Setup Instructions

1. Make sure you have Node.js (v18 or later) installed
2. Clone this repository
3. Install dependencies:
```bash
npm install
```
4. Run the development server:
```bash
npm run dev
```
5. Visit `http://localhost:3000` in your browser

## Build for Production

To build the application for production:

```bash
npm run build
```

Then run the production server:

```bash
npm run start
```

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── preface/page.tsx
│   ├── chapters/page.tsx
│   ├── chapters/[slug]/page.tsx
│   ├── about-book/page.tsx
│   ├── author/page.tsx
│   ├── future-of-ai/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ChapterSidebar.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── chapters.ts
├── styles/
│   └── globals.css
├── providers/
│   └── theme-provider.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Server Components
- Client Components
- Static Site Generation (SSG)

## Notes

- All content is stored statically in the `data/chapters.ts` file
- The application is completely static and requires no backend
- The theme toggle persists user preference in localStorage
- Responsive design works on all device sizes
- Semantic HTML for accessibility