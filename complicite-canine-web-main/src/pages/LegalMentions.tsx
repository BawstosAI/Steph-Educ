
const LegalMentions = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-800 mb-8">Mentions légales</h1>
          
          <div className="space-y-8 text-sage-600">
            <section>
              <h2 className="text-2xl font-semibold text-sage-800 mb-4">Éditeur du site</h2>
              <div className="space-y-2">
                <p><strong>Nom :</strong> Stéphanie Englebert</p>
                <p><strong>Activité :</strong> Éducatrice Canine Comportementaliste</p>
                <p><strong>Statut :</strong> Micro-entreprise</p>
                <p><strong>Adresse :</strong> Louveciennes (78430)</p>
              <p><strong>Zone d'intervention :</strong> Louveciennes et les villes environnantes : Bougival, la Celle-Saint-Cloud, Le Chesnay, le Port-Marly, Marly le Roi, Versailles, Croissy, Chatou</p>
                <p><strong>Téléphone :</strong> 06 75 05 45 64</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sage-800 mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc., 
                340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sage-800 mb-4">Propriété intellectuelle</h2>
              <p>
                Le contenu de ce site (textes, images, logos) est la propriété exclusive 
                de Stéphanie Englebert. Toute reproduction sans autorisation est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sage-800 mb-4">Données personnelles</h2>
              <p>
                Les données collectées via le formulaire de contact sont utilisées 
                uniquement pour répondre à vos demandes. Elles ne sont pas transmises 
                à des tiers et sont conservées pour la durée nécessaire au traitement 
                de votre demande.
              </p>
              <p className="mt-2">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification 
                et de suppression de vos données. Pour exercer ces droits, contactez-nous 
                via WhatsApp au 06 75 05 45 64.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sage-800 mb-4">Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de tracking ou de publicité. 
                Seuls des cookies techniques nécessaires au fonctionnement du site 
                peuvent être utilisés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sage-800 mb-4">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont données à titre indicatif. 
                Stéphanie Englebert ne saurait être tenue responsable des dommages 
                directs ou indirects qui pourraient résulter de l'accès au site 
                ou de son utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sage-800 mb-4">Droit applicable</h2>
              <p>
                Le présent site et les présentes mentions légales sont soumis au droit français. 
                En cas de litige, seuls les tribunaux français seront compétents.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-sage-200">
            <p className="text-sm text-sage-500">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
