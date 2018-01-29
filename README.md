# [cookoon.fr](https://cookoon.fr/)

Built with [Gatsby JS](https://www.gatsbyjs.org/)

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
          name: 'twitter:image:src',
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
