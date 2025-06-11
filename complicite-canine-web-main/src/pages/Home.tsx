
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage-50 to-warm-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-sage-800 leading-tight">
                  Éduquer avec <span className="text-sage-600">bienveillance</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-sage-700 mt-3 lg:mt-4">
                  pour une vraie complicité
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-sage-600 leading-relaxed text-center lg:text-left">
                Découvrez l'éducation canine 100% positive avec Stéphanie Englebert. 
                Une méthode respectueuse, sans punition ni coercition, pour créer une 
                relation harmonieuse avec votre compagnon.
              </p>

              <div className="flex flex-col gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-sage-600 hover:bg-sage-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
                >
                  <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Contactez-moi
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-sage-600 text-sage-600 hover:bg-sage-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
                >
                  <Link to="/a-propos">
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/69e3fd4b-84cc-4b04-9d69-479f21bb416f.png`} 
                  alt="Stéphanie Englebert et Roxy, son Berger Australien, dans un environnement naturel enneigé"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-sage-600 text-center mt-3 italic">
                Stéphanie et Roxy, son fidèle compagnon de travail
              </p>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-warm-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-sage-300 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sage-800 mb-4 lg:mb-6">
              Ma méthode 100% positive
            </h2>
            <p className="text-base sm:text-lg text-sage-600 max-w-3xl mx-auto px-4">
              Une approche respectueuse basée sur la confiance, l'écoute et la patience 
              pour des résultats durables et une complicité renforcée.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow border-sage-200">
              <div className="text-3xl sm:text-4xl mb-4">❤️</div>
              <h3 className="text-lg sm:text-xl font-semibold text-sage-800 mb-3">Bienveillance</h3>
              <p className="text-sm sm:text-base text-sage-600">
                Pas de punition, pas de coercition. Seule une approche respectueuse 
                permet de créer une vraie complicité.
              </p>
            </Card>

            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow border-sage-200">
              <div className="text-3xl sm:text-4xl mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-semibold text-sage-800 mb-3">Efficacité</h3>
              <p className="text-sm sm:text-base text-sage-600">
                Des résultats visibles dès la première séance grâce à une méthode 
                éprouvée et personnalisée.
              </p>
            </Card>

            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow border-sage-200 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-4">🤝</div>
              <h3 className="text-lg sm:text-xl font-semibold text-sage-800 mb-3">Complicité</h3>
              <p className="text-sm sm:text-base text-sage-600">
                Renforcer le lien entre vous et votre chien pour une relation 
                harmonieuse au quotidien.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sage-50">
        <div className="container-width section-padding">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sage-800 mb-4 lg:mb-6">
              Mes interventions
            </h2>
            <p className="text-base sm:text-lg text-sage-600">
              Louveciennes et les villes environnantes : Bougival, la Celle-Saint-Cloud, Le Chesnay, le Port-Marly, Marly le Roi, Versailles, Croissy, Chatou
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow border-sage-200">
              <div className="text-3xl sm:text-4xl mb-4">🏠</div>
              <h3 className="text-lg sm:text-xl font-semibold text-sage-800 mb-3">À domicile</h3>
              <p className="text-sm sm:text-base text-sage-600 mb-4">
                Séances personnalisées dans votre environnement familier pour 
                une adaptation optimale.
              </p>
              <ul className="text-sm text-sage-600 space-y-1">
                <li>• Éducation de base</li>
                <li>• Résolution de problèmes comportementaux</li>
                <li>• Socialisation</li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow border-sage-200">
              <div className="text-3xl sm:text-4xl mb-4">🌳</div>
              <h3 className="text-lg sm:text-xl font-semibold text-sage-800 mb-3">En extérieur</h3>
              <p className="text-sm sm:text-base text-sage-600 mb-4">
                Travail sur terrain à Mareil-Marly et balades éducatives 
                pour la socialisation.
              </p>
              <ul className="text-sm text-sage-600 space-y-1">
                <li>• Rappel et marche en laisse</li>
                <li>• Rencontres avec autres chiens</li>
                <li>• Gestion des stimulations</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sage-600 text-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Prêt·e à commencer l'aventure ?
          </h2>
          <p className="text-base sm:text-xl mb-6 lg:mb-8 text-sage-100 max-w-2xl mx-auto px-4">
            Contactez-moi pour discuter des besoins de votre compagnon. 
            Je réponds personnellement à chaque message.
          </p>
          <div className="flex flex-col gap-4 justify-center max-w-md mx-auto">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-white text-sage-600 hover:bg-sage-50 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
            >
              <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                WhatsApp: 06 75 05 45 64
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-sage-50 text-sage-600 hover:bg-white hover:scale-105 hover:shadow-lg border border-sage-200 transition-all duration-300 ease-out text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto group"
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

export default Home;
