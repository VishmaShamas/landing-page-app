'use client';

import { useEffect } from 'react';
import themeConfig from '../config/theme.json';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    // Apply theme colors from config to CSS variables
    const applyTheme = () => {
      const root = document.documentElement;

      // Apply theme colors
      if (themeConfig.theme) {
        root.style.setProperty('--color-background', themeConfig.theme.background || '#ffffff');
        root.style.setProperty('--color-text', themeConfig.theme.text || '#171717');
        root.style.setProperty('--color-buttons', themeConfig.theme.buttons || '#02f6d1');
        root.style.setProperty('--color-icons', themeConfig.theme.icons || '#02f6d1');
      }

      // Apply additional brand colors if available
      if (themeConfig.colors) {
        root.style.setProperty('--color-accent', themeConfig.colors.accent || '#00b894');
        root.style.setProperty('--color-container', themeConfig.colors.container || '#f4f4f4');
        root.style.setProperty('--color-foreground', themeConfig.colors.foreground || '#2d3436');
        root.style.setProperty('--color-button-text', themeConfig.colors.buttonText || '#ffffff');
      }

      // Apply SEO settings if available
      if (themeConfig.config?.seoSettings?.default?.title) {
        document.title = themeConfig.config.seoSettings.default.title;
      } else if (themeConfig.brandKit?.seo?.title) {
        document.title = themeConfig.brandKit.seo.title;
      }

      if (themeConfig.config?.seoSettings?.default?.description) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', themeConfig.config.seoSettings.default.description);
        }
      } else if (themeConfig.brandKit?.seo?.description) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', themeConfig.brandKit.seo.description);
        }
      }

      // Apply favicon if available
      if (themeConfig.config?.seoSettings?.favicon) {
        const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = themeConfig.config.seoSettings.favicon;
        if (!document.querySelector('link[rel="icon"]')) {
          document.head.appendChild(favicon);
        }
      } else if (themeConfig.brandKit?.logos?.favicon) {
        const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = themeConfig.brandKit.logos.favicon;
        if (!document.querySelector('link[rel="icon"]')) {
          document.head.appendChild(favicon);
        }
      }
    };

    applyTheme();
  }, []);

  return children;
}