# cookoon.github.io

Build with [Gatsby JS](https://www.gatsbyjs.org/)

## Meta

Metas are defined globally, but you can specify different ones using Helmet:

```jsx
// /src/pages/example.js
import React from 'react';
import Helmet from 'react-helmet';

import specificOgImage from '../images/specificOgImage.jpg';

const ExamplePage = () => (
  <div>
    <Helmet
      title="Specific title"
      meta={[
        { name: 'description', content: 'Specific description' },
        { name: 'keywords', content: 'specific, keywords' },
        { name: 'og:url', content: 'Specific OpenGraph url' },
        { name: 'og:title', content: 'Specific OpenGraph title' },
        { name: 'og:description', content: 'Specific OpenGraph description' },
        { name: 'og:image', content: specificOgImage },
        { name: 'twitter:title', content: 'Specific Twitter title' },
        { name: 'twitter:description', content: 'Specific Twitter desc.' },
        { name: 'twitter:image:src', content: specificOgImage }
      ]}
    />

    <h1>Example Page</h1>
    {/* ... */}
  </div>
);

export default ExamplePage;
```
