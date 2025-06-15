import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-8">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-sage-800 mb-4">
              Ils m'ont fait confiance
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed mb-4">
              Découvrez les témoignages de mes clients et les transformations 
              obtenues grâce à l'éducation canine positive.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-sage-600 font-medium ml-2">
                5/5 sur Google Maps
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-8 bg-white">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="elfsight-app-20322aa7-a90c-4bd9-bab6-7b986b7b97d0" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Types of Dogs Section */}
      <section className="py-16 bg-white">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">
              Tous les chiens peuvent progresser
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-sage-200">
                <div className="text-4xl mb-4">🐶</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Chiots</h3>
                <ul className="space-y-2 text-sage-600">
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    Éducation de base (propreté, rappel, marche en laisse)
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    Socialisation avec humains et congénères
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    Prévention des troubles comportementaux
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-sage-200">
                <div className="text-4xl mb-4">🦮</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Chiens adultes</h3>
                <ul className="space-y-2 text-sage-600">
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    Rééducation comportementale
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    Gestion de la réactivité et de l'anxiété
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    Renforcement de l'obéissance
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 bg-sage-600 text-white mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Une approche sur-mesure pour chaque situation
                </h3>
                <p className="text-sage-100 leading-relaxed max-w-2xl mx-auto">
                  Quelle que soit la problématique de votre chien - réactivité, anxiété, peurs, agressivité, 
                  troubles du comportement ou simple éducation - je m'adapte à chaque situation unique. 
                  Ma méthode douce et personnalisée permet d'obtenir des résultats concrets, 
                  quel que soit le profil de votre compagnon.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-warm-50">
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl font-bold text-sage-800 mb-6">
            Rejoignez mes clients satisfaits
          </h2>
          <p className="text-lg text-sage-600 mb-8 max-w-2xl mx-auto">
            Votre chien mérite lui aussi de bénéficier d'une éducation bienveillante 
            et efficace. Contactez-moi pour commencer l'aventure !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-sage-600 hover:bg-sage-700 text-lg px-8 py-3"
            >
              <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactez-moi via WhatsApp
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-sage-600 text-sage-600 hover:bg-sage-50 text-lg px-8 py-3"
            >
              <Link to="/contact">
                Formulaire de contact
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
