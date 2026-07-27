# login-with-google test app

Public integration fixture for [`Monzingo89/login-with-google`](https://github.com/Monzingo89/login-with-google).

The application installs an exact package commit from GitHub and initializes it with VCV's existing Firebase web application configuration. Real values stay in the untracked `.env.local`; this repository contains placeholders only.

```bash
cp .env.example .env.local
npm install
npm run build
npm run dev
```

## Current live verification

- Package installation from the pinned public GitHub commit: passed
- TypeScript and production build: passed
- Firebase initialization with the VCV project/app configuration: passed
- Desktop and mobile responsive rendering: passed
- Handoff to Google OAuth: reached Google
- Completed Google sign-in: blocked by the existing OAuth client's redirect URI configuration

The VCV Firebase configuration intentionally uses:

```text
authDomain: vcv.robertjmonzingo.com
```

The Google OAuth web client for Firebase must include this exact authorized redirect URI:

```text
https://vcv.robertjmonzingo.com/__/auth/handler
```

After that external configuration is saved, rerun the browser test to complete the account round trip.
