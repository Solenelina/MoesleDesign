
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
      description: "Vous souhaitez maximiser l'espace et créer un intérieur fonctionnel et esthétique qui vous ressemble?"
    },
    {
      icon: TrendingUp,
      title: "Valoriser mon bien locatif",
      description: "Vous voulez augmenter l'attractivité de votre location avec du mobilier sur mesure et un design soigné?"
    },
    {
      icon: Sparkles,
      title: "Moderniser mon logement",
      description: "Vous désirez rafraîchir votre espace avec des meubles contemporains et personnalisés?"
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1699268092475-f7a45ce3fe2d)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img 
            src="https://horizons-cdn.hostinger.com/22591d1d-ba76-423a-b800-205c2197f546/e924bbdc4067dcf2885c5a2fae4f5422.png" 
            alt="H.Moeslé Design logo"
            className="h-20 w-auto mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="heading-font text-5xl md:text-7xl font-bold text-white mb-6">
            Hansi Moeslé Design
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Création de mobilier sur mesure et aménagement d'intérieur personnalisé au Pays Basque
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Une approche artisanale unique
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Chaque projet est une aventure créative où je conçois des meubles qui s'intègrent parfaitement 
              à votre espace et reflètent votre personnalité. Mon approche combine design contemporain, 
              fonctionnalité optimale et savoir-faire artisanal.
            </p>
            <p className="text-lg leading-relaxed">
              De la première esquisse à l'installation finale, je vous accompagne pour transformer vos idées 
              en réalité tangible. Chaque pièce est pensée pour durer, alliant esthétique intemporelle et 
              qualité de fabrication exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Est-ce fait pour moi ?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Découvrez si mes services correspondent à vos besoins
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {questions.map((question, index) => {
              const Icon = question.icon;
              return (
                <Card 
                  key={index}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="heading-font text-2xl font-semibold text-foreground mb-4">
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
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons ensemble de vos besoins et créons le mobilier parfait pour votre espace
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Discutons-en
            </Button>
          </Link>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="h-6 w-6" />
            <p className="text-lg font-medium">
              Basé au Pays Basque, Sud-Ouest France - Interventions dans toute la région
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
