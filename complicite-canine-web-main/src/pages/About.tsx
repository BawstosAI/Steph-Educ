import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec image de fond */}
      <section className="relative bg-gradient-to-b from-sage-50 via-warm-50/40 to-transparent py-12">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/sunset.jpg')] bg-cover bg-[center_20%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-warm-100/20 via-warm-100/10 to-transparent"></div>
        <div className="container-width section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-sage-800 mb-8">
              En apprendre plus sur moi
            </h1>
            <p className="text-xl lg:text-2xl text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Découvrez mon parcours, ma philosophie et mon approche de l'éducation canine 
              basée sur la bienveillance et le respect mutuel.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section avec design amélioré */}
      <section className="py-16 bg-gradient-to-b from-warm-100/20 to-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-sage-800">
                  Stéphanie Englebert
                </h2>
                <p className="text-lg text-sage-600">
                  Éducatrice Canine Comportementaliste
                </p>
              </div>
              <div className="space-y-6 text-sage-600 leading-relaxed text-lg">
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
                <p className="text-sage-600">
                  Je suis éducatrice canine professionnelle, spécialisée dans l'éducation positive et bienveillante.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/sunset.jpg`} 
                    alt="Stéphanie Englebert, éducatrice canine comportementaliste, avec son chien Roxy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-lg text-sm text-sage-700 max-w-[350px] border border-sage-100/50">
                  <p className="leading-relaxed font-medium">
                    Stéphanie et Roxy au Rayol-Canadel-sur-Mer, 
                    <a 
                      href="https://maps.app.goo.gl/4aJHbxU9v71f5pf46" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sage-700 hover:text-sage-800 underline ml-1"
                    >
                      deuxième lieu de travail de Stéphanie
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section avec design amélioré */}
      <section className="py-16 bg-gradient-to-b from-white to-warm-50">
        <div className="container-width section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="w-24 h-1 bg-sage-200 mx-auto mb-16"></div>
            <h2 className="text-4xl font-bold text-sage-800 text-center mb-16">
              Ma philosophie
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <Card className="p-10 border-sage-200 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-2xl font-semibold text-sage-800 mb-6">
                  Approche respectueuse
                </h3>
                <p className="text-sage-600 leading-relaxed text-lg">
                  Chaque chien est unique avec ses besoins, son caractère et son histoire. 
                  Mon approche s'adapte à chaque individu pour créer un environnement 
                  d'apprentissage positif et sécurisant.
                </p>
              </Card>

              <Card className="p-10 border-sage-200 hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-warm-50/50">
                <div className="text-5xl mb-6">🚫</div>
                <h3 className="text-2xl font-semibold text-sage-800 mb-6">
                  Pas de punition
                </h3>
                <p className="text-sage-600 leading-relaxed text-lg">
                  Je refuse catégoriquement toute forme de punition ou de coercition. 
                  Ces méthodes créent de la peur et nuisent à la relation de confiance 
                  indispensable entre le chien et son maître.
                </p>
              </Card>
            </div>

            <Card className="p-12 bg-sage-600 text-white">
              <h3 className="text-3xl font-semibold mb-8 text-center">
                Mes valeurs fondamentales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">🕰️</div>
                  <h4 className="text-xl font-medium mb-3">Patience</h4>
                  <p className="text-sage-100">Chaque apprentissage prend le temps nécessaire</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">👂</div>
                  <h4 className="text-xl font-medium mb-3">Écoute</h4>
                  <p className="text-sage-100">Comprendre vos attentes et les besoins de votre chien</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">📚</div>
                  <h4 className="text-xl font-medium mb-3">Pédagogie</h4>
                  <p className="text-sage-100">Vous transmettre les clés pour continuer l'éducation</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">💪</div>
                  <h4 className="text-xl font-medium mb-3">Engagement</h4>
                  <p className="text-sage-100">Un suivi personnalisé jusqu'à l'atteinte de vos objectifs</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section avec design amélioré */}
      <section className="py-24 bg-warm-50">
        <div className="container-width section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sage-800 mb-8">
              Des résultats durables
            </h2>
            <p className="text-xl text-sage-600 mb-16 leading-relaxed max-w-3xl mx-auto">
              Ma méthode positive permet d'obtenir des résultats visibles dès la première séance, 
              tout en construisant une relation de confiance durable. Les apprentissages sont 
              intégrés naturellement et durent dans le temps.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">🏆</div>
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">Efficacité prouvée</h3>
                <p className="text-sage-600 text-lg">Changements visibles dès la première séance</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">💝</div>
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">Complicité renforcée</h3>
                <p className="text-sage-600 text-lg">Une relation plus harmonieuse au quotidien</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">⏳</div>
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">Résultats durables</h3>
                <p className="text-sage-600 text-lg">Des acquis qui perdurent dans le temps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section avec design amélioré */}
      <section className="py-24 bg-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-4xl font-bold text-sage-800 mb-8">
            Prêt·e à découvrir ma méthode ?
          </h2>
          <p className="text-xl text-sage-600 mb-12 max-w-3xl mx-auto">
            Contactez-moi pour une première discussion. Je serai ravie de vous expliquer 
            comment nous pouvons améliorer la relation avec votre compagnon.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-sage-600 hover:bg-sage-700 text-xl px-10 py-6 h-auto"
            >
              <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                📱 Contactez-moi
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-sage-600 text-sage-600 hover:bg-sage-50 text-xl px-10 py-6 h-auto"
            >
              <Link to="/temoignages">
                <div className="flex flex-col items-center gap-1">
                  <span>Voir les témoignages</span>
                  <div className="flex items-center gap-1 text-base">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <span>(40 avis)</span>
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
