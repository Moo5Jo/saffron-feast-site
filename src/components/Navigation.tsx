import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Startseite' },
    { href: '/speisekarte', label: 'Speisekarte' },
    { href: '/oeffnungszeiten', label: 'Öffnungszeiten' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-warm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-saffron bg-clip-text text-transparent">
              Saffron Palace
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-gradient-saffron hover:shadow-warm transition-all">
              <Link to="/reservierung">Reservierung</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-primary px-4 py-2 ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <Button asChild variant="default" className="w-full bg-gradient-saffron hover:shadow-warm transition-all">
                  <Link to="/reservierung" onClick={() => setIsOpen(false)}>
                    Reservierung
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;