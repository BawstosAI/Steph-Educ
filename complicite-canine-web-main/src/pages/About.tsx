import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
              En apprendre plus sur moi
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Découvrez mon parcours et ma philosophie d'éducation canine 
              basée sur la bienveillance et le respect mutuel.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-12">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-sage-800 mb-6">
                Stéphanie Englebert
              </h2>
              <div className="space-y-4 text-sage-600 leading-relaxed">
                <p>
                  Passionnée par le monde canin, j'ai fait de cette passion mon métier. 
                  Diplômée de Canidélite et formée chez Muzo+, j'ai acquis une solide 
                  expertise en éducation canine comportementale.
                </p>
                <p>
                  Après 9 mois d'expérience en centre, j'ai choisi de me mettre à mon compte 
                  pour offrir un accompagnement personnalisé, adapté aux besoins spécifiques 
                  de chaque binôme maître-chien.
                </p>
              </div>
              
              {/* Formation & Expérience intégrées */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-semibold text-sage-800 mb-3 flex items-center">
                    🎓 Formation
                  </h3>
                  <ul className="space-y-1 text-sm text-sage-600">
                    <li>• Diplôme Canidélite</li>
                    <li>• Formation Muzo+</li>
                    <li>• Formation continue</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-sage-800 mb-3 flex items-center">
                    💼 Expérience
                  </h3>
                  <ul className="space-y-1 text-sm text-sage-600">
                    <li>• 9 mois en centre</li>
                    <li>• Chiots et adultes</li>
                    <li>• Chiens réactifs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/stephanie-roxy-sunset.jpg`}
                    alt="Stéphanie Englebert et Roxy dans un magnifique paysage au coucher du soleil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-sage-600 text-center mt-3 italic">
                  Stéphanie et Roxy, une vraie complicité
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section Condensée */}
      <section className="py-12 bg-sage-50">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-8">
              Ma philosophie & mes valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-sage-200">
                <h3 className="text-xl font-semibold text-sage-800 mb-3 flex items-center">
                  🚫 Pas de punition
                </h3>
                <p className="text-sage-600">
                  Je refuse toute forme de punition. Ces méthodes créent de la peur 
                  et nuisent à la relation de confiance.
                </p>
              </Card>

              <Card className="p-6 border-sage-200">
                <h3 className="text-xl font-semibold text-sage-800 mb-3 flex items-center">
                  🤝 Approche respectueuse
                </h3>
                <p className="text-sage-600">
                  Chaque chien est unique. Mon approche s'adapte à chaque individu 
                  pour un apprentissage positif et sécurisant.
                </p>
              </Card>
            </div>

            {/* Valeurs condensées */}
            <Card className="p-6 bg-sage-600 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-1">🕰️</div>
                  <h4 className="font-medium text-sm">Patience</h4>
                </div>
                <div>
                  <div className="text-2xl mb-1">👂</div>
                  <h4 className="font-medium text-sm">Écoute</h4>
                </div>
                <div>
                  <div className="text-2xl mb-1">📚</div>
                  <h4 className="font-medium text-sm">Pédagogie</h4>
                </div>
                <div>
                  <div className="text-2xl mb-1">💪</div>
                  <h4 className="font-medium text-sm">Engagement</h4>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section Condensée */}
      <section className="py-12">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">
              Des résultats durables
            </h2>
            <p className="text-lg text-sage-600 mb-8">
              Méthode positive pour des résultats visibles dès la première séance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-lg font-semibold text-sage-800">Efficacité prouvée</h3>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💝</div>
                <h3 className="text-lg font-semibold text-sage-800">Complicité renforcée</h3>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⏳</div>
                <h3 className="text-lg font-semibold text-sage-800">Résultats durables</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-sage-600 text-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-2xl font-bold mb-4">
            Prêt·e à découvrir ma méthode ?
          </h2>
          <p className="text-lg text-sage-100 mb-6 max-w-2xl mx-auto">
            Contactez-moi pour une première discussion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-white text-sage-600 hover:bg-sage-50"
            >
              <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                📱 Contactez-moi
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-sage-600"
            >
              <Link to="/témoignages">
                Voir les témoignages
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
