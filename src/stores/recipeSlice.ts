import type { StateCreator } from "zustand"
import { getCategories, getDrinks, getRecipe } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal: boolean,
    fetchCategories: () => Promise<void>
    searchDrinks: (searchFilters: SearchFilter) => Promise<void>
    searchRecipe: (idDrink: Drink['idDrink']) => void
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
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
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
        })

        setTimeout(() => {
            set({
                selectedRecipe: {} as Recipe
            })
        }, 300);
    }
})