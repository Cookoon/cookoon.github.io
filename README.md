# [cookoon.fr](https://cookoon.fr/)

Built with [Gatsby JS](https://www.gatsbyjs.org/)

## Instructions

### Contexte

Le site [`cookoon.fr`](https://cookoon.fr/) est hébergé sur GitHub Pages, depuis le repository [`cookoon.github.io`](https://github.com/Cookoon/cookoon.github.io).

La branche `gatsby` héberge le code source, la branche `master` héberge le site statique compilé par Gatsby.

Toutes les commandes sont à exécuter depuis la racine du répertoire (emplacement de ce fichier `README.md`).

### Récupérer la dernière version du code

1.  revenir sur la branche `gatsby`
    `git checkout gatsby`

2.  récupérer la dernière version du code
    `git pull origin gatsby`

### Démarrer le serveur / site de développement

`yarn develop`

Le site est disponible à l'adresse [`http://localhost:8000`](http://localhost:8000)

### Apporter une modification au site

#### 1. Se mettre sur une nouvelle branche

ex. branche `new-landing-page` :

`git checkout -b new-landing-page`

#### 2. Ouvrir Atom

`atom .`

#### 3. Apporter les modifications

#### 4. Faire un `commit` (possibilité de répéter cette étape plusieurs fois)

1.  vérifier toutes les modifications
    `git status` permet de voir tous les fichiers modifiés
    `git diff` permet de voir le détail des modifications, par fichier

2.  ajouter tous les fichiers modifiés dans git
    `git add .`

3.  faire le commit avec un message explicite, ex. `ajout d'une landing page`
    `git commit -m "ajout d'une landing page"`

#### 5. Vérifier que le statut Git est OK avant de faire une "Pull Request"

`git status` doit être vierge : `nothing to commit, working tree clean`

Si le statut n'est pas vierge, on peut visualiser les modifications depuis le dernier commit :
`git diff`

Il faut alors faire un nouveau commit si l'on veut conserver ces modifications.

#### 6. Faire une "Pull Request"

1.  pousser le code sur GitHub
    `git push origin new-landing-page`

2.  créer la PR dans GitHub
    ouvrir [le repo sur GitHub](https://github.com/Cookoon/cookoon.github.io) :
    `hub browse`

    dans le repo, un bandeau apparaît avec la branche que l'on vient de pousser, qui propose de créer une PR. Créer la PR, en pensant bien à **demander à merger sur la branche `gatsby` !** Dans certains cas, la PR est prédéfinie pour merger sur `master`, ce qui n'est pas correct dans notre configuration.

#### 7. Demander une révision de la PR et son déploiement

## Meta

Metas are defined globally, but you can specify different ones on a page with **Helmet**:

```jsx
// /src/pages/example.js
import React from 'react';
import Helmet from 'react-helmet';

const ExamplePage = () => (
  <div>
    <Helmet
      title="Specific title"
      meta={[
        { name: 'description', content: 'Specific description' },
        { name: 'keywords', content: 'specific, keywords' },
        { property: 'og:url', content: 'Specific OpenGraph url' },
        { property: 'og:title', content: 'Specific OpenGraph title' },
        {
          property: 'og:description',
          content: 'Specific OpenGraph description'
        },
        {
          property: 'og:image',
          content: 'https://specific.open.graph/image_url.jpg'
        },
        { name: 'twitter:title', content: 'Specific Twitter title' },
        {
          name: 'twitter:description',
          content: 'Specific Twitter description'
        },
        {
          name: 'twitter:image',
          content: 'https://specific.open.graph/image_url.jpg'
        }
      ]}
    />
    <h1>Example Page</h1>
    ...
  </div>
);

export default ExamplePage;
```
