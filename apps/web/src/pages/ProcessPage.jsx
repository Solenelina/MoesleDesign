import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Phone, Home, Pencil, Settings, Hammer, CheckCircle } from 'lucide-react';
const ProcessPage = () => {
  /*
   * [MODIF PROCESSUS - ÉTAPES]
   * Chaque objet ci-dessous correspond à une étape affichée sur la page.
   * - title = titre de l'étape
   * - description = texte de l'étape
   * Pour ajouter une étape, duplique un objet complet.
   */
  const steps = [{
    number: 1,
    icon: Phone,
    title: "Premier contact",
    description: "Tout commence par un échange à distance, sans engagement. Je prends le temps d'écouter votre projet, vos envies et vos contraintes pour voir ensemble comment je peux y répondre."
  }, {
    number: 2,
    icon: Home,
    title: "Rencontre sur place",
    description: "Je me déplace chez vous pour voir l'espace, prendre les mesures précises et mieux cerner le contexte. C'est souvent à ce stade que le projet prend vraiment forme."
  }, {
    number: 3,
    icon: Pencil,
    title: "Création des propositions",
    description: "Je réalise des croquis et des plans 3D pour vous permettre de vous projeter dans le résultat final avant tout engagement. C'est aussi l'étape où on ajuste, on affine, jusqu'à ce que la proposition vous corresponde vraiment."
  }, {
    number: 4,
    icon: Settings,
    title: "Ajustements et choix des matériaux",
    description: "On finalise ensemble les détails : matériaux, finitions, couleurs, dimensions. Je vous guide dans les choix en fonction de vos goûts et de votre budget, mais c'est vous qui avez le dernier mot."
  }, {
    number: 5,
    icon: Hammer,
    title: "Fabrication",
    description: "Selon le type de meuble et les matériaux retenus, je fabrique moi-même ou je m'appuie sur des artisans de confiance. Pour les ouvrages en bois, je travaille en direct. Pour des matériaux plus spécifiques (métal, verre, tapisserie…), je fais appel à des spécialistes. Dans tous les cas, je reste l'interlocuteur principal et suis le projet jusqu'à la livraison."
  }, {
    number: 6,
    icon: CheckCircle,
    title: "Accompagnement jusqu'à l'installation",
    description: "Je livre et installe le meuble chez vous, et je m'assure que tout est en place comme prévu. Votre satisfaction en fin de projet, c'est ce qui compte."
  }];
  return <>
      <Helmet>
        <title>Mon processus créatif - H.Moeslé Design</title>
        <meta name="description" content="Découvrez les 6 étapes de création de mobilier sur mesure : du premier contact à l'installation finale. Processus artisanal et personnalisé." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted to-background px-4 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          {/* [MODIF PROCESSUS - TITRE] */}
          <h1 className="heading-font mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Mon processus créatif
          </h1>
          {/* [MODIF PROCESSUS - SOUS-TITRE] */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Un accompagnement personnalisé en 6 étapes pour créer le meuble qu'il vous faut
          </p>
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
          {/* [MODIF PROCESSUS - CONCLUSION] */}
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