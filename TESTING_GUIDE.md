# Testing Guide - Wathb Environmental Consulting

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Default URL: `http://localhost:3000`
   - The server will automatically redirect `/` to `/ar` (default locale)

---

## Testing Checklist

### ✅ Basic Routing Tests

#### Root Redirect
- [ ] Visit `http://localhost:3000/` → Should redirect to `http://localhost:3000/ar`

#### Arabic Routes (RTL - Right to Left)
- [ ] `http://localhost:3000/ar` → Home page
- [ ] `http://localhost:3000/ar/about` → About page
- [ ] `http://localhost:3000/ar/services` → Services listing
- [ ] `http://localhost:3000/ar/services/environmental-impact-assessment` → Service detail
- [ ] `http://localhost:3000/ar/projects` → Projects listing
- [ ] `http://localhost:3000/ar/projects/test-project` → Project detail
- [ ] `http://localhost:3000/ar/articles` → Articles listing
- [ ] `http://localhost:3000/ar/articles/test-article` → Article detail
- [ ] `http://localhost:3000/ar/contact` → Contact page

#### English Routes (LTR - Left to Right)
- [ ] `http://localhost:3000/en` → Home page
- [ ] `http://localhost:3000/en/about` → About page
- [ ] `http://localhost:3000/en/services` → Services listing
- [ ] `http://localhost:3000/en/services/environmental-impact-assessment` → Service detail
- [ ] `http://localhost:3000/en/projects` → Projects listing
- [ ] `http://localhost:3000/en/projects/test-project` → Project detail
- [ ] `http://localhost:3000/en/articles` → Articles listing
- [ ] `http://localhost:3000/en/articles/test-article` → Article detail
- [ ] `http://localhost:3000/en/contact` → Contact page

---

### ✅ Service Slugs Testing

Test all 11 required service slugs:

1. [ ] `/ar/services/environmental-impact-assessment`
2. [ ] `/ar/services/environmental-auditing`
3. [ ] `/ar/services/reports-and-records-preparation`
4. [ ] `/ar/services/environmental-management-plans`
5. [ ] `/ar/services/environmental-treatment-and-rehabilitation`
6. [ ] `/ar/services/solid-waste-management`
7. [ ] `/ar/services/environmental-consulting`
8. [ ] `/ar/services/sustainability-and-circular-economy`
9. [ ] `/ar/services/training-and-capacity-building`
10. [ ] `/ar/services/environmental-measurements-and-monitoring`
11. [ ] `/ar/services/environmental-observations-implementation`

Repeat for English (`/en/services/...`)

---

### ✅ i18n & Localization Tests

#### HTML Attributes
- [ ] Arabic pages: Check `<html lang="ar" dir="rtl">` in page source
- [ ] English pages: Check `<html lang="en" dir="ltr">` in page source

#### Content Display
- [ ] Arabic pages show Arabic text (if using translations)
- [ ] English pages show English text (if using translations)

---

### ✅ SEO & Metadata Tests

For each page, check in browser DevTools → Elements or View Page Source:

- [ ] `<title>` tag is present and correct
- [ ] `<meta name="description">` is present
- [ ] Page has proper H1 heading

---

### ✅ Dynamic Routes Testing

#### Test Valid Slugs
- [ ] `/ar/services/any-slug-name` → Should display the slug
- [ ] `/ar/articles/any-article-slug` → Should display the slug
- [ ] `/ar/projects/any-project-slug` → Should display the slug

#### Test Edge Cases
- [ ] `/ar/services/` (trailing slash) → Should work or redirect
- [ ] `/ar/services/slug-with-special-chars` → Should handle correctly
- [ ] `/ar/services/multiple-words-slug` → Should work

---

### ✅ Build & Production Test

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Test all routes in production mode**

---

## Expected Page Content

All pages should display minimal skeleton content:

- **H1 heading** with page title
- **1-2 lines** of descriptive text
- **No UI components** (no cards, buttons, forms, etc.)
- **No styling** (basic HTML only)

---

## Browser DevTools Checks

1. **Open DevTools** (F12)
2. **Check Console** for errors
3. **Check Network tab** for failed requests
4. **Check Elements** for correct HTML structure
5. **Check Application** → Cookies (if using)

---

## Common Issues & Solutions

### Issue: Page not found (404)
- **Solution:** Check the route path matches exactly (case-sensitive)
- Verify the file exists in `src/app/[locale]/[route]/page.js`

### Issue: Redirect not working
- **Solution:** Check `src/middleware.js` is in the root `src/` folder
- Verify `next.config.mjs` includes next-intl plugin

### Issue: Wrong language/direction
- **Solution:** Check `src/app/[locale]/layout.js` sets `dir` correctly
- Verify locale is being passed correctly

### Issue: Build errors
- **Solution:** Run `npm run build` to see detailed error messages
- Check all page files have proper exports

---

## Quick Test Script

You can use this to test all routes programmatically:

```bash
# Test Arabic routes
curl http://localhost:3000/ar
curl http://localhost:3000/ar/about
curl http://localhost:3000/ar/services
curl http://localhost:3000/ar/services/environmental-impact-assessment

# Test English routes
curl http://localhost:3000/en
curl http://localhost:3000/en/about
curl http://localhost:3000/en/services
```

---

## Testing Checklist Summary

- [x] Development server starts without errors
- [ ] Root redirect works (`/` → `/ar`)
- [ ] All static pages load (Home, About, Services, Projects, Articles, Contact)
- [ ] All dynamic routes work (`[slug]` pages)
- [ ] All 11 service slugs work
- [ ] Arabic pages have RTL direction
- [ ] English pages have LTR direction
- [ ] HTML lang attribute is correct
- [ ] Metadata (title, description) is present
- [ ] Build completes successfully
- [ ] Production server works

---

## Next Steps After Testing

Once all tests pass:
1. ✅ Ready for Figma design integration
2. ✅ Ready for CMS content integration
3. ✅ Ready for UI component implementation
