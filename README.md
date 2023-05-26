# Podcaster
Bienvenido a la aplicación **Podcaster**, donde podrás descubrir y oír los 100 podcasts más famosos de ITunes de los últimos días.

### Funciones
- Buscador por nombre del podcast o autor.
- Detalles e información de cada podcast.
- Reproductor de audio.

### Tecnologías usadas
Esta aplicación está desarrollada con React, Vite, TypeScript, Sass y Vitest. Además, las librerías React-Router, testing-library/React, react-redux, redux-toolkit y axios.

### Estructura del proyecto
La esctructura del proyecto es la siguiente:

```
├── src
│   ├── assets
│   ├── components
│   │   ├── card
│   │   ├── header
│   │   ├── itemList
│   │   ├── podcastInfo
│   │   └── searchBar
│   ├── hooks
│   ├── models
│   ├── pages
│   │   ├── episode
│   │   ├── home
│   │   └── podcast
│   ├── redux
│   │   └── states
│   ├── services
│   ├── types  
│   ├── utils
└── package.json
```

### Cómo ejecutarlo
Este proyecto usa _pnpm_ en lugar del tradicional _npm_, ya que _pnpm_ ofrece una serie de mejoras en el rendimiento y funcionamiento que lo hacen preferible.

Para ejecutar el servidor de desarrollo:
> `pnpm run dev`

Para lanzar los test:
> `pnpm run test`

Para generar el código de produccion:
> `pnpm run build`

Si _pnpm_ no está intalado, se puede usar _npm_ en su lugar sin problemas.

