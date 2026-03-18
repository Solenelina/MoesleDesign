
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card.jsx';

const PortfolioPage = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1687075196974-ea71a55cc9f8',
      title: 'Bibliothèque sur mesure',
      description: 'Bibliothèque murale conçue pour optimiser un espace restreint tout en créant un point focal élégant dans le salon.'
    },
    {
      image: 'https://images.unsplash.com/photo-1652346080508-e2a6b7298450',
      title: 'Table basse contemporaine',
      description: 'Table basse aux lignes épurées, alliant bois massif et métal pour un style industriel raffiné.'
    },
    {
      image: 'https://images.unsplash.com/photo-1643949914877-b20f30792c1e',
      title: 'Meuble TV intégré',
      description: 'Meuble TV sur mesure intégrant rangements et câblage invisible pour un rendu minimaliste et fonctionnel.'
    },
    {
      image: 'https://images.unsplash.com/photo-1699268092475-f7a45ce3fe2d',
      title: 'Aménagement chambre',
      description: 'Tête de lit avec rangements intégrés et tables de chevet assorties pour maximiser l\'espace dans une chambre moderne.'
    },
    {
      image: 'https://images.unsplash.com/photo-1613523547236-f76d7652bacd',
      title: 'Bureau d\'angle ergonomique',
      description: 'Bureau sur mesure optimisant un angle difficile, avec rangements intelligents et finitions haut de gamme.'
    },
    {
      image: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
      title: 'Étagères murales design',
      description: 'Système d\'étagères modulables créant une composition graphique unique tout en offrant un rangement pratique.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - H.Moeslé Design | Réalisations de mobilier sur mesure</title>
        <meta 
          name="description" 
          content="Découvrez mes réalisations de mobilier sur mesure : bibliothèques, tables, bureaux, aménagements personnalisés. Design unique et fabrication artisanale." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted to-background px-4 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-font mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Portfolio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Découvrez ici quelques exemples de mes réalisations. Chaque projet est pensé pour 
            répondre à un besoin précis et s'intégrer harmonieusement dans son environnement.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="heading-font mb-3 text-xl font-semibold text-foreground sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-font mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            Votre projet mérite une attention unique
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Chaque réalisation commence par une conversation. Parlons de votre vision et 
            créons ensemble le meuble parfait pour votre espace.
          </p>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
