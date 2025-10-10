# Pokédex Challenge - Next.js App Router PWA

Este proyecto es una Pokédex construida con **Next.js App Router**, enfocada en buenas prácticas, rendimiento y experiencia de usuario moderna.

---

## Tecnologías y patrones utilizados

- **Next.js App Router**  
  Aprovecha las ventajas de layouts anidados, manejo centralizado de errores (`error.js`), y páginas not-found (`not-found.js`), facilitando una arquitectura escalable y mantenible.

- **Server Components y Client Components**  
  Se implementó un **Server Component** para la carga inicial de la página, optimizando el rendimiento y el SEO.  
  Para la recarga dinámica de los Pokémon (scroll infinito, interacciones), se utilizan **Client Components**, permitiendo una experiencia interactiva y fluida.

- **Suspense y Lazy Loading**  
  El componente principal `Card` utiliza `React.lazy` y `Suspense` para cargar tarjetas bajo demanda, mejorando la experiencia de usuario y el rendimiento inicial.

- **Scroll infinito con react-intersection-observer**  
  Se implementó el paquete [`react-intersection-observer`](https://www.npmjs.com/package/react-intersection-observer) para detectar cuándo el usuario llega al final de la lista y cargar más Pokémon automáticamente, logrando un scroll infinito eficiente.

- **PWA (Progressive Web App)**  
  La app es una PWA:  
  - Se cachean los GIF animados de Pokémon (`/sprites/ani/`) mediante un service worker.
  - **Ventajas principales:**
    - **Carga más rápida:** Los GIF ya vistos se cargan desde el cache local.
    - **Menor consumo de datos:** No se vuelven a descargar los GIF cacheados.
    - **Funciona offline:** Los GIF cacheados siguen mostrándose sin conexión.
    - **Menos carga en el servidor externo:** Reduce las peticiones a Pokémon Showdown.

- **Optimización de lógica y renderizado**
  - Uso de `useMemo` para filtros eficientes.
  - Uso de `useCallback` en hooks personalizados para evitar renders innecesarios.

- **Buenas prácticas de código**
  - Estricto control de calidad con reglas ESLint y Prettier (ver fragmento de configuración abajo).
  - Separación de lógica y vista usando el patrón contenedor.
  - Uso de React Context para almacenar los Pokémon vistos.
  - Persistencia de estado con Local Storage.
  - Manejo de lógica compleja con `useReducer`.

- **Testing**
  - Testing unitario con **React Testing Library** y **Vitest**.
  - Ejemplo: tests para el componente `Card` y el hook `use-card-toogle`.

- **Oportunidades de mejora**
  - agregar tests end-to-end y ampliar la cobertura de hooks/componentes.
  - Añadir un Dockerfile para despliegue y desarrollo consistente.

- **Tailwind Variants**
  - Uso de `tailwind-variants` para crear componentes reutilizables y variantes, como el componente compartido `Badge`.

---

## Ejemplo de configuración ESLint/Prettier

```json
{
  "extends": [
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "prettier",
    "unused-imports"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "semi": false,
        "tabWidth": 2,
        "singleQuote": true,
        "printWidth": 80,
        "endOfLine": "auto",
        "arrowParens": "always",
        "plugins": ["prettier-plugin-tailwindcss"]
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "no-duplicate-imports": "error",
    "prefer-const": "error",
    "camelcase": "error",
    "no-console": "error",
    "complexity": ["error", 10],
    "eqeqeq": ["error", "always"],
    "max-lines": ["error", 300],
    "max-depth": ["error", 4],
    "max-params": ["error", 4],
    "max-lines-per-function": ["error", 70],
    "react/jsx-key": "error",
    "react/self-closing-comp": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/no-unknown-property": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-unused-state": "warn",
    "react/jsx-no-bind": "warn",
    "react/no-array-index-key": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }
    ]
  }
}