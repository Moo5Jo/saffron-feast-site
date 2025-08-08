import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Saffron Palace</h3>
            <p className="mb-4">
              Authentische indische Küche mit frischen Zutaten und traditionellen Gewürzen. 
              Ein Geschmackserlebnis, das Sie nicht vergessen werden.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span>info@saffronpalace.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
            <div className="space-y-2">
              <Link to="/speisekarte" className="block hover:text-primary transition-colors">
                Speisekarte
              </Link>
              <Link to="/oeffnungszeiten" className="block hover:text-primary transition-colors">
                Öffnungszeiten
              </Link>
              <Link to="/reservierung" className="block hover:text-primary transition-colors">
                Reservierung
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Saffron Palace. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/impressum" className="text-sm hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-sm hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;