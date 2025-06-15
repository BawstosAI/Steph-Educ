import { Link } from "react-router-dom";
import { ArrowUp, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sage-800 text-white">
      <div className="container-width section-padding py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div>
              <span className="text-sm">Stéphanie Englebert - Éducatrice Canine</span>
              <span className="text-sm mx-2">•</span>
              <span className="text-sm">Louveciennes et environs</span>
              <span className="text-sm mx-2">•</span>
              <span className="text-sm">Cavalaire-sur-Mer</span>
              <span className="text-sm mx-2">•</span>
              <a 
                href="https://wa.me/33675054564" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-white hover:text-sage-200 transition-colors duration-200 inline-flex items-center gap-1"
              >
                <span className="text-base leading-none">💬</span>
                WhatsApp: 06 75 05 45 64
              </a>
            </div>
            <nav className="flex gap-4">
              <Link to="/" className="text-sm text-white hover:text-sage-200 transition-colors duration-200">Accueil</Link>
              <Link to="/a-propos" className="text-sm text-white hover:text-sage-200 transition-colors duration-200">À propos</Link>
              <Link to="/temoignages" className="text-sm text-white hover:text-sage-200 transition-colors duration-200">Témoignages</Link>
              <Link to="/contact" className="text-sm text-white hover:text-sage-200 transition-colors duration-200">Contact</Link>
            </nav>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Retour en haut de la page"
          >
            <ArrowUp className="w-8 h-8" />
          </button>
        </div>
        <div className="border-t border-sage-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sage-300">
          <p className="text-sm">
            © 2024 Stéphanie Englebert. Tous droits réservés.
          </p>
          <Link 
            to="/mentions-legales" 
            className="text-sm hover:text-white transition-colors mt-2 sm:mt-0"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
