
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Mail, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SITE_CONTACT } from '@/lib/site.js';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      // Success feedback
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        className: "bg-primary text-primary-foreground"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - H.Moeslé Design | Meuble sur mesure Pays Basque</title>
        <meta 
          name="description" 
          content="Contactez H.Moeslé Design pour votre projet de meuble sur mesure au Pays Basque. Devis gratuit et accompagnement personnalisé." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted to-background px-4 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          {/* [MODIF CONTACT - TITRE PRINCIPAL] */}
          <h1 className="heading-font mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Vous avez un projet de meuble sur mesure ?
          </h1>
          {/* [MODIF CONTACT - TEXTE PRINCIPAL] */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Parlons-en ensemble. Je serais ravi de discuter de votre projet et de vous accompagner 
            dans sa réalisation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Contact Form */}
            <Card className="rounded-xl shadow-lg">
              <CardContent className="p-6 sm:p-8">
                {/* [MODIF CONTACT - TITRE FORMULAIRE] */}
                <h2 className="heading-font mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                  Envoyez-moi un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    {/* [MODIF CONTACT - LIBELLÉ CHAMP NOM] */}
                    <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                      Nom complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="bg-background text-foreground border-input"
                      required
                    />
                  </div>

                  <div>
                    {/* [MODIF CONTACT - LIBELLÉ CHAMP EMAIL] */}
                    <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="bg-background text-foreground border-input"
                      required
                    />
                  </div>

                  <div>
                    {/* [MODIF CONTACT - LIBELLÉ CHAMP MESSAGE] */}
                    <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet..."
                      rows={6}
                      className="bg-background text-foreground border-input resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-base sm:text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="rounded-xl shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  {/* [MODIF CONTACT - COORDONNÉES] L'email et le LinkedIn se modifient dans src/lib/site.js. */}
                  <h3 className="heading-font mb-6 text-2xl font-bold text-foreground">
                    Coordonnées
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Email</p>
                        <a 
                          href={`mailto:${SITE_CONTACT.email}`}
                          className="break-all text-muted-foreground transition-colors hover:text-primary"
                        >
                          {SITE_CONTACT.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">LinkedIn</p>
                        <a 
                          href={SITE_CONTACT.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all text-muted-foreground transition-colors hover:text-primary"
                        >
                          {SITE_CONTACT.linkedinLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-lg bg-primary text-primary-foreground">
                <CardContent className="p-6 sm:p-8">
                  {/* [MODIF CONTACT - ARGUMENTS RASSURANTS] Change ici le titre et les 4 points. */}
                  <h3 className="heading-font mb-4 text-2xl font-bold">
                    Pourquoi me contacter ?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Devis gratuit et sans engagement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Accompagnement personnalisé</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Réponse rapide sous 48h</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>Conseils d'expert en design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
