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
public/            # Static assets (images, logo)
```

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/drink-recipes.git
   cd drink-recipes
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Technologies Used

- [React](https://react.dev/) (with React Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)

## How to use

1. Search for drinks by selecting an ingredient and category, then click "Search".
2. Click a drink to view its details in a modal.
3. Add drinks to favorites from the modal.
4. View and manage your favorites in the "Favorites" section.
5. Remove drinks from favorites as needed.

## Live Demo

[https://legendary-fox-f358a5.netlify.app/](https://legendary-fox-f358a5.netlify.app/)