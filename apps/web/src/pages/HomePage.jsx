
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Home, TrendingUp, Sparkles, MapPin } from 'lucide-react';

const HomePage = () => {
  const questions = [
    {
      icon: Home,
      title: "Optimiser mon intérieur",
      description: "Vous souhaitez maximiser l'espace et créer un intérieur fonctionnel et esthétique qui vous ressemble ?"
    },
    {
      icon: TrendingUp,
      title: "Valoriser mon bien locatif",
      description: "Vous voulez augmenter l'attractivité de votre location avec du mobilier sur mesure et un design soigné ?"
    },
    {
      icon: Sparkles,
      title: "Moderniser mon logement",
      description: "Vous désirez rafraîchir votre espace avec des meubles contemporains et personnalisés ?"
    }
  ];

  return (
    <>
      <Helmet>
        <title>H.Moeslé Design - Meuble sur mesure et design de mobilier Pays Basque</title>
        <meta 
          name="description" 
          content="Designer mobilier au Pays Basque. Création de meubles sur mesure personnalisés et design d'intérieur. Ameublement artisanal unique pour votre espace." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100svh-4.5rem)] items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[calc(100svh-5rem)] sm:py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1699268092475-f7a45ce3fe2d)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <img 
            src="https://horizons-cdn.hostinger.com/22591d1d-ba76-423a-b800-205c2197f546/e924bbdc4067dcf2885c5a2fae4f5422.png" 
            alt="H.Moeslé Design logo"
            className="mx-auto mb-6 h-16 w-auto drop-shadow-2xl sm:mb-8 sm:h-20"
          />
          <h1 className="heading-font mb-5 text-4xl font-bold text-white sm:text-5xl md:mb-6 md:text-7xl">
            Hansi Moeslé Design
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
            Création de mobilier sur mesure et aménagement d'intérieur personnalisé au Pays Basque
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-background px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="heading-font mb-6 text-center text-3xl font-bold text-foreground sm:mb-8 sm:text-4xl md:text-5xl">
            Une approche artisanale unique
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 text-base leading-relaxed sm:text-lg">
              Chaque projet est une aventure créative où je conçois des meubles qui s'intègrent parfaitement 
              à votre espace et reflètent votre personnalité. Mon approche combine design contemporain, 
              fonctionnalité optimale et savoir-faire artisanal.
            </p>
            <p className="text-base leading-relaxed sm:text-lg">
              De la première esquisse à l'installation finale, je vous accompagne pour transformer vos idées 
              en réalité tangible. Chaque pièce est pensée pour durer, alliant esthétique intemporelle et 
              qualité de fabrication exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="bg-muted px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-font mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Est-ce fait pour moi ?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-muted-foreground sm:mb-12 sm:text-lg">
            Découvrez si mes services correspondent à vos besoins
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {questions.map((question, index) => {
              const Icon = question.icon;
              return (
                <Card 
                  key={index}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="heading-font mb-4 text-xl font-semibold text-foreground sm:text-2xl">
                      {question.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {question.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-font mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Discutons ensemble de vos besoins et créons le mobilier parfait pour votre espace
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-xl px-6 py-5 text-base shadow-lg transition-all hover:shadow-xl sm:px-8 sm:py-6 sm:text-lg">
              Discutons-en
            </Button>
          </Link>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-primary px-4 py-10 text-primary-foreground sm:py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
            <MapPin className="h-6 w-6 shrink-0" />
            <p className="text-base font-medium sm:text-lg">
              Basé au Pays Basque, Sud-Ouest France - Interventions dans toute la région
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
