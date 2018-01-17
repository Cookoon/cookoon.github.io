# cookoon.github.io

## Frontmatter

You can specify different title and description per page, by adding a frontmatter (at the top of your file):

```yaml
# example.html.erb
---
title: Specific title for this page
description: Specific description for this page
---
```

If you want to have a specific OpenGraph url and image, you can add the url key with any value, and the og_image key with the name of the image you placed in `/source/images`:

```yaml
# example.html.erb
---
title: Titre spécifique à cette page
description: Description spécifique à cette page
url: true
og_image: custom_og_image.jpg
---
```
