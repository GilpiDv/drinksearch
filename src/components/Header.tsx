import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore";
import HeaderFilters from "./HeaderFilters";

export default function Header() {
    const { pathname } = useLocation();
    const isHome = useMemo(() => pathname === '/', [pathname]);
    const { fetchCategories, categories } = useAppStore();

    useEffect(() => {
        fetchCategories();
    }, []);

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
                    <HeaderFilters
                        categories={categories}
                    />
                )}

            </div>
        </header>
    )
}
