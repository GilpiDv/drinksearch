import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}
export default function DrinkCard({drink} : DrinkCardProps) {
  return (
    <div className="shadow-lg">
        <div className="overflow-hidden">
            <img 
                src={drink.strDrinkThumb} 
                alt={`${drink.strDrink} image`} 
                className="hover:scale-110 transition-transform hover:rotate-3"
            />
        </div>
        <div className="p-5">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button
                type="button"
                className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg rounded-md"            
            >
                View Recipe
            </button>
        </div>
    </div>
  )
}
