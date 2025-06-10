
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-20">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
              En apprendre plus sur moi
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Découvrez mon parcours, ma philosophie et mon approche de l'éducation canine 
              basée sur la bienveillance et le respect mutuel.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-sage-800 mb-6">
                Stéphanie Englebert
              </h2>
              <div className="space-y-4 text-sage-600 leading-relaxed">
                <p>
                  Passionnée par le monde canin depuis toujours, j'ai décidé de faire 
                  de cette passion mon métier. Diplômée de Canidélite et formée chez Muzo+, 
                  j'ai acquis une solide expertise en éducation canine comportementale.
                </p>
                <p>
                  Après 9 mois d'expérience enrichissante en centre, j'ai choisi de me 
                  mettre à mon compte pour offrir un accompagnement plus personnalisé, 
                  adapté aux besoins spécifiques de chaque binôme maître-chien.
                </p>
                <p>
                  Mon compagnon Roxy, un berger australien plein de vie, m'accompagne 
                  dans cette aventure et témoigne au quotidien de l'efficacité de ma méthode.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/sunset.jpg`}
                    alt="Stéphanie Englebert et Roxy au coucher du soleil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-sage-600 text-center mt-3 italic">
                  Stéphanie et Roxy profitant d'un moment de complicité
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-sage-50">
        <div className="container-width section-padding">
          <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">
            Mon parcours professionnel
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-sage-200">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">Formation</h3>
              <ul className="space-y-2 text-sage-600">
                <li className="flex items-start">
                  <span className="text-sage-500 mr-2">•</span>
                  Diplôme Canidélite en éducation canine comportementale
                </li>
                <li className="flex items-start">
                  <span className="text-sage-500 mr-2">•</span>
                  Formation complémentaire Muzo+ en méthodes positives
                </li>
                <li className="flex items-start">
                  <span className="text-sage-500 mr-2">•</span>
                  Formation continue en comportement canin
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-sage-200">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">Expérience</h3>
              <ul className="space-y-2 text-sage-600">
                <li className="flex items-start">
                  <span className="text-sage-500 mr-2">•</span>
                  9 mois d'expérience en centre d'éducation canine
                </li>
                <li className="flex items-start">
                  <span className="text-sage-500 mr-2">•</span>
                  Accompagnement de chiots et chiens adultes
                </li>
                <li className="flex items-start">
                  <span className="text-sage-500 mr-2">•</span>
                  Spécialisation en chiens réactifs et anxieux
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">
              Ma philosophie
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-sage-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">
                  Pas de punition
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Je refuse catégoriquement toute forme de punition ou de coercition. 
                  Ces méthodes créent de la peur et nuisent à la relation de confiance 
                  indispensable entre le chien et son maître.
                </p>
              </Card>

              <Card className="p-8 border-sage-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">
                  Approche respectueuse
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Chaque chien est unique avec ses besoins, son caractère et son histoire. 
                  Mon approche s'adapte à chaque individu pour créer un environnement 
                  d'apprentissage positif et sécurisant.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-sage-600 text-white">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Mes valeurs fondamentales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🕰️</div>
                  <h4 className="font-medium mb-2">Patience</h4>
                  <p className="text-sage-100 text-sm">Chaque apprentissage prend le temps nécessaire</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">👂</div>
                  <h4 className="font-medium mb-2">Écoute</h4>
                  <p className="text-sage-100 text-sm">Comprendre vos attentes et les besoins de votre chien</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-medium mb-2">Pédagogie</h4>
                  <p className="text-sage-100 text-sm">Vous transmettre les clés pour continuer l'éducation</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💪</div>
                  <h4 className="font-medium mb-2">Engagement</h4>
                  <p className="text-sage-100 text-sm">Un suivi personnalisé jusqu'à l'atteinte de vos objectifs</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-warm-50">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sage-800 mb-6">
              Des résultats durables
            </h2>
            <p className="text-lg text-sage-600 mb-12 leading-relaxed">
              Ma méthode positive permet d'obtenir des résultats visibles dès la première séance, 
              tout en construisant une relation de confiance durable. Les apprentissages sont 
              intégrés naturellement et durent dans le temps.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Efficacité prouvée</h3>
                <p className="text-sage-600">Changements visibles dès la première séance</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Complicité renforcée</h3>
                <p className="text-sage-600">Une relation plus harmonieuse au quotidien</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⏳</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Résultats durables</h3>
                <p className="text-sage-600">Des acquis qui perdurent dans le temps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl font-bold text-sage-800 mb-6">
            Prêt·e à découvrir ma méthode ?
          </h2>
          <p className="text-lg text-sage-600 mb-8 max-w-2xl mx-auto">
            Contactez-moi pour une première discussion. Je serai ravie de vous expliquer 
            comment nous pouvons améliorer la relation avec votre compagnon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-sage-600 hover:bg-sage-700 text-lg px-8 py-3"
            >
              <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                📱 Contactez-moi
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-sage-600 text-sage-600 hover:bg-sage-50 text-lg px-8 py-3"
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
