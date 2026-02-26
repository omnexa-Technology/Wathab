# Sanity Language Configuration Test

## Quick Test Queries for Vision Tool

Copy and paste these queries in Sanity Vision (`/studio/vision`) to test your language setup:

### 1. Check Basic Structure
```groq
*[_type == "license"][0] {
  title,
  description,
  "titleLanguages": title[].language,
  "descriptionLanguages": description[].language
}
```

### 2. Check Language-Specific Content
```groq
*[_type == "license"] {
  "arabic": {
    "title": title[language == "ar"][0].value,
    "description": description[language == "ar"][0].value
  },
  "english": {
    "title": title[language == "en"][0].value,  
    "description": description[language == "en"][0].value
  }
}[0..2]
```

### 3. Validation Check
```groq
*[_type == "license"] {
  _id,
  "issues": [
    count(title[language == "ar"]) == 0 => "Missing Arabic title",
    count(description[language == "ar"]) == 0 => "Missing Arabic description",
    count(title) > 2 => "Too many title entries",
    count(description) > 2 => "Too many description entries"
  ][defined(@)]
}
```

### 4. Check All Available Languages
```groq
{
  "availableLanguages": array::unique(*[_type == "license"].title[].language),
  "languageCount": {
    "arabic": count(*[_type == "license"].title[language == "ar"]),
    "english": count(*[_type == "license"].title[language == "en"])
  }
}
```

## Expected Results:

### When Working Correctly:
- ✅ Language dropdown shows both Arabic and English
- ✅ Can add content in both languages  
- ✅ Validation prevents duplicate languages
- ✅ Arabic is required, English is optional
- ✅ Preview shows Arabic content by default

### Common Issues:
- ❌ Language field not showing options → Check `supportedLanguages` array
- ❌ Can't save → Check validation rules
- ❌ Preview not working → Check preview function
- ❌ Frontend not displaying → Check `getLocalizedValue` function

## Test in Frontend:

1. Create a license in Sanity with both Arabic and English content
2. Check frontend at `/ar/licenses` (Arabic)
3. Check frontend at `/en/licenses` (English)
4. Verify layout changes direction (RTL/LTR)

## Current Language Configuration:

```javascript
const supportedLanguages = [
  { id: 'ar', title: 'العربية (Arabic)', isDefault: true },
  { id: 'en', title: 'English' },
]
```

## If You Need to Add More Languages:

```javascript
const supportedLanguages = [
  { id: 'ar', title: 'العربية (Arabic)', isDefault: true },
  { id: 'en', title: 'English' },
  { id: 'fr', title: 'Français' },
  // Add more languages here
]
```