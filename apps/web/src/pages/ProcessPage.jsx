import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { MessageCircle, Home, Pencil, Settings, Hammer, CheckCircle } from 'lucide-react';
const ProcessPage = () => {
  const steps = [{
    number: 1,
    icon: MessageCircle,
    title: "Premier contact",
    description: "Échange à distance pour comprendre vos besoins, vos envies et les contraintes de votre espace. Nous discutons de votre vision et des possibilités."
  }, {
    number: 2,
    icon: Home,
    title: "Rencontre sur place",
    description: "Visite de votre espace pour prendre les mesures précises, analyser l'environnement et affiner ensemble le projet. C'est le moment de partager vos inspirations."
  }, {
    number: 3,
    icon: Pencil,
    title: "Création des propositions",
    description: "Réalisation de croquis et de plans 3D détaillés pour visualiser le meuble dans votre espace. Vous pouvez voir le résultat avant même la fabrication."
  }, {
    number: 4,
    icon: Settings,
    title: "Ajustements et choix des matériaux",
    description: "Affinage des détails, sélection des matériaux, des finitions et des couleurs. Chaque élément est choisi pour correspondre parfaitement à vos attentes."
  }, {
    number: 5,
    icon: Hammer,
    title: "Fabrication",
    description: "Réalisation du meuble par des artisans qualifiés avec un suivi rigoureux de la qualité. Chaque pièce est fabriquée avec soin et précision."
  }, {
    number: 6,
    icon: CheckCircle,
    title: "Accompagnement jusqu'à l'installation",
    description: "Livraison et installation du meuble dans votre espace. Je m'assure que tout est parfait et que vous êtes pleinement satisfait du résultat."
  }];
  return <>
      <Helmet>
        <title>Mon processus créatif - H.Moeslé Design</title>
        <meta name="description" content="Découvrez les 6 étapes de création de mobilier sur mesure : du premier contact à l'installation finale. Processus artisanal et personnalisé." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-font text-5xl md:text-6xl font-bold text-foreground mb-6">
            Mon processus créatif
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement personnalisé en 6 étapes pour créer le meuble qu'il vous faut
          </p>
        </div>
      </section>

      {/* Process Image */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1613523547236-f76d7652bacd" alt="Phase de conception et design de mobilier avec plans et croquis" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return <Card key={step.number} className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${isEven ? 'border-l-primary' : 'border-l-secondary'}`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${isEven ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-sm font-bold px-3 py-1 rounded-full ${isEven ? 'bg-primary/10 text-primary' : 'bg-secondary/20 text-secondary-foreground'}`}>
                            Étape {step.number}
                          </span>
                          <h3 className="heading-font text-2xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-foreground mb-8">
            Un processus transparent et collaboratif
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            À chaque étape, vous êtes impliqué dans les décisions. Votre satisfaction et votre vision 
            sont au cœur de mon processus créatif. Ensemble, nous créons un meuble qui vous ressemble.
          </p>
        </div>
      </section>
    </>;
};
export default ProcessPage;