# Quick Start Guide - Articles Grid

## ✅ What's Done

Everything is ready! The ArticlesGrid component has been fully implemented following the Figma design and Atomic Design principles.

## ⚡ Quick Start (3 Steps)

### Step 1: Add Images
Place 4 images in this folder:
```
public/assets/images/Articels/articlesGrid/
```

Name them:
- `article1.webp`
- `article2.webp`
- `article3.webp`
- `article4.webp`

**Size**: 780x580 pixels each

### Step 2: Start Dev Server
```bash
npm run dev
```

### Step 3: View the Page
Open: `http://localhost:3000/ar/articles`

## 🎨 What You'll See

1. **Hero Section** with title: "سجل الريادة- إنجازاتنا الاستراتيجية عبر القطاعات"
2. **Four Article Cards** with alternating layouts:
   - Article 1: Image left, content right
   - Article 2: Content left, image right
   - Article 3: Image left, content right
   - Article 4: Content left, image right
3. **Contact CTA Section** at the bottom

## 📝 Content Structure

Each article card shows:
- ✅ Icon in green circle (120x120px)
- ✅ Title in green (#1b6936)
- ✅ Project section with label
- ✅ Achievement section with label

## 🌐 Languages Supported

- **Arabic** (`/ar/articles`): Full RTL support
- **English** (`/en/articles`): LTR layout

## 🖼️ Image Guidelines

### Recommended Content:
1. **Article 1**: Industrial facilities/petrochemical plants
2. **Article 2**: Modern green buildings/resort
3. **Article 3**: Quarry/infrastructure site
4. **Article 4**: Wind turbines/solar panels

### Where to Get Images:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Your own photography

### Temporary Placeholders:
The component includes gray placeholders if images are missing, so you can test immediately!

## 🔍 Test Checklist

- [ ] Images appear correctly
- [ ] Text is right-aligned
- [ ] Icons display in green circles
- [ ] Layout alternates left/right
- [ ] Works on mobile
- [ ] Translations switch properly
- [ ] No console errors

## 📁 Files Created

```
✅ src/components/atoms/ArticleIcon/
✅ src/components/molecules/ArticleGridCard/
✅ src/components/sections/ArticlesGrid/
✅ src/locales/ar.js (updated)
✅ src/locales/en.js (updated)
✅ src/app/[locale]/articles/page.jsx (updated)
```

## 🐛 Troubleshooting

### Images not showing?
→ Check file names match exactly (article1.webp, article2.webp, etc.)

### Layout broken?
→ Clear cache: `rm -rf .next && npm run dev`

### Translations missing?
→ Restart dev server

## 📚 More Info

- **Full details**: See `IMPLEMENTATION_SUMMARY.md`
- **Setup guide**: See `ARTICLES_GRID_SETUP.md`
- **Image specs**: See `public/assets/images/Articels/articlesGrid/README.md`

---

**Ready to go!** Just add your images and test. 🚀
