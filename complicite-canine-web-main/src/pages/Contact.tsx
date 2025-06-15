import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Clock } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const dogName = formData.get('dogName');
    const message = formData.get('message');

    // Construire le message WhatsApp
    const whatsappMessage = `*Nouveau message de contact*\n\n` +
      `*Nom:* ${firstName} ${lastName}\n` +
      `*Email:* ${email || 'Non renseigné'}\n` +
      `*Téléphone:* ${phone || 'Non renseigné'}\n` +
      `*Nom du chien:* ${dogName || 'Non renseigné'}\n\n` +
      `*Message:*\n${message}`;

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Ouvrir WhatsApp avec le message pré-rempli
    window.open(`https://wa.me/33675054564?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="flex-1">
      <div className="min-h-screen py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sage-50 to-white py-8">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-sage-800 mb-4">
                Contactez-moi
              </h1>
              <p className="text-xl text-sage-600 leading-relaxed mb-4">
                Prêt·e à commencer l'éducation de votre compagnon ? Je réponds personnellement à chaque demande.
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
                        className="w-full bg-sage-600 hover:bg-sage-700 text-lg py-3"
                      >
                        Envoyer mon message
                      </Button>
                    </form>

                    <div className="mt-6 p-4 bg-sage-50 rounded-lg border border-sage-200">
                      <p className="text-sm text-sage-600 leading-relaxed">
                        <strong>💡</strong> Besoin d'informations ? Une question en tête ? Je suis là pour vous ! N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
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
                      <div className="text-4xl">💬</div>
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
                        <h3 className="text-xl font-semibold text-sage-800 mb-2">Zones d'intervention</h3>
                        <div className="space-y-4 text-sage-600">
                          <h3 className="text-2xl font-bold text-sage-800">Yvelines</h3>
                          <p>
                            Louveciennes et les villes environnantes : Bougival, la Celle-Saint-Cloud, Le Chesnay, le Port-Marly, Marly le Roi, Versailles, Croissy, Chatou
                          </p>
                          <p className="mt-2"><strong>Terrain :</strong> Mareil-Marly</p>
                        </div>
                        <div className="space-y-4 text-sage-600">
                          <h3 className="text-2xl font-bold text-sage-800">Var</h3>
                          <p>
                            Cavalaire-sur-Mer et ses environs
                          </p>
                        </div>
                        <p><strong>Interventions :</strong> À domicile et en extérieur</p>
                      </div>
                    </div>
                  </Card>

                  {/* Availability */}
                  <Card className="p-6 border-sage-200 bg-sage-50">
                    <div className="text-center">
                      <Clock className="w-12 h-12 mx-auto mb-4 text-sage-600" />
                      <h3 className="text-xl font-semibold text-sage-800 mb-3">
                        Disponibilités
                      </h3>
                      <p className="text-sage-600 leading-relaxed">
                        Je réponds généralement dans les <strong>2 heures</strong> en semaine 
                        et dans la <strong>journée</strong> le weekend.
                      </p>
                    </div>
                  </Card>
                </div>
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
    </main>
  );
};

export default Contact;
