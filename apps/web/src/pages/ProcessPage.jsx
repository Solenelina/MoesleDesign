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
      <section className="relative bg-gradient-to-br from-muted to-background px-4 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="heading-font mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Mon processus créatif
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Un accompagnement personnalisé en 6 étapes pour créer le meuble qu'il vous faut
          </p>
        </div>
      </section>

      {/* Process Image */}
      <section className="px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img src="https://images.unsplash.com/photo-1613523547236-f76d7652bacd" alt="Phase de conception et design de mobilier avec plans et croquis" className="h-64 w-full object-cover sm:h-80 md:h-96" />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-background px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return <Card key={step.number} className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${isEven ? 'border-l-primary' : 'border-l-secondary'}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col items-start gap-5 md:flex-row md:gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${isEven ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                          <span className={`text-sm font-bold px-3 py-1 rounded-full ${isEven ? 'bg-primary/10 text-primary' : 'bg-secondary/20 text-secondary-foreground'}`}>
                            Étape {step.number}
                          </span>
                          <h3 className="heading-font text-xl font-semibold text-foreground sm:text-2xl">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
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
      <section className="bg-muted px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-font mb-8 text-3xl font-bold text-foreground md:text-4xl">
            Un processus transparent et collaboratif
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            À chaque étape, vous êtes impliqué dans les décisions. Votre satisfaction et votre vision 
            sont au cœur de mon processus créatif. Ensemble, nous créons un meuble qui vous ressemble.
          </p>
        </div>
      </section>
    </>;
};
export default ProcessPage;