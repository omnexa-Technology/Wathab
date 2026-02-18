# Articles Grid Component Setup Guide

## ✅ Components Created

The following components have been successfully created following Atomic Design principles:

### Atoms
- **ArticleIcon** (`src/components/atoms/ArticleIcon/`)
  - Displays an icon in a green circular background
  - Size: 120x120px with 64x64px icon inside
  - Background color: #e8f0eb (light green)

### Molecules
- **ArticleGridCard** (`src/components/molecules/ArticleGridCard/`)
  - Complete article card with image, icon, title, project, and achievement sections
  - Supports alternating layouts (image left/right)
  - Responsive design with proper mobile/desktop breakpoints
  - Built-in placeholder when images are missing

### Organisms
- **ArticlesGrid** (`src/components/sections/ArticlesGrid/`)
  - Main section component displaying 4 article cards
  - Alternating layout pattern (left-right-left-right)
  - Fully internationalized with Arabic/English support
  - RTL/LTR support

## 📁 Required Images

### Location
Add your article images to:
```
public/assets/images/Articels/articlesGrid/
```

### Image Files Needed
1. **article1.webp** - Industrial Sector
2. **article2.webp** - Real Estate & Tourism
3. **article3.webp** - Infrastructure
4. **article4.webp** - Renewable Energy

### Image Specifications
- **Format**: WebP (optimized) or JPG/PNG
- **Dimensions**: 780 x 580 pixels
- **Aspect Ratio**: 4:3
- **Quality**: High quality, web-optimized
- **File Size**: Recommended < 200KB per image

## 🎨 Design Reference

The component follows the Figma design:
- **Icon Circle**: 120x120px, #e8f0eb background
- **Image**: 780x580px, 24px border radius
- **Title**: 32px font, #1b6936 (green)
- **Labels**: 24px font, #141414 (dark)
- **Text**: 24px font, #595959 (gray)
- **Spacing**: 64px between cards, 32px internal gaps

## 🌐 Translations

Translations have been added to both `ar.js` and `en.js`:

### Arabic (ar.js)
```javascript
articles: {
  grid: {
    article1: { title, project, achievement },
    article2: { title, project, achievement },
    article3: { title, project, achievement },
    article4: { title, project, achievement },
    projectLabel: 'المشروع:',
    achievementLabel: 'الأنجاز:',
  }
}
```

### English (en.js)
```javascript
articles: {
  grid: {
    article1: { title, project, achievement },
    article2: { title, project, achievement },
    article3: { title, project, achievement },
    article4: { title, project, achievement },
    projectLabel: 'Project:',
    achievementLabel: 'Achievement:',
  }
}
```

## 🎯 Icons

The component uses the following icons from:
```
public/assets/icons/ui/article/
```

- Frame (1).svg - Article 1 icon
- Frame (2).svg - Article 2 icon
- Frame (3).svg - Article 3 icon
- Frame (4).svg - Article 4 icon

These icons are already present in your project.

## 📱 Responsive Behavior

### Desktop (≥1024px)
- Image: 780px width
- Content: Flexible width
- Layout: Side by side (image + content)

### Mobile (<1024px)
- Full width stacking
- Image on top
- Content below
- Maintains proper spacing

## 🚀 Usage

The component is already integrated into the articles page:

```jsx
// src/app/[locale]/articles/page.jsx
import { ArticlesGrid } from '@/components/sections/ArticlesGrid';

export default function ArticlesPage() {
  return (
    <>
      <InnerHero ... />
      <ArticlesGrid />
      <ContactCtaSection />
    </>
  );
}
```

## ⚙️ Customization

### To modify the articles data:
Edit `src/components/sections/ArticlesGrid/ArticlesGrid.jsx`:

```javascript
const articles = [
  {
    id: 'article-1',
    imageSrc: '/path/to/image.webp',
    iconSrc: '/path/to/icon.svg',
    titleKey: 'articles.grid.article1.title',
    // ... other keys
    imageLeft: true, // or false
  },
  // ... more articles
];
```

### To change styling:
- Colors: Update Tailwind classes in component files
- Spacing: Modify `gap-` classes
- Sizing: Adjust `w-` and `h-` classes

## 🔍 Testing Checklist

- [ ] Add all 4 article images to `articlesGrid` folder
- [ ] Verify images display correctly
- [ ] Test on mobile devices
- [ ] Check RTL layout (Arabic)
- [ ] Verify translations
- [ ] Test hover states
- [ ] Check accessibility

## 📝 Notes

- The component includes fallback placeholders if images are missing
- All text is right-aligned for Arabic support
- Icons maintain consistent sizing across all cards
- Images are lazy-loaded for performance
- Component follows the project's existing patterns (font-din, color scheme, etc.)

## 🐛 Troubleshooting

### Images not showing?
1. Check file paths are correct
2. Verify images are in the correct folder
3. Check file permissions
4. Clear Next.js cache: `rm -rf .next`

### Layout issues?
1. Verify Tailwind CSS is compiled
2. Check browser console for errors
3. Test with browser dev tools responsive mode

### Translation issues?
1. Verify locale files are updated
2. Check translation keys match
3. Clear browser cache

## 📚 Related Files

- Page: `src/app/[locale]/articles/page.jsx`
- Translations: `src/locales/ar.js`, `src/locales/en.js`
- Components:
  - `src/components/atoms/ArticleIcon/`
  - `src/components/molecules/ArticleGridCard/`
  - `src/components/sections/ArticlesGrid/`
