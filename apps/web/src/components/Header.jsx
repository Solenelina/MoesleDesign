
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  /*
   * [MODIF HEADER - MENU DU HAUT]
   * Tu peux modifier ici les textes du menu.
   * - path = le lien de la page
   * - label = le texte affiché dans le menu
   */
  const navLinks = [
    { path: '/', label: 'Hansi Moeslé Design' },
    { path: '/processus', label: 'Mon processus créatif' },
    { path: '/apropos', label: 'À propos' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/70 shadow-sm backdrop-blur-md">
      <nav className="container mx-auto px-4 py-2 md:py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center min-w-0">
            <img 
              // [MODIF HEADER - LOGO] Remplace ce src pour changer le logo du menu du haut.
              src="https://horizons-cdn.hostinger.com/22591d1d-ba76-423a-b800-205c2197f546/e924bbdc4067dcf2885c5a2fae4f5422.png" 
              alt="H.Moeslé Design - Designer de mobilier sur mesure"
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[0.92rem] font-medium transition-colors hover:text-primary ${
                  isActive(link.path) 
                    ? 'border-b-2 border-primary pb-1 text-primary' 
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-2.5 border-t border-border pt-3 md:hidden">
            <div className="flex flex-col gap-2 rounded-2xl bg-muted/65 p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'bg-background text-primary shadow-sm' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
