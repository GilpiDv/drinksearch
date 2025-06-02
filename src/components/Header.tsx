import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    });

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    const { fetchCategories, categories } = useAppStore();

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    return (
        <header className={isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logo" />
                    </div>

                    <nav className="flex gap-4">
                        <NavLink 
                            to='/' 
                            className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-white font-bold"}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/favorites' 
                            className={({ isActive }) => isActive ? "text-orange-500 font-bold" : "text-white font-bold"}
                        >
                            Favorites
                        </NavLink>
                    </nav>
                </div>

                {isHome && (
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
                )}

            </div>
        </header>
    )
}
