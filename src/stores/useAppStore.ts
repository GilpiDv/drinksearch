import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { type FavoritesSliceTypes, createFavoritesSlice } from "./favoritesSlice";
import { type NotificationSliceType, createNotificationSlice } from "./notificationSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceTypes & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))