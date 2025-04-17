// src/sections/Hero.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero({ theme, toggleTheme }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="./src/assets/wodo video 3 .mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      {/* loading spinner */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        </div>
      )}
      {/* content wrapper */}
      <div className="relative z-20 w-full h-full container mx-auto flex flex-col items-center justify-center">
        {/* animated blur shapes */}
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="line"></div>

        {/* main text */}
        <div className="text-center space-y-4" data-aos="fade-up">
          <h1 className="text-[6rem] font-black text-green-500 row-1">WODO</h1>
          <h2 className="text-4xl font-bold text-white stroke-1 row-2">WOULD THINKS</h2>
          <h2 className="text-4xl font-bold text-white stroke-1 row-3">WOULD DO</h2>
        </div>

        {/* down arrow */}
        <box-icon
          name="chevron-down"
          className="arrow mt-12 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />

        {/* short‑info bar */}
        <div className="short-info w-full flex justify-between px-8 mt-16 text-white">
          <div className="left-side space-y-1" data-aos="fade-up-right">
            <h1 className="text-lg">PATHFINDER SCOUTS VIETNAM</h1>
            <p className="time text-sm"></p>
          </div>
          <div className="right-side space-y-1 text-right" data-aos="fade-up-left">
            <p className="text-sm italic">vì tha nhân, vì một xã hội tốt đẹp</p>
            <h1 className="flex items-center gap-2">
              <span className="pulse inline-block w-1 h-6 bg-green-400 rounded"></span>
              BETTER WORLD CAMP 2025
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
