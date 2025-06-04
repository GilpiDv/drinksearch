# DrinkSearch

A modern React + TypeScript application for searching and managing cocktail recipes, built with Vite, Zustand, TailwindCSS, and Zod.

## Features

- **Search Recipes:** Find drink recipes by ingredient and category.
- **Favorites:** Save and manage your favorite drinks.
- **Recipe Details:** View detailed instructions and ingredients in a modal.
- **Persistent Favorites:** Favorites are stored in localStorage.
- **Responsive UI:** Styled with TailwindCSS for a clean, responsive design.
- **Notifications:** User feedback for actions and errors.
- **Type Safety:** Uses Zod for API response validation and TypeScript throughout.
- **State Management:** Powered by Zustand with modular slices.

## Project Structure

```
src/
  components/      # UI components (DrinkCard, Header, Modal, Notification)
  layouts/         # Layout wrapper
  services/        # API service (RecipeService)
  stores/          # Zustand slices (recipes, favorites, notifications)
  types/           # TypeScript types (from Zod schemas)
  utils/           # Zod schemas for API validation
  views/           # Page components (IndexPage, FavoritesPage)
  main.tsx         # App entry point
  router.tsx       # React Router setup
  index.css        # TailwindCSS import
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Configuration

- **API:** Uses [TheCocktailDB](https://www.thecocktaildb.com/api.php) for fetching recipes.
- **State:** See [`src/stores/useAppStore.ts`](src/stores/useAppStore.ts) for combined Zustand store.
- **Type Validation:** See [`src/utils/recipes-schema.ts`](src/utils/recipes-schema.ts) for Zod schemas.

## License

MIT