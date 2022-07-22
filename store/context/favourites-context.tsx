import {createContext, useState} from "react";

export const FavouritesContext = createContext({
  meal_ids: [] as string[],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

function FavouritesContextProvider({children} : {children: any}) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([] as string[]);

  function addFavourite(id: string) {
    setFavouriteMealIds((currentFavIds: typeof favouriteMealIds) => [...currentFavIds, id])
  }

  function removeFavourite(id: string) {
    setFavouriteMealIds((currentFavIds: typeof favouriteMealIds) =>
      currentFavIds.filter(mealId => mealId !== id))
  }

  const value = {
    meal_ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  }

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider;