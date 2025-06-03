import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { type FavoritesSliceTypes, createFavoritesSlice } from "./favoritesSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceTypes>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})))