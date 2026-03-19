
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Palette, Box, Pencil, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  /*
   * [MODIF À PROPOS - CARTES EXPERTISE]
   * Tu peux modifier ici les cartes de la section "Mon expertise".
   * - title = titre de la carte
   * - description = texte de la carte
   * Pour changer l'icône, il faut remplacer la propriété icon par une autre icône importée.
   */
  const expertise = [
    {
      icon: Palette,
      title: "Expertise en design",
      description: "Formation approfondie en design d'intérieur et mobilier, avec une sensibilité particulière pour l'harmonie des espaces et l'équilibre des formes."
    },
    {
      icon: Box,
      title: "Modélisation 3D",
      description: "Maîtrise des outils de modélisation 3D pour visualiser vos projets avant fabrication. Vous voyez exactement ce que vous obtiendrez."
    },
    {
      icon: Pencil,
      title: "Dessin et croquis",
      description: "Capacité à traduire vos idées en croquis précis et évocateurs. Le dessin à main levée reste un outil essentiel de ma créativité."
    },
    {
      icon: Lightbulb,
      title: "Approche personnalisée",
      description: "Chaque projet est unique. J'écoute vos besoins, comprends votre style de vie et crée des solutions sur mesure qui vous ressemblent."
    }
  ];

  return (
    <>
      <Helmet>
        <title>À propos - H.Moeslé Design | Designer mobilier Pays Basque</title>
        <meta 
          name="description" 
          content="Découvrez Hansi Moeslé, designer de mobilier sur mesure au Pays Basque. Passion pour la création, expertise en design et approche artisanale unique." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted to-background px-4 py-10 sm:py-14 md:py-16">
        <div className="container mx-auto max-w-4xl text-center">
          {/* [MODIF À PROPOS - TITRE PRINCIPAL] */}
          <h1 className="heading-font mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            À propos
          </h1>
          {/* [MODIF À PROPOS - SOUS-TITRE PRINCIPAL] */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Une passion pour la création et l'optimisation des espaces
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              {/* [MODIF À PROPOS - PRÉSENTATION PERSONNELLE] Change ici le titre et les paragraphes. */}
              <h2 className="heading-font mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Ma passion pour le mobilier
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Depuis toujours, je suis fasciné par la manière dont un meuble peut transformer 
                  un espace et améliorer notre quotidien. Cette passion m'a naturellement conduit 
                  vers le design de mobilier sur mesure.
                </p>
                <p>
                  Mon approche combine créativité artistique et pragmatisme fonctionnel. Je crois 
                  qu'un meuble doit être à la fois beau et utile, intemporel et adapté à votre 
                  mode de vie.
                </p>
                <p>
                  Installé au Pays Basque, je puise mon inspiration dans la beauté naturelle de 
                  la région et dans les rencontres avec mes clients. Chaque projet est une 
                  opportunité de créer quelque chose d'unique.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img 
                // [MODIF À PROPOS - IMAGE 1] Remplace le src pour changer l'image.
                src="https://images.unsplash.com/photo-1688728981543-df24d24d0116" 
                alt="Atelier de design de mobilier avec outils et matériaux de création"
                className="h-72 w-full object-cover sm:h-80 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="bg-muted px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          {/* [MODIF À PROPOS - TITRE SECTION EXPERTISE] */}
          <h2 className="heading-font mb-10 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
            Mon expertise
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="heading-font mb-4 text-xl font-semibold text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="order-2 overflow-hidden rounded-2xl shadow-2xl md:order-1">
              <img 
                // [MODIF À PROPOS - IMAGE 2] Remplace le src pour changer l'image.
                src="https://images.unsplash.com/photo-1563174378-62b20fb3298d" 
                alt="Intérieur moderne avec mobilier design et aménagement personnalisé"
                className="h-72 w-full object-cover sm:h-80 md:h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              {/* [MODIF À PROPOS - DEUXIÈME SECTION TEXTE] Change ici le titre et les paragraphes. */}
              <h2 className="heading-font mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Une approche unique
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Je ne crée pas simplement des meubles, je conçois des solutions qui s'intègrent 
                  harmonieusement dans votre vie. Chaque projet commence par une écoute attentive 
                  de vos besoins et de vos aspirations.
                </p>
                <p>
                  Mon processus créatif allie tradition artisanale et technologies modernes. 
                  Les croquis à main levée côtoient les modélisations 3D pour donner vie à 
                  des créations uniques et parfaitement adaptées.
                </p>
                <p>
                  La qualité est au cœur de mon travail. Je collabore avec des artisans locaux 
                  talentueux pour garantir une fabrication irréprochable et durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
