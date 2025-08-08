# AI Landing Page Builder - Theme System

This theme system allows you to create dynamic, configurable landing pages that can be customized through JSON configuration files.

## 🎨 Theme Configuration Structure

### Core Configuration Files

1. **`src/config/theme.json`** - Main theme configuration
2. **`tailwind.config.js`** - Tailwind CSS theme tokens
3. **`src/app/globals.css`** - CSS variables and base styles

### Theme Configuration Schema

```json
{
  "branding": {
    "logo": "",
    "bio": "",
    "primaryEmailAddress": "contact@example.com",
    "links": {
      "twitter": "",
      "instagram": "",
      "discord": "",
      "linkedin": "",
      "telegram": "",
      "facebook": ""
    }
  },
  "theme": {
    "background": "#131740",
    "text": "#ffffff", 
    "buttons": "#02f6d1",
    "icons": "#02f6d1"
  },
  "colors": {
    "background": "#ffffff",
    "container": "#f4f4f4", 
    "accent": "#00b894",
    "buttonText": "#ffffff",
    "foreground": "#2d3436"
  },
  "content": {
    "copyright": "© 2025",
    "footer": "Thank you for reading. Contact us anytime.",
    "disclaimers": "All views are personal and not legal advice."
  },
  "logos": {
    "primary": "https://cdn.example.com/logo-full.png",
    "icon": "https://cdn.example.com/logo-icon.png"
  },
  "seoSettings": {
    "favicon": "",
    "default": {
      "title": "Your Landing Page Title",
      "description": "Your landing page description"
    }
  },
  "socials": [
    {
      "platform": "LinkedIn", 
      "url": "https://linkedin.com/company/example"
    }
  ]
}
```

## 🛠️ Usage

### 1. Using the Theme Hook

```jsx
import { useTheme } from '../hooks/useTheme';

export default function MyComponent() {
  const { theme, colors, branding, content } = useTheme();
  
  return (
    <div className="bg-theme-bg text-theme-text">
      <h1>{content.heading}</h1>
      <p>{branding.bio}</p>
    </div>
  );
}
```

### 2. Using Theme CSS Classes

The system provides semantic CSS classes for consistent theming:

```jsx
// Buttons
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>

// Cards
<div className="card p-6">Card Content</div>

// Sections  
<section className="section-spacing bg-theme-bg">
  <div className="container-responsive">
    Content
  </div>
</section>

// Text
<h1 className="text-theme-text">Main heading</h1>
<p className="text-theme-text-secondary">Secondary text</p>
<span className="text-theme-accent">Accent text</span>
```

### 3. Theme CSS Variables

Direct CSS variable usage:

```css
.custom-element {
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-accent);
}
```

## 🎭 Available CSS Classes

### Layout Classes
- `section-spacing` - Consistent section padding
- `container-responsive` - Responsive container with padding

### Button Classes  
- `btn-primary` - Primary button styling
- `btn-secondary` - Secondary button styling

### Card Classes
- `card` - Base card styling with theme colors

### Text Classes
- `text-theme-text` - Primary text color
- `text-theme-text-secondary` - Secondary text color  
- `text-theme-accent` - Accent color text

### Background Classes
- `bg-theme-bg` - Primary background
- `bg-theme-bg-secondary` - Secondary background
- `bg-theme-button` - Button background
- `bg-theme-accent` - Accent background

### Animation Classes
- `animate-fade-in` - Fade in animation
- `animate-slide-up` - Slide up animation
- `animate-bounce-soft` - Soft bounce animation

## 🔧 Utility Functions

### Theme Management

```javascript
import { 
  updateThemeColors, 
  validateThemeConfig, 
  presetThemes 
} from '../utils/themeUtils';

// Update theme dynamically
updateThemeColors(newThemeData);

// Validate theme configuration
const validation = validateThemeConfig(themeData);
if (!validation.isValid) {
  console.error('Theme errors:', validation.errors);
}

// Use preset themes
updateThemeColors(presetThemes.dark);
```

### Preset Themes

Available preset themes:
- `default` - Light theme
- `dark` - Dark theme  
- `ocean` - Blue ocean theme
- `forest` - Green forest theme

## 🚀 Dynamic Theme Updates

To change themes dynamically:

```javascript
import { updateThemeColors } from '../utils/themeUtils';

// Update with new theme data
const newTheme = {
  theme: {
    background: "#1a1a2e",
    text: "#ffffff", 
    buttons: "#0f3460",
    icons: "#e94560"
  }
};

updateThemeColors(newTheme);
```

## 📱 Responsive Design

All components use responsive classes:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Content automatically adapts */}
</div>
```

## 🎯 Best Practices

1. **Always use theme classes** instead of hardcoded colors
2. **Test theme changes** with different configurations
3. **Validate theme configs** before applying
4. **Use semantic naming** for custom components
5. **Follow the animation delays** for staggered effects

## 🔄 Component Structure

Each component follows this pattern:

```jsx
import { useTheme } from '../hooks/useTheme';

export default function Component() {
  const { theme, content, branding } = useTheme();
  
  return (
    <section className="section-spacing bg-theme-bg">
      <div className="container-responsive">
        <div className="animate-fade-in">
          {/* Component content using theme classes */}
        </div>
      </div>
    </section>
  );
}
```

This system ensures consistent theming across all components while maintaining flexibility for customization through the AI landing page builder.