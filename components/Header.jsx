"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
const logo = '/assets/logo_gold.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/30 backdrop-blur-md' : 'bg-transparent backdrop-blur-none'}`}>
      <nav className="container mx-auto px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center relative w-[100px] h-[32px] md:h-[40px]">
            <Image
              src={logo}
              alt="DHAARA Logo"
              fill
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <a href="#home" className="hover:text-amber-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-amber-400 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#tickets" className="hover:text-amber-400 transition-colors">
                Tickets
              </a>
            </li>
            {/*<li>
              <a href="#sponsors" className="hover:text-amber-400 transition-colors">
                Sponsors
              </a>
            </li>*/}
            <li>
              <a href="#contact" className="hover:text-amber-400 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col space-y-4 text-white bg-slate-900/80 backdrop-blur-xl p-6 rounded-xl">
            {["home", "about", "gallery", "tickets", "contact"].map(
              // {["home", "about", "gallery", "tickets", "sponsors", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block hover:text-amber-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
