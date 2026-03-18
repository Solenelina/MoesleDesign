
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog.jsx';
const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const collectionStudio = [
    {
      title: 'Bibliothèque sur mesure',
      description: 'Bibliothèque murale conçue pour optimiser un espace restreint tout en créant un point focal élégant dans le salon.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1687075196974-ea71a55cc9f8',
          alt: 'Bibliothèque sur mesure dans un salon contemporain'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1643949914877-b20f30792c1e',
          alt: 'Détail de rangement intégré dans une bibliothèque sur mesure'
        }
      ]
    },
    {
      title: 'Table basse contemporaine',
      description: 'Table basse aux lignes épurées, alliant bois massif et métal pour un style industriel raffiné.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1652346080508-e2a6b7298450',
          alt: 'Table basse contemporaine en bois et metal'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
          alt: 'Finition de table basse et assemblage des materiaux'
        }
      ]
    },
    {
      title: 'Meuble TV intégré',
      description: 'Meuble TV sur mesure intégrant rangements et câblage invisible pour un rendu minimaliste et fonctionnel.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1643949914877-b20f30792c1e',
          alt: 'Meuble TV integre dans un sejour'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
          alt: 'Vue detaillee des rangements du meuble TV'
        }
      ]
    },
    {
      title: 'Atelier en action',
      description: 'Un aperçu du travail en atelier : préparation, ajustements et finitions avant installation.',
      media: [
        {
          type: 'video',
          src: 'https://cdn.coverr.co/videos/coverr-carpenter-using-power-tools-1579/1080p.mp4',
          poster: 'https://images.unsplash.com/photo-1613523547236-f76d7652bacd',
          alt: 'Travail en atelier sur meuble sur mesure'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1613523547236-f76d7652bacd',
          alt: 'Espace atelier avec outils et plans'
        }
      ]
    },
    {
      title: 'Détails de finitions',
      description: 'Zoom sur les assemblages, les chants et les finitions pour garantir un rendu propre et durable.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
          alt: 'Detail de finition sur une piece en bois'
        },
        {
          type: 'video',
          src: 'https://cdn.coverr.co/videos/coverr-man-measuring-wood-1576/1080p.mp4',
          poster: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
          alt: 'Controle des cotes et finitions avant pose'
        }
      ]
    },
    {
      title: 'Prise de cotes et préparation',
      description: 'Mesures, vérifications et préparation des pièces avant la phase de fabrication.',
      media: [
        {
          type: 'video',
          src: 'https://cdn.coverr.co/videos/coverr-man-measuring-wood-1576/1080p.mp4',
          poster: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
          alt: 'Prise de cotes en atelier'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1652346080508-e2a6b7298450',
          alt: 'Preparation des elements avant fabrication'
        }
      ]
    }
  ];

  const collectionHabitat = [
    {
      title: 'Bureau d\'angle ergonomique',
      description: 'Bureau sur mesure optimisant un angle difficile, avec rangements intelligents et finitions haut de gamme.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1613523547236-f76d7652bacd',
          alt: 'Bureau d angle sur mesure dans un espace de travail'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
          alt: 'Vue detaillee des rangements du bureau sur mesure'
        }
      ]
    },
    {
      title: 'Étagères murales design',
      description: 'Système d\'étagères modulables créant une composition graphique unique tout en offrant un rangement pratique.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
          alt: 'Etagere murale design dans un interieur lumineux'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1699268092475-f7a45ce3fe2d',
          alt: 'Composition graphique d etageres sur un mur'
        }
      ]
    },
    {
      title: 'Aménagement chambre',
      description: 'Tête de lit avec rangements intégrés et tables de chevet assorties pour maximiser l\'espace dans une chambre moderne.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1699268092475-f7a45ce3fe2d',
          alt: 'Amenagement de chambre avec tete de lit integree'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1643949914877-b20f30792c1e',
          alt: 'Detail des rangements sur mesure en chambre'
        }
      ]
    },
    {
      title: 'Installation finale',
      description: 'Mise en place sur site et derniers réglages pour un résultat parfaitement intégré à l\'espace.',
      media: [
        {
          type: 'video',
          src: 'https://cdn.coverr.co/videos/coverr-carpenter-at-workshop-1578/1080p.mp4',
          poster: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
          alt: 'Phase d installation d un meuble sur mesure'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1613523547236-f76d7652bacd',
          alt: 'Resultat final apres installation'
        }
      ]
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
    setIsViewerOpen(true);
  };

  const renderProjectCard = (project, index, extraClassName = '') => {
    const cover = project.media[0];
    return (
      <Card
        key={`${project.title}-${index}`}
        className={`group cursor-pointer overflow-hidden rounded-xl border border-border/60 shadow-lg transition-all duration-300 hover:shadow-2xl ${extraClassName}`}
        onClick={() => openProject(project)}
      >
        <div className="relative overflow-hidden">
          {cover.type === 'video' ? (
            <video
              className="h-60 w-full object-cover sm:h-64"
              muted
              playsInline
              preload="metadata"
              poster={cover.poster}
            >
              <source src={cover.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={cover.src}
              alt={cover.alt || project.title}
              className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <p className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
            {project.media.length} medias
          </p>
        </div>
        <CardContent className="p-6">
          <h3 className="heading-font mb-3 text-xl font-semibold text-foreground sm:text-2xl">
            {project.title}
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </CardContent>
      </Card>
    );
  };

  const activeMedia = selectedProject?.media?.[activeMediaIndex];

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

      {/* Collection 1 */}
      <section className="px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <h2 className="heading-font text-3xl font-bold text-foreground sm:text-4xl">
              Sélection de projets
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Une bibliothèque de projets cliquables, avec plusieurs vues (photos et vidéos) pour chaque réalisation.
            </p>
          </div>

          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent sm:mb-8" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {collectionStudio.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>
      </section>

      {/* Collection 2 */}
      <section className="bg-muted px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <h2 className="heading-font text-3xl font-bold text-foreground sm:text-4xl">
              Projets résidentiels
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des projets résidentiels pensés sur mesure, chacun avec une galerie dédiée pour voir les détails et les différentes étapes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {collectionHabitat.map((project, index) => renderProjectCard(project, index, index === 0 ? 'md:col-span-2 xl:col-span-2' : ''))}
          </div>
        </div>
      </section>

      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="w-[95vw] max-w-6xl overflow-hidden border-border/60 p-0">
          {selectedProject && (
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-3">
                <div className="aspect-[4/3] w-full bg-black/5">
                  {activeMedia?.type === 'video' ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      autoPlay
                      preload="metadata"
                      poster={activeMedia.poster}
                    >
                      <source src={activeMedia.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={activeMedia?.src}
                      alt={activeMedia?.alt || selectedProject.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="flex gap-2 overflow-x-auto border-t border-border/60 bg-background p-3">
                  {selectedProject.media.map((media, mediaIndex) => (
                    <button
                      key={mediaIndex}
                      type="button"
                      onClick={() => setActiveMediaIndex(mediaIndex)}
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition ${activeMediaIndex === mediaIndex ? 'border-primary ring-2 ring-primary/30' : 'border-border/60'}`}
                    >
                      {media.type === 'video' ? (
                        <>
                          <img
                            src={media.poster}
                            alt={media.alt || selectedProject.title}
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-xs font-semibold text-white">
                            VIDEO
                          </span>
                        </>
                      ) : (
                        <img
                          src={media.src}
                          alt={media.alt || selectedProject.title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/60 p-6 md:col-span-2 md:border-l md:border-t-0">
                <DialogTitle className="heading-font text-2xl text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="mt-3 text-base leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
                <p className="mt-5 text-sm uppercase tracking-[0.12em] text-primary/80">
                  {selectedProject.media.length} medias disponibles
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cliquez sur les vignettes pour parcourir les photos et vidéos du projet.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="bg-background px-4 py-14 sm:py-16">
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
