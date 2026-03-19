
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog.jsx';
const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const portfolioProjects = [
    {
      title: 'Enfilade en noyer et chêne',
      description:
        'Conception d\'une enfilade de salon qui combine noyer foncé et chêne clair. Le projet met l\'accent sur les volumes, la finesse des pieds métalliques et une façade graphique qui structure visuellement la pièce.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1687075196974-ea71a55cc9f8',
          alt: 'Enfilade en noyer et chene dans un salon lumineux'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1643949914877-b20f30792c1e',
          alt: 'Meuble TV bas assorti au projet principal'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1699268092475-f7a45ce3fe2d',
          alt: 'Console basse en bois clair avec rangements tresses'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
          alt: 'Buffet aux motifs geometriques sur facade'
        }
      ]
    },
    {
      title: 'Bibliothèque d\'atelier et pose finale',
      description:
        'Réalisation d\'une bibliothèque murale pensée pour un espace de travail polyvalent. Le projet inclut la préparation en atelier, des ajustements sur site et une finition mate durable adaptée à un usage quotidien.',
      media: [
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1613523547236-f76d7652bacd',
          alt: 'Bibliotheque sur mesure dans un espace de travail'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
          alt: 'Detail de finition bois lors de l assemblage'
        },
        {
          type: 'video',
          src: 'https://cdn.coverr.co/videos/coverr-carpenter-at-workshop-1578/1080p.mp4',
          poster: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
          alt: 'Pose finale sur site du mobilier'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1688728981543-df24d24d0116',
          alt: 'Resultat final de la bibliotheque apres installation'
        }
      ]
    }
  ];

  const openMedia = (project, mediaIndex) => {
    setSelectedProject(project);
    setActiveMediaIndex(mediaIndex);
    setIsViewerOpen(true);
  };

  const renderMediaTile = (project, media, mediaIndex, className) => {
    return (
      <button
        key={`${project.title}-${mediaIndex}`}
        type="button"
        onClick={() => openMedia(project, mediaIndex)}
        className={`group relative overflow-hidden rounded-xl border border-border/60 bg-background text-left shadow-md transition-all duration-300 hover:shadow-xl ${className}`}
      >
        {media.type === 'video' ? (
          <>
            <video
              className="h-full w-full object-cover"
              muted
              playsInline
              preload="metadata"
              poster={media.poster}
            >
              <source src={media.src} type="video/mp4" />
            </video>
            <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-sm font-semibold tracking-wide text-white">
              VIDEO
            </span>
          </>
        ) : (
          <img
            src={media.src}
            alt={media.alt || project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
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
      <section className="relative bg-gradient-to-br from-muted to-background px-4 py-10 sm:py-14 md:py-16">
        <div className="container mx-auto max-w-4xl text-center">
          {/* [MODIF PORTFOLIO - TITRE PRINCIPAL] */}
          <h1 className="heading-font mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Portfolio
          </h1>
          {/* [MODIF PORTFOLIO - TEXTE D'INTRODUCTION] */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Découvrez ici quelques exemples de mes réalisations. Chaque projet est pensé pour 
            répondre à un besoin précis et s'intégrer harmonieusement dans son environnement.
          </p>
        </div>
      </section>

      {/* Projets */}
      <section className="px-4 py-14 sm:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-10 sm:space-y-12">
            {portfolioProjects.map((project, index) => (
              <article
                key={project.title}
                className={`rounded-2xl border border-border/70 p-2 shadow-sm sm:p-3 ${index % 2 === 1 ? 'bg-muted/40' : 'bg-background'}`}
              >
                {index === 0 ? (
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[3fr_1fr] lg:gap-3">
                    <div className="space-y-3">
                      {renderMediaTile(project, project.media[0], 0, 'aspect-[16/7] w-full')}

                      <div className="rounded-xl bg-background/85 p-3 sm:p-4">
                        <h2 className="heading-font text-2xl font-bold text-foreground sm:text-3xl">
                          {project.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {project.description}
                        </p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary/80">
                          Cliquez sur une image pour l'ouvrir en grand
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 lg:gap-3">
                      {project.media.slice(1, 4).map((media, mediaIndex) =>
                        renderMediaTile(
                          project,
                          media,
                          mediaIndex + 1,
                          'aspect-[16/9] lg:h-full lg:min-h-[100px]'
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3 lg:grid-cols-[3fr_1fr] lg:gap-3">
                    <div className="space-y-3">
                      {renderMediaTile(project, project.media[0], 0, 'aspect-[16/7] w-full')}

                      <div className="grid grid-cols-3 gap-2">
                        {project.media.slice(1, 4).map((media, mediaIndex) =>
                          renderMediaTile(
                            project,
                            media,
                            mediaIndex + 1,
                            'aspect-[16/9]'
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl bg-background/85 p-3 sm:p-4">
                      <h2 className="heading-font text-2xl font-bold text-foreground sm:text-3xl lg:text-2xl">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-sm">
                        {project.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary/80">
                        Cliquez sur une image pour l'ouvrir en grand
                      </p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={isViewerOpen}
        onOpenChange={(open) => {
          setIsViewerOpen(open);
          if (!open) {
            setSelectedProject(null);
            setActiveMediaIndex(0);
          }
        }}
      >
        <DialogContent className="w-[95vw] max-w-6xl overflow-hidden border-border/60 p-0">
          {selectedProject && (
            // [MODIF PORTFOLIO - FENÊTRE PROJET] Cette fenêtre s'ouvre quand tu cliques sur un projet.
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-3">
                <div className="aspect-[16/10] w-full bg-black/5">
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
          {/* [MODIF PORTFOLIO - BLOC FINAL] */}
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
