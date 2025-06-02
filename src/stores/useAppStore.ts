import { create } from "zustand";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))