import { useEffect } from 'react';
import themeConfig from '../config/theme.json';

export function useTheme() {
  useEffect(() => {
    // Apply theme colors from config to CSS variables
    const applyTheme = () => {
      const root = document.documentElement;

      // Priority: config.theme > profile > brandKit.colors
      const theme = themeConfig.theme || {};
      const brandColors = themeConfig.brandKit?.colors || {};

      // Apply theme colors with fallbacks
      root.style.setProperty('--theme-bg', theme.background || brandColors.background || '#08090d');
      root.style.setProperty('--theme-text', theme.text || brandColors.foreground || '#564df0');
      root.style.setProperty('--theme-button', theme.buttons || brandColors.buttonText || '#000000');
      root.style.setProperty('--theme-accent', theme.icons || brandColors.accent || '#3ed1ce');
      root.style.setProperty('--theme-container', theme.container || brandColors.container || '#f37cbf');
      root.style.setProperty('--theme-button-text', '#ffffff');
    };

    applyTheme();
  }, []);

  return {
    theme: themeConfig.theme,
    brandKit: themeConfig.brandKit,
    profile: themeConfig.profile,
    config: themeConfig.config,
  };
}