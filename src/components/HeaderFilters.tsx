import { useState, type ChangeEvent } from "react";
import type { Categories } from "../types";

type HeaderFiltersProps = {
    categories: Categories
}

export default function HeaderFilters({categories} : HeaderFiltersProps) {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
                <label 
                    htmlFor="ingredient"
                    className="block text-white uppercase font-extrabold text-lg"
                >
                    Name or Ingredients
                </label>
                <input 
                    type="text" 
                    name="ingredient" 
                    id="ingredient" 
                    className="p-3 w-full rounded-lg focus:outline-none bg-white"
                    placeholder="Name or Ingredient. e.g. Vodka, Tequila, Coffee..."
                    value={searchFilters.ingredient}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-4">
                <label 
                    htmlFor="category"
                    className="block text-white uppercase font-extrabold text-lg"
                >
                    Catregory
                </label>
                <select 
                    name="category" 
                    id="category" 
                    className="p-3 w-full rounded-lg focus:outline-none bg-white"
                    value={searchFilters.category}
                    onChange={handleChange}
                >
                    <option value="">Select...</option>
                    {categories.drinks.map(category => (
                        <option 
                            key={category.strCategory}
                            value={category.strCategory}
                        >
                            {category.strCategory}
                        </option>
                    ))}
                </select>
            </div>

            <input 
                type="submit"
                value={'Search recipes'} 
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />

        </form>
    )
}
