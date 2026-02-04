# Assets Needed for Home Page Implementation

This document lists all the image and icon assets that need to be added to complete the Home page implementation.

## Directory Structure

```
/public/assets/
├── icons/
│   ├── ui/
│   │   ├── service-eia.svg
│   │   ├── service-audit.svg
│   │   ├── service-permits.svg
│   │   ├── achievement-industrial.svg
│   │   └── (existing icons)
│   └── logo/
│       └── (existing logos)
└── images/
    ├── pages/
    │   └── Home/
    │       ├── news-1.webp
    │       ├── news-2.webp
    │       ├── news-3.webp
    │       ├── achievement-bg.webp
    │       └── (existing images: swiper1-3.webp, about.webp, vision.webp, Ellipse.webp)
    ├── clients/
    │   ├── petromin.png
    │   ├── alfahd.png
    │   ├── rtcc.png
    │   └── nesco.png
    └── team/
        ├── member-1.webp
        ├── member-2.webp
        └── member-3.webp
```

## Required Assets

### Service Icons (`/public/assets/icons/ui/`)

1. **service-eia.svg** - Icon for Environmental Impact Assessment service
   - Source: Figma design (Services section)
   - Recommended size: 80x80px
   - Format: SVG

2. **service-audit.svg** - Icon for Environmental Audit service
   - Source: Figma design (Services section)
   - Recommended size: 80x80px
   - Format: SVG

3. **service-permits.svg** - Icon for Permits and Licensing service
   - Source: Figma design (Services section)
   - Recommended size: 80x80px
   - Format: SVG

4. **achievement-industrial.svg** - Icon for Industrial Sector achievement
   - Source: Figma design (Achievements section)
   - Recommended size: 80x80px
   - Format: SVG

### Client Logos (`/public/assets/images/clients/`)

1. **petromin.png** - Petromin company logo
   - Recommended size: 164x164px
   - Format: PNG with transparency
   - Source: Client branding materials

2. **alfahd.png** - Al Fahd company logo
   - Recommended size: 164x164px
   - Format: PNG with transparency
   - Source: Client branding materials

3. **rtcc.png** - RTCC company logo
   - Recommended size: 164x164px
   - Format: PNG with transparency
   - Source: Client branding materials

4. **nesco.png** - Nesco company logo
   - Recommended size: 164x164px
   - Format: PNG with transparency
   - Source: Client branding materials

### News/Article Images (`/public/assets/images/pages/Home/`)

1. **news-1.webp** - Featured article image (Environmental Reforms)
   - Recommended size: 538x580px
   - Format: WebP
   - Source: Figma design or stock photos
   - Alt text: "Environmental reforms and construction"

2. **news-2.webp** - Article image (Environmental Solutions)
   - Recommended size: 538x580px
   - Format: WebP
   - Source: Figma design or stock photos
   - Alt text: "Environmental solutions"

3. **news-3.webp** - Article image (Sustainable Development)
   - Recommended size: 538x580px
   - Format: WebP
   - Source: Figma design or stock photos
   - Alt text: "Sustainable development"

### Achievement Images (`/public/assets/images/pages/Home/`)

1. **achievement-bg.webp** - Background image for achievements carousel
   - Recommended size: 1125x680px
   - Format: WebP
   - Source: Figma design or project photos
   - Shows industrial/environmental project

### Team Member Images (`/public/assets/images/team/`)

1. **member-1.webp** - Team member photo (Ahmad Mohammed)
   - Recommended size: Square aspect ratio (e.g., 400x400px)
   - Format: WebP
   - Source: Professional team photos

2. **member-2.webp** - Team member photo (Sarah Ahmad)
   - Recommended size: Square aspect ratio (e.g., 400x400px)
   - Format: WebP
   - Source: Professional team photos

3. **member-3.webp** - Team member photo (Khalid Abdullah)
   - Recommended size: Square aspect ratio (e.g., 400x400px)
   - Format: WebP
   - Source: Professional team photos

## Existing Assets (Already in Project)

These assets are already present and being used:

- `/public/assets/images/pages/Home/swiper1.webp` - Hero carousel slide 1
- `/public/assets/images/pages/Home/swiper2.webp` - Hero carousel slide 2
- `/public/assets/images/pages/Home/swiper3.webp` - Hero carousel slide 3
- `/public/assets/images/pages/Home/about.webp` - About section image
- `/public/assets/images/pages/Home/vision.webp` - Vision/Mission background
- `/public/assets/images/pages/Home/Ellipse.webp` - Company profile circular image
- `/public/assets/icons/ui/countH1.svg` - Stats icon 1
- `/public/assets/icons/ui/countH2.svg` - Stats icon 2
- `/public/assets/icons/ui/countH3.svg` - Stats icon 3
- `/public/assets/icons/ui/countH4.svg` - Stats icon 4
- `/public/assets/icons/ui/Sustainability.svg` - Values icon
- `/public/assets/icons/ui/Transparency.svg` - Values icon
- `/public/assets/icons/ui/cooperation.svg` - Values icon
- `/public/assets/icons/ui/Excellence.svg` - Values icon

## Image Optimization Guidelines

When adding these assets:

1. **Format Selection:**
   - Use WebP for photos and complex images
   - Use SVG for icons and logos when possible
   - Use PNG with transparency for logos that can't be SVG

2. **Compression:**
   - Compress images to reduce file size while maintaining quality
   - Use tools like: TinyPNG, Squoosh, or ImageOptim
   - Target: < 200KB per image for web performance

3. **Responsive Images:**
   - Provide multiple sizes if needed for responsive design
   - Let Next.js Image component handle optimization

4. **Naming Convention:**
   - Use lowercase with hyphens (kebab-case)
   - Be descriptive: `service-environmental-audit.svg` not `icon1.svg`
   - Include size/variant if multiple versions: `logo-dark.svg`, `logo-light.svg`

5. **Alt Text:**
   - Always provide meaningful alt text in the component
   - Describe the content, not just the filename

## Figma Asset URLs (Temporary)

Note: The Figma MCP asset URLs expire after 7 days. Download and save them locally ASAP.

The assets were available from the Figma design at:
- File ID: `372MAsTmvw1Mzxyj1iBc5O`
- Node IDs documented in plan file

## Next Steps

1. Download/create all required assets
2. Optimize images (compress, resize)
3. Place in correct directories as specified above
4. Verify all images load correctly in development
5. Test responsive behavior
6. Run Lighthouse audit for performance

## Placeholder Notice

Until real assets are added, the following placeholders are in use:
- Service icons: Basic SVG shapes or existing UI icons
- Client logos: Colored rectangles or generic logos
- News images: Gradient backgrounds
- Team photos: Avatar placeholders
- Achievement backgrounds: Solid colors or patterns
