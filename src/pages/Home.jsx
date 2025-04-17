import { useState, useEffect } from 'react';
import Hero from '../sections/Hero.jsx';

export default function Home() {
  const [theme, setTheme] = useState('dark');

  // on mount: pick up saved or system theme
  useEffect(() => {
    const saved =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return <Hero theme={theme} toggleTheme={toggleTheme} />;
}
