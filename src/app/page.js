'use client';

import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const theme = useTheme();

  return (
    <div className="min-h-screen unified-background" style={{ color: 'var(--theme-text)' }}>
      <Hero />
      <SocialLinks />
      <FAQs />
      <Contact />
    </div>
  );
}
