# Guide de modification du site

## 1. Les fichiers les plus importants

Tu n'as presque jamais besoin de toucher à tout le projet.

Les fichiers utiles sont surtout ceux-ci :

- `apps/web/src/pages/HomePage.jsx` : page d'accueil
- `apps/web/src/pages/ProcessPage.jsx` : page "Mon processus créatif"
- `apps/web/src/pages/AboutPage.jsx` : page "À propos"
- `apps/web/src/pages/PortfolioPage.jsx` : page portfolio avec les projets, images et vidéos
- `apps/web/src/pages/ContactPage.jsx` : page contact
- `apps/web/src/components/Header.jsx` : menu du haut
- `apps/web/src/components/Footer.jsx` : bas de page
- `apps/web/src/lib/site.js` : email et lien LinkedIn

## 2. Comment repérer les zones à modifier

Dans les fichiers, cherche les commentaires qui commencent par :

- `[MODIF ...]`

Exemples :

- `[MODIF PORTFOLIO - PREMIÈRE LISTE DE PROJETS]`
- `[MODIF CONTACT - COORDONNÉES]`
- `[MODIF ACCUEIL - IMAGE DE FOND]`

Ces commentaires indiquent exactement où modifier le contenu.

## 3. Les règles de base pour éviter les erreurs

Quand tu modifies un fichier `.jsx`, fais attention à ces 5 choses :

1. Garde les virgules `,` quand tu dupliques un bloc.
2. Garde les accolades `{}` et crochets `[]` comme ils sont.
3. Ne change pas les mots techniques comme `className`, `return`, `const`, `import`.
4. Modifie surtout le texte entre guillemets `" ... "` ou `' ... '`.
5. Si tu dupliques un projet, copie un bloc complet du début à la fin.

## 4. Modifier un texte simple

Exemple : changer un titre.

1. Ouvre le bon fichier, par exemple `HomePage.jsx`.
2. Cherche un commentaire `[MODIF ...]`.
3. Remplace uniquement le texte visible.

Exemple :

Avant :

```jsx
{/* [MODIF ACCUEIL - TITRE PRINCIPAL] Change ce texte pour modifier le grand titre. */}
<h1>
  Hansi Moeslé Design
</h1>
```

Après :

```jsx
<h1>
  Mon nouveau titre
</h1>
```

## 5. Changer une image

Dans beaucoup de pages, les images sont définies avec `src="..."`.

Exemple :

```jsx
<img src="https://..." alt="Description" />
```

Pour changer l'image :

1. Remplace le lien dans `src`.
2. Change aussi le texte `alt` pour décrire l'image.

Exemple :

```jsx
<img
  src="https://monsite.com/mon-image.jpg"
  alt="Meuble sur mesure dans un salon"
/>
```

## 6. Ajouter une carte de projet dans le portfolio

Le fichier principal est :

- `apps/web/src/pages/PortfolioPage.jsx`

Cherche :

- `[MODIF PORTFOLIO - PREMIÈRE LISTE DE PROJETS]`
- `[MODIF PORTFOLIO - DEUXIÈME LISTE DE PROJETS]`

Chaque projet ressemble à ça :

```jsx
{
  title: 'Bibliothèque sur mesure',
  description: 'Description du projet.',
  media: [
    {
      type: 'image',
      src: 'https://...jpg',
      alt: 'Description image'
    }
  ]
}
```

### Pour ajouter un nouveau projet

1. Copie un projet complet existant.
2. Colle-le juste en dessous dans la même liste.
3. Change :
   - `title`
   - `description`
   - les éléments dans `media`
4. Vérifie qu'il y a bien une virgule entre les projets.

### Exemple complet

```jsx
{
  title: 'Console d'entrée sur mesure',
  description: 'Meuble pensé pour structurer l'entrée avec du rangement discret.',
  media: [
    {
      type: 'image',
      src: 'https://monsite.com/console-1.jpg',
      alt: 'Console d entree en bois clair'
    },
    {
      type: 'image',
      src: 'https://monsite.com/console-2.jpg',
      alt: 'Detail du rangement de la console'
    }
  ]
}
```

## 7. Ajouter plusieurs images à un projet

Dans un projet, les images sont rangées dans `media: [ ... ]`.

Tu peux ajouter autant d'images que tu veux.

Exemple :

```jsx
media: [
  {
    type: 'image',
    src: 'https://monsite.com/photo-1.jpg',
    alt: 'Vue d ensemble'
  },
  {
    type: 'image',
    src: 'https://monsite.com/photo-2.jpg',
    alt: 'Detail du meuble'
  },
  {
    type: 'image',
    src: 'https://monsite.com/photo-3.jpg',
    alt: 'Meuble installe chez le client'
  }
]
```

La première image de la liste est généralement celle utilisée comme image principale de la carte.

## 8. Ajouter une vidéo à un projet

Pour une vidéo, il faut un bloc comme celui-ci :

```jsx
{
  type: 'video',
  src: 'https://monsite.com/ma-video.mp4',
  poster: 'https://monsite.com/apercu-video.jpg',
  alt: 'Presentation video du projet'
}
```

### Signification

- `type: 'video'` : indique que c'est une vidéo
- `src` : lien du fichier vidéo
- `poster` : image fixe affichée avant lecture
- `alt` : description courte

### Important

Si tu ajoutes une vidéo, mets toujours un `poster`.
Sinon l'aperçu peut être vide ou moins propre.

## 9. Modifier l'email et LinkedIn

Ouvre :

- `apps/web/src/lib/site.js`

Tu verras ceci :

```js
export const SITE_CONTACT = {
  email: '...',
  linkedinUrl: '...',
  linkedinLabel: '...'
};
```

Tu peux modifier :

- `email`
- `linkedinUrl`
- `linkedinLabel`

## 10. Modifier le menu du haut

Ouvre :

- `apps/web/src/components/Header.jsx`

Dans ce fichier, la navigation est dans `navLinks`.

Exemple :

```jsx
const navLinks = [
  { path: '/', label: 'Hansi Moeslé Design' },
  { path: '/portfolio', label: 'Portfolio' }
];
```

Tu peux surtout modifier les `label` pour changer les textes du menu.

## 11. Modifier le bas de page

Ouvre :

- `apps/web/src/components/Footer.jsx`

Tu peux y modifier :

- le logo
- la phrase de présentation
- le texte de localisation
- les infos de contact visibles

## 12. Dans quel fichier aller selon ce que tu veux changer

### Je veux changer la page d'accueil

Va dans : `apps/web/src/pages/HomePage.jsx`

### Je veux changer les étapes du processus

Va dans : `apps/web/src/pages/ProcessPage.jsx`

### Je veux changer le texte à propos

Va dans : `apps/web/src/pages/AboutPage.jsx`

### Je veux ajouter un projet, une image ou une vidéo

Va dans : `apps/web/src/pages/PortfolioPage.jsx`

### Je veux changer l'email ou LinkedIn

Va dans : `apps/web/src/lib/site.js`

### Je veux changer le menu du haut

Va dans : `apps/web/src/components/Header.jsx`

### Je veux changer le bas de page

Va dans : `apps/web/src/components/Footer.jsx`

## 13. Méthode la plus simple pour travailler sans se perdre

Utilise toujours cette méthode :

1. Ouvre le fichier concerné.
2. Cherche `[MODIF`.
3. Modifie seulement ce qui est demandé par le commentaire.
4. Enregistre.
5. Vérifie le rendu du site.

## 14. Si tu veux juste faire l'essentiel

Si tu ne veux retenir que le minimum :

- textes accueil : `HomePage.jsx`
- textes processus : `ProcessPage.jsx`
- textes à propos : `AboutPage.jsx`
- projets, images, vidéos : `PortfolioPage.jsx`
- contact : `ContactPage.jsx`
- email + LinkedIn : `site.js`
- menu : `Header.jsx`
- footer : `Footer.jsx`

## 15. Erreurs fréquentes

### J'ai supprimé une virgule

Le site peut casser si une virgule manque entre deux objets.

### J'ai supprimé une accolade ou un crochet

Les symboles `{`, `}`, `[`, `]` doivent rester équilibrés.

### J'ai modifié autre chose qu'un texte ou une URL

Si possible, limite-toi à :

- textes
- liens d'image
- liens vidéo
- email
- libellés du menu

## 16. Astuce pour ne pas avoir peur de casser

Avant une grosse modification :

1. copie le bloc d'origine dans un coin
2. modifie ensuite la copie
3. compare le résultat

Sur le portfolio, c'est la meilleure méthode pour ajouter des projets sans risque.

## 17. Résumé ultra court

Pour une personne non développeuse, le plus simple est :

1. ouvrir le bon fichier de page
2. chercher `[MODIF]`
3. changer le texte ou l'URL
4. enregistrer

Pour le portfolio, il faut surtout savoir dupliquer un bloc projet existant.