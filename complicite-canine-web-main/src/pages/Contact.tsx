
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais. Merci pour votre confiance.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-20">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
              Contactez-moi
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Prêt·e à commencer l'éducation de votre compagnon ? 
              Je réponds personnellement à chaque message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-sage-800 mb-8">
                  Envoyez-moi un message
                </h2>
                
                <Card className="p-8 border-sage-200">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          placeholder="Votre prénom"
                          required 
                          className="border-sage-300 focus:border-sage-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          placeholder="Votre nom"
                          required 
                          className="border-sage-300 focus:border-sage-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        placeholder="votre.email@exemple.com"
                        className="border-sage-300 focus:border-sage-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="border-sage-300 focus:border-sage-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dogName">Nom de votre chien</Label>
                      <Input 
                        id="dogName" 
                        name="dogName"
                        placeholder="Le nom de votre compagnon"
                        className="border-sage-300 focus:border-sage-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Parlez-moi de votre chien et de vos objectifs..."
                        required
                        rows={6}
                        className="border-sage-300 focus:border-sage-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-sage-600 hover:bg-sage-700 text-lg py-3"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-sage-50 rounded-lg border border-sage-200">
                    <p className="text-sm text-sage-600 leading-relaxed">
                      <strong>💡 Conseil :</strong> Plus vous me donnez d'informations sur votre chien 
                      (âge, race, comportements observés, objectifs), plus je pourrai vous proposer 
                      un accompagnement personnalisé.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-sage-800 mb-8">
                    Ou contactez-moi directement
                  </h2>
                </div>

                {/* WhatsApp */}
                <Card className="p-6 border-sage-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">📱</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-sage-800 mb-2">WhatsApp</h3>
                      <p className="text-sage-600 mb-4">
                        Le moyen le plus rapide pour me joindre
                      </p>
                      <Button 
                        asChild 
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                          06 75 05 45 64
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Location */}
                <Card className="p-6 border-sage-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">📍</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-sage-800 mb-2">Zone d'intervention</h3>
                      <div className="space-y-2 text-sage-600">
                                      <p><strong>Zone d'intervention :</strong> Louveciennes et les villes environnantes : Bougival, la Celle-Saint-Cloud, Le Chesnay, le Port-Marly, Marly le Roi, Versailles, Croissy, Chatou</p>
              <p><strong>Terrain :</strong> Mareil-Marly</p>
                        <p><strong>Interventions :</strong> À domicile et en extérieur</p>
                        <p className="text-sm">
                          Secteur Yvelines : Le Vésinet, Chatou, Bougival, 
                          La Celle-Saint-Cloud, Croissy-sur-Seine...
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Availability */}
                <Card className="p-6 border-sage-200 bg-sage-50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⏰</div>
                    <h3 className="text-xl font-semibold text-sage-800 mb-3">
                      Disponibilités
                    </h3>
                    <p className="text-sage-600 leading-relaxed">
                      Je réponds généralement dans les <strong>2 heures</strong> en semaine 
                      et dans la <strong>journée</strong> le weekend. 
                      Pas de réservation automatique, chaque demande est traitée personnellement.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-sage-50">
        <div className="container-width section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-8">
              Zone d'intervention
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Informations principales */}
              <Card className="p-8 border-sage-200 h-fit">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">📍</div>
                  <h3 className="text-2xl font-semibold text-sage-800 mb-4">
                    Où j'interviens
                  </h3>
                  <p className="text-lg text-sage-600 leading-relaxed">
                    <strong>Louveciennes</strong> et les villes environnantes
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-sage-100 rounded-lg">
                    <span className="font-medium text-sage-800">🏠 Base principale</span>
                    <span className="text-sage-600">Louveciennes</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-sage-50 rounded-lg">
                    <span className="font-medium text-sage-800">🌳 Terrain d'entraînement</span>
                    <span className="text-sage-600">Mareil-Marly</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-sage-50 rounded-lg">
                    <span className="font-medium text-sage-800">📱 Contact rapide</span>
                    <span className="text-sage-600">06 75 05 45 64</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-sage-200">
                  <Button 
                    asChild 
                    className="w-full bg-sage-600 hover:bg-sage-700"
                  >
                    <a
                      href="https://maps.app.goo.gl/qHsD5Xnt5Rc9DrYf7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🗺️ Voir sur Google Maps
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Liste des villes */}
              <Card className="p-8 border-sage-200">
                <h4 className="text-xl font-semibold text-sage-800 mb-6">
                  Villes couvertes
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "Louveciennes", status: "Base", icon: "🏠" },
                    { name: "Bougival", status: "Disponible", icon: "✅" },
                    { name: "La Celle-Saint-Cloud", status: "Disponible", icon: "✅" },
                    { name: "Le Chesnay", status: "Disponible", icon: "✅" },
                    { name: "Le Port-Marly", status: "Disponible", icon: "✅" },
                    { name: "Marly-le-Roi", status: "Disponible", icon: "✅" },
                    { name: "Versailles", status: "Disponible", icon: "✅" },
                    { name: "Croissy", status: "Disponible", icon: "✅" },
                    { name: "Chatou", status: "Disponible", icon: "✅" },
                    { name: "Mareil-Marly", status: "Terrain", icon: "🌳" }
                  ].map((city, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-sage-100 hover:border-sage-300 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{city.icon}</span>
                        <span className="font-medium text-sage-800">{city.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        city.status === "Base" 
                          ? "bg-sage-700 text-white" 
                          : city.status === "Terrain"
                          ? "bg-green-100 text-green-700"
                          : "bg-sage-100 text-sage-700"
                      }`}>
                        {city.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-sage-50 rounded-lg border border-sage-200">
                  <h5 className="font-semibold text-sage-800 mb-2 flex items-center gap-2">
                    <span>ℹ️</span>
                    Types d'intervention
                  </h5>
                  <ul className="text-sm text-sage-600 space-y-1">
                    <li>• <strong>À domicile :</strong> Éducation dans votre environnement</li>
                    <li>• <strong>En extérieur :</strong> Socialisation et exercices pratiques</li>
                    <li>• <strong>Terrain privé :</strong> Séances spécialisées à Mareil-Marly</li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Section d'appel à l'action */}
            <div className="mt-8 text-center">
              <Card className="p-6 bg-gradient-to-r from-sage-600 to-sage-700 text-white border-0">
                <h4 className="text-xl font-semibold mb-3">
                  Votre ville n'est pas dans la liste ?
                </h4>
                <p className="mb-4 text-sage-100">
                  N'hésitez pas à me contacter ! Je peux étudier votre demande 
                  selon la distance et vos besoins spécifiques.
                </p>
                <Button 
                  asChild 
                  variant="secondary"
                  className="bg-white text-sage-600 hover:bg-sage-50"
                >
                  <a href="https://wa.me/33675054564" target="_blank" rel="noopener noreferrer">
                    💬 Me contacter sur WhatsApp
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-12">
              Questions fréquentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-sage-200">
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  💰 Quels sont vos tarifs ?
                </h3>
                <p className="text-sage-600">
                  Les tarifs varient selon le type de séance et vos besoins. 
                  Contactez-moi pour un devis personnalisé et gratuit.
                </p>
              </Card>

              <Card className="p-6 border-sage-200">
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  📅 Comment se déroule la première séance ?
                </h3>
                <p className="text-sage-600">
                  Bilan comportemental, définition des objectifs et début 
                  des exercices. Durée : 1h à 1h30 selon les besoins.
                </p>
              </Card>

              <Card className="p-6 border-sage-200">
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  🐕 À partir de quel âge ?
                </h3>
                <p className="text-sage-600">
                  Dès 8 semaines pour les chiots, aucune limite d'âge pour 
                  les chiens adultes. Il n'est jamais trop tard !
                </p>
              </Card>

              <Card className="p-6 border-sage-200">
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  📍 Vous déplacez-vous partout ?
                </h3>
                <p className="text-sage-600">
                  Principalement dans les Yvelines. N'hésitez pas à me contacter 
                  pour vérifier si votre secteur est couvert.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
