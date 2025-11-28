# Quick Start Guide

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Clerk
1. Visit https://dashboard.clerk.com
2. Create a new application (choose your preferred strategy)
3. Copy your credentials:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_`)
   - `CLERK_SECRET_KEY` (starts with `sk_`)
   - Frontend API URL

4. Create `.env.local` from the template:
```bash
cp .env.local.example .env.local
```

5. Update `.env.local` with your Clerk credentials:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_FRONTEND_API=https://xxx.clerk.accounts.dev
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/agencies
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard/agencies
```

6. In Clerk Dashboard, configure your Redirect URLs:
   - Add `http://localhost:3000/sign-in` for development
   - Add `http://localhost:3000/sign-up` for development
   - Add your production URLs for deployment

### 3. Verify CSV Files
Make sure these files exist in the `data/` folder:
- `data/agencies_agency_rows.csv`
- `data/contacts_contact_rows.csv`

### 4. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 5. Test the Application
- You'll be redirected to `/sign-in`
- Click "Sign up" to create a new account
- After authentication, you'll be redirected to `/dashboard/agencies`
- Navigate between Agencies and Contacts using the navbar
- Test the 50-contact daily limit on the Contacts page

## Project Features Implemented

✅ Clerk Authentication (Sign In/Sign Up)
✅ Protected Dashboard Routes
✅ Agencies Table (displays all agencies from CSV)
✅ Contacts Table with 50-per-day limit
✅ Daily limit tracking using localStorage
✅ Navbar for navigation between pages
✅ CSV file reader utility (`lib/readCsv.ts`)
✅ API routes for agencies and contacts
✅ TypeScript throughout
✅ Clean, simple table-based UI
✅ Middleware for route protection
✅ Vercel-ready configuration

## File Structure Summary

```
dashboard/
├── src/
│   ├── app/
│   │   ├── api/              (API routes)
│   │   ├── dashboard/        (Protected dashboard routes)
│   │   ├── sign-in/          (Authentication)
│   │   ├── sign-up/          (Authentication)
│   │   ├── layout.tsx        (Root layout with ClerkProvider)
│   │   ├── page.tsx          (Home - redirects based on auth)
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx        (Navigation component)
│   │   └── Navbar.module.css
│   └── lib/
│       └── readCsv.ts        (CSV reading utility)
├── data/
│   ├── agencies_agency_rows.csv
│   └── contacts_contact_rows.csv
├── middleware.ts             (Clerk middleware for route protection)
├── .env.local.example        (Clerk configuration template)
├── package.json
└── README.md
```

## Deployment to Vercel

1. Push your code to GitHub
2. Visit https://vercel.com/new
3. Import your repository
4. Add these environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CLERK_FRONTEND_API`
   - Other Clerk environment variables from `.env.local`
5. Deploy!

6. In Clerk Dashboard, add your Vercel URLs to Redirect URLs

## Troubleshooting

**Issue**: "Clerk not initialized"
- Make sure `.env.local` has all required Clerk variables

**Issue**: "Cannot read CSV files"
- Verify CSV files exist in `data/` folder
- Check file permissions

**Issue**: "Daily limit not working"
- Clear browser localStorage
- Make sure JavaScript is enabled
- Check browser console for errors

**Issue**: "Tables showing no data"
- Verify CSV file format and headers
- Check API routes in browser Network tab
- Look at server console for errors

For more help, see README.md
