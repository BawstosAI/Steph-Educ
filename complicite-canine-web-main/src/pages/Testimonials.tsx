
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie L.",
      dog: "Luna, Border Collie",
      rating: 5,
      text: "Patience incroyable ! Stéphanie a su créer un climat de confiance avec Luna dès la première rencontre. Les progrès sont spectaculaires.",
      location: "Louveciennes"
    },
    {
      id: 2,
      name: "Thomas B.",
      dog: "Max, Labrador",
      rating: 5,
      text: "Changement dès la 1re séance ! Max était très réactif en laisse, maintenant nos balades sont un plaisir. Méthode douce et efficace.",
      location: "Mareil-Marly"
    },
    {
      id: 3,
      name: "Sophie M.",
      dog: "Bella, Golden Retriever",
      rating: 5,
      text: "Plus de complicité que jamais ! Stéphanie nous a appris à mieux comprendre Bella. La relation s'est transformée positivement.",
      location: "Le Vésinet"
    },
    {
      id: 4,
      name: "Pierre C.",
      dog: "Rocky, Berger Allemand",
      rating: 5,
      text: "Approche bienveillante remarquable. Rocky était craintif avec les autres chiens, il est maintenant sociable et équilibré.",
      location: "Chatou"
    },
    {
      id: 5,
      name: "Camille D.",
      dog: "Nala, Jack Russell",
      rating: 5,
      text: "Professionnalisme et douceur. Nala a appris le rappel en quelques séances. Stéphanie est à l'écoute et très pédagogue.",
      location: "Bougival"
    },
    {
      id: 6,
      name: "Julien R.",
      dog: "Oscar, Bouledogue français",
      rating: 5,
      text: "Méthode respectueuse et efficace. Oscar était destructeur à la maison, il est maintenant calme et obéissant. Merci Stéphanie !",
      location: "La Celle-Saint-Cloud"
    },
    {
      id: 7,
      name: "Émilie V.",
      dog: "Milo, Cocker Spaniel",
      rating: 5,
      text: "Stéphanie a transformé notre quotidien ! Milo était très anxieux et destructeur. Maintenant il est serein et équilibré.",
      location: "Versailles"
    },
    {
      id: 8,
      name: "David L.",
      dog: "Luna, Beagle",
      rating: 5,
      text: "Approche douce et professionnelle. Luna a appris la marche en laisse sans tirer en quelques séances. Résultats impressionnants !",
      location: "Le Chesnay"
    },
    {
      id: 9,
      name: "Catherine M.",
      dog: "Rex, Berger Australien",
      rating: 5,
      text: "Méthode positive qui respecte le chien. Rex était très réactif, il est maintenant calme et à l'écoute. Merci infiniment !",
      location: "Le Port-Marly"
    },
    {
      id: 10,
      name: "Nicolas P.",
      dog: "Zoé, Husky",
      rating: 5,
      text: "Patience et expertise remarquables. Zoé était fugueur, maintenant elle reste près de nous. La complicité s'est renforcée !",
      location: "Marly le Roi"
    },
    {
      id: 11,
      name: "Anne-Sophie R.",
      dog: "Charlie, Cavalier King Charles",
      rating: 5,
      text: "Séances très enrichissantes ! Charlie était très timide, il a gagné en confiance. Stéphanie est une éducatrice exceptionnelle.",
      location: "Croissy"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-20">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
              Ils m'ont fait confiance
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed mb-8">
              Découvrez les témoignages de mes clients et les transformations 
              obtenues grâce à l'éducation canine positive.
            </p>
            <div className="flex items-center justify-center gap-2">
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

      {/* Google Reviews Integration */}
      <section className="py-16 bg-white">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-800 mb-4">
              Avis Google Maps
            </h2>
            <p className="text-sage-600">
              Retrouvez tous mes avis clients authentiques sur Google Maps
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-sage-50 border-sage-200">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">
                  Consultez mes avis Google
                </h3>
                <p className="text-sage-600 mb-6">
                  Découvrez les retours authentiques de mes clients sur Google Maps 
                  et laissez votre propre avis après nos séances.
                </p>
                <Button 
                  asChild 
                  className="bg-sage-600 hover:bg-sage-700"
                >
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Voir sur Google Maps
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-sage-50">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">
              Témoignages de mes clients
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow border-sage-200 bg-white">
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-sage-800">{testimonial.name}</h3>
                        <p className="text-sm text-sage-600">{testimonial.dog}</p>
                      </div>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-xs text-sage-500">{testimonial.location}</p>
                  </div>
                  
                  <blockquote className="text-sage-600 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </Card>
              ))}
            </div>
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
                  Spécialisation chiens réactifs
                </h3>
                <p className="text-sage-100 leading-relaxed max-w-2xl mx-auto">
                  J'accompagne particulièrement les chiens présentant des troubles 
                  comportementaux : réactivité, anxiété, peurs, agressivité. 
                  Ma méthode douce permet de restaurer la confiance et l'équilibre.
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
                📱 Contactez-moi via WhatsApp
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
