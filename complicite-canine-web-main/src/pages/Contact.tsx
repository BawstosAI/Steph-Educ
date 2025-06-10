
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sage-800 text-center mb-8">
              Zone d'intervention
            </h2>
            
            <Card className="p-8 text-center border-sage-200">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">
                Zone d'intervention élargie
              </h3>
              <p className="text-sage-600 mb-6 leading-relaxed">
                J'interviens à Louveciennes et dans les villes environnantes : Bougival, la Celle-Saint-Cloud, Le Chesnay, le Port-Marly, Marly le Roi, Versailles, Croissy, Chatou. 
                Terrain d'entraînement à Mareil-Marly pour des séances 
                à domicile ou en extérieur.
              </p>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg border border-sage-200 relative">
                {/* Carte interactive personnalisée */}
                <div className="w-full h-full bg-gradient-to-br from-sage-50 to-warm-50 relative">
                  {/* Titre et description */}
                  <div className="absolute top-4 left-4 right-4 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-sage-200">
                      <h4 className="text-lg font-semibold text-sage-800 mb-2">Zone d'intervention interactive</h4>
                      <p className="text-sm text-sage-600 mb-3">
                        Cliquez sur une ville pour plus d'informations
                      </p>
                      
                      {/* Grille des villes interactives */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: "Louveciennes", desc: "Base principale", color: "bg-sage-700" },
                          { name: "Bougival", desc: "Domicile", color: "bg-sage-600" },
                          { name: "La Celle-Saint-Cloud", desc: "Socialisation", color: "bg-sage-600" },
                          { name: "Le Chesnay", desc: "Rééducation", color: "bg-sage-600" },
                          { name: "Le Port-Marly", desc: "Éducation", color: "bg-sage-600" },
                          { name: "Marly-le-Roi", desc: "Terrain", color: "bg-sage-500" },
                          { name: "Versailles", desc: "Parcs", color: "bg-sage-600" },
                          { name: "Croissy", desc: "Balades", color: "bg-sage-600" },
                          { name: "Chatou", desc: "Séances", color: "bg-sage-600" }
                        ].map((city, index) => (
                          <div 
                            key={index}
                            className={`${city.color} text-white text-xs p-2 rounded-lg cursor-pointer hover:opacity-80 transition-opacity text-center group relative`}
                            title={`${city.name} - ${city.desc}`}
                          >
                            <div className="font-medium">{city.name}</div>
                            <div className="text-xs opacity-90">{city.desc}</div>
                            
                            {/* Tooltip au survol */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-20">
                              <div className="bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                                📞 06 75 05 45 64
                                <div className="w-2 h-2 bg-gray-800 transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Fond décoratif avec forme de zone */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-32 border-2 border-sage-400 border-dashed rounded-3xl opacity-30 transform rotate-12"></div>
                    <div className="absolute w-32 h-20 border-2 border-sage-500 border-dashed rounded-2xl opacity-20 transform -rotate-6"></div>
                  </div>

                  {/* Légende en bas */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-sage-200">
                    <h5 className="text-xs font-semibold text-sage-800 mb-2">🗺️ Zone complète</h5>
                    <div className="flex items-center gap-2 text-xs text-sage-600 mb-1">
                      <div className="w-3 h-3 bg-sage-700 rounded-full"></div>
                      <span>Base Louveciennes</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-sage-600 mb-1">
                      <div className="w-3 h-3 bg-sage-600 rounded-full"></div>
                      <span>Villes couvertes</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-sage-600">
                      <div className="w-3 h-3 bg-sage-500 rounded-full"></div>
                      <span>Terrain Mareil-Marly</span>
                    </div>
                  </div>

                  {/* Lien vers Google Maps */}
                  <div className="absolute bottom-4 right-4">
                    <a
                      href="https://www.google.com/maps/search/Louveciennes+Bougival+Celle-Saint-Cloud+Chesnay+Port-Marly+Marly-le-Roi+Versailles+Croissy+Chatou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sage-600 hover:bg-sage-700 text-white text-xs px-3 py-2 rounded-lg shadow-lg transition-colors flex items-center gap-1"
                    >
                      🗺️ Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </Card>
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
