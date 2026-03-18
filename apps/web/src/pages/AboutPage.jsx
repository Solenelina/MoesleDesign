
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Palette, Box, Pencil, Lightbulb } from 'lucide-react';

const AboutPage = () => {
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
      <section className="relative py-24 px-4 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-font text-5xl md:text-6xl font-bold text-foreground mb-6">
            À propos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une passion pour la création et l'optimisation des espaces
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-font text-4xl font-bold text-foreground mb-6">
                Ma passion pour le mobilier
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1688728981543-df24d24d0116" 
                alt="Atelier de design de mobilier avec outils et matériaux de création"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-font text-4xl font-bold text-foreground mb-12 text-center">
            Mon expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="heading-font text-2xl font-semibold text-foreground mb-4">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1563174378-62b20fb3298d" 
                alt="Intérieur moderne avec mobilier design et aménagement personnalisé"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-font text-4xl font-bold text-foreground mb-6">
                Une approche unique
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
