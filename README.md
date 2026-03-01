# Jahswill Portfolio

Personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

## Deployment

- Push to GitHub repository and connect to Vercel for automatic builds.
- You may run `vercel` locally after logging in.

## Contact form

The contact section submits to an API route at `/api/contact`. The serverless
handler always logs submissions; if you want messages emailed, set the
following environment variables in Vercel (or `.env.local` locally):

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false        # true for port 465, false for 587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_EMAIL=you@example.com
```

Without SMTP settings the form still works but messages will only appear in
Vercel function logs (accessible in the dashboard).
