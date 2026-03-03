This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## How to Create and Link Translations

The Sanity content types **Services** and **Service Details** are multilingual (English / Arabic). Each document has a Language field and a Translations array to link equivalent documents across locales.

### Creating a new Service (en/ar)

1. Create a new Service document in Sanity Studio.
2. Choose **Language** (English or Arabic).
3. Fill **Title**, **Description**, and **Icon**.
4. Save.

### Linking translations

1. Create the English version, save.
2. Create the Arabic version, save.
3. In the English document, open the **Translations** field and add a reference to the Arabic document.
4. In the Arabic document, add a reference to the English document.
5. Both documents now reference each other.

The same workflow applies to **Service Details** documents (detail pages at `/services/[slug]`).

### Migration for existing documents

If you have existing Services or Service Details without a language:

1. Open each document and set **Language** to English or Arabic.
2. Save.
3. For each pair (EN ↔ AR), add the other document to the **Translations** array.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
