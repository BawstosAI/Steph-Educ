
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Témoignages", href: "/témoignages" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-sage-200 sticky top-0 z-50">
      <nav className="container-width section-padding" aria-label="Navigation principale">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
                              <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/logo-heart-paw2.png`} 
                  alt="Logo Complicité Canine - Cœur avec patte"
                  className="w-full h-full object-contain"
                />
            </div>
            <div className="hidden xs:block">
              <h1 className="text-base sm:text-lg font-semibold text-sage-800">Stéphanie Englebert</h1>
              <p className="text-xs sm:text-sm text-sage-600">Éducatrice Canine</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-sage-600 ${
                  isActiveRoute(item.href)
                    ? "text-sage-700 border-b-2 border-sage-500 pb-1"
                    : "text-sage-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-sage-600 hover:bg-sage-700">
              <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-sage-700 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-sage-200 pt-4 pb-6 space-y-4 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-lg font-medium py-2 transition-colors hover:text-sage-600 ${
                  isActiveRoute(item.href) ? "text-sage-700 bg-sage-50 px-4 rounded-lg" : "text-sage-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-sage-100">
              <Button asChild className="w-full bg-sage-600 hover:bg-sage-700 text-lg py-3">
                <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                  📱 Contactez-moi sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
