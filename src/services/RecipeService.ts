import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import type { Drink, SearchFilter } from "../types";

export async function getCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);

    if(result.success) {
        return result.data;
    }
}

export async function getDrinks(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
    const { data } = await axios(url);
    const result = DrinksAPIResponseSchema.safeParse(data);

    if(result.success) {
        return result.data;
    }
}

export async function getRecipe(idDrink : Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    const { data } = await axios(url);
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);

    if(result.success) {
        return result.data;
    }
}