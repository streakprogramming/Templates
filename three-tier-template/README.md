# three-tier-template

A client-only Next.js 15 demo showcasing three membership tiers with protected routes and TailwindCSS styling.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
# login with demo / 1234
```

## Available routes

- `/` – Landing page introducing the three tiers.
- `/login` – Client-side authentication form.
- `/basic` – Basic tier preview featuring a hero, features, and contact button.
- `/standart` – Standart tier with sticky sub-navigation, services, FAQ, and contact form.
- `/premium` – Premium tier with multilingual content switcher, gallery, FAQ, and contact section.

All tier pages are protected; unauthenticated visitors are redirected to `/login` and can access the content after signing in with the demo credentials.
