
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="container-width section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sage-200">
              <p>Stéphanie Englebert</p>
              <p>Éducatrice Canine Comportementaliste</p>
                          <p>Louveciennes et les villes environnantes</p>
              <p>Terrain à Mareil-Marly</p>
              <a 
                href="https://wa.me/33675054564" 
                className="text-warm-300 hover:text-warm-200 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                06 75 05 45 64
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sage-200 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sage-200 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/témoignages" className="text-sage-200 hover:text-white transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sage-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Méthode</h3>
            <p className="text-sage-200 text-sm leading-relaxed">
              Éducation canine 100% positive, sans punition ni coercition. 
              Une approche respectueuse pour une vraie complicité entre vous et votre chien.
            </p>
          </div>
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
