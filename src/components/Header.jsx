import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FileUser, FolderOpenDot, Contact, PiggyBank, Images } from 'lucide-react';

export default function Header() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let prev = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      setHide(cur > prev && cur > 100);
      prev = cur;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ripple = e => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - top}px`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/25 transition-all ${hide ? '-top-28' : 'top-0'}`}
    >
      <div className="container mx-auto flex justify-between items-center h-[72px]">
        <NavLink to="/" className="logo font-ibm italic font-bold text-2xl">
          WODO
        </NavLink>

        <nav className="flex gap-6 items-center" aria-label="Site">
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? 'text-accent' : ''} flex items-center gap-1 transition`}
          >
            <FileUser className="w-4 h-4" />
            <span>Tụi mình</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => `${isActive ? 'text-accent' : ''} flex items-center gap-1 transition`}
          >
            <FolderOpenDot className="w-4 h-4" />
            <span>Dự án</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? 'text-accent' : ''} flex items-center gap-1 transition`}
          >
            <Contact className="w-4 h-4" />
            <span>Liên hệ</span>
          </NavLink>

          <NavLink
            to="/images"
            className={({ isActive }) => `${isActive ? 'text-accent' : ''} flex items-center gap-1 transition`}
          >
            <Images className="w-4 h-4" />
            <span>Hình ảnh</span>
          </NavLink>

          <NavLink
            to="/donate"
            className={({ isActive }) => `${isActive ? 'text-accent' : ''} flex items-center gap-1 transition`}
          >
            <PiggyBank className="w-4 h-4" />
            <span>Quyên góp</span>
          </NavLink>
        </nav>

        <a
          href="#"
          onPointerMove={ripple}
          className="relative border-2 border-fg rounded-[20px] px-8 py-2 overflow-hidden"
        >
          <span className="relative z-10">Vì một thế giới tốt đẹp hơn</span>
          <span
            className="absolute inset-0 bg-accent -z-10"
            style={{
              clipPath: 'circle(0 at var(--x) var(--y))',
              transition: 'clip-path .25s'
            }}
          />
        </a>
      </div>
    </header>
  );
}
