import type { StateCreator } from "zustand"
import { getCategories, getDrinks, getRecipe } from "../services/RecipeService"
import type { Categories, Drink, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>
    searchDrinks: (searchFilters: SearchFilter) => Promise<void>
    searchRecipe: (idDrink: Drink['idDrink']) => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set, get, api) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories();
        set({
            categories
        })
    },
    searchDrinks: async (filters) => {
        const drinks = await getDrinks(filters);
        set({
            drinks
        })
    },
    searchRecipe: async (idDrink) => {
        const selectedRecipe = await getRecipe(idDrink);
    }
})