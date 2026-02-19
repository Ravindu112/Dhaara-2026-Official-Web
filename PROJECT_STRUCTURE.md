# DHAARA Web - Project Structure

## Overview
This document outlines the new organized folder structure for the DHAARA event website.

## Folder Structure

```
src/
├── components/
│   ├── common/              # Reusable header, footer, etc.
│   │   └── index.js        # Barrel export for common components
│   ├── sections/            # Page section components (Hero, About, Gallery, etc.)
│   │   └── index.js        # Barrel export for section components
│   ├── index.js            # Main component export file
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── FloatingBookIcon.jsx
│   └── [other components...]
│
├── styles/
│   ├── globals.css         # Global base styles
│   ├── tailwind.css        # Tailwind utilities
│   └── gallery.css         # Component-specific styles
│
├── constants/
│   └── index.js            # App configuration and constants
│
├── utils/
│   ├── hooks.js           # Custom React hooks
│   └── [other utilities...]
│
├── assets/
│   ├── images/
│   │   ├── about-images/
│   │   ├── backgrounds/
│   │   └── icons/
│   └── videos/
│
├── App.jsx                 # Main app component
└── main.jsx               # Entry point
```

## Import Examples

### Old Way (Flat imports)
```javascript
import Hero from './components/Hero'
import Gallery from './components/Gallery'
```

### New Way (Clean barrel exports)
```javascript
import { Hero, Gallery, Countdown } from './components'
import { Header, Footer } from './components/common'
import { EVENT_CONFIG, COLORS } from './constants'
import { useIsMobile } from './utils/hooks'
```

## Benefits

✅ **Better Organization**: Components grouped by type (common, sections)
✅ **Cleaner Imports**: Barrel exports reduce import statements
✅ **Reusable Hooks**: custom hooks in dedicated utils folder
✅ **Centralized Constants**: Single source of truth for config
✅ **Scalability**: Easy to add new features and organize them
✅ **Maintainability**: Clear file hierarchy makes code navigation easier

## Moving Forward

- Keep related components together
- Create new folders as features grow
- Use barrel exports (index.js) for cleaner imports
- Store configuration in constants/
- Extract reusable logic into utils/hooks
