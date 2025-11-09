import { create } from 'zustand';// allow for the transfer of these functions between the typescript files 
import { dishes } from './theDishArray';// these are the items which are

export type DishEntries = { // The kinds of the information that can fill the array elements
  id: string;
  dishName: string;
  courseName: string;
  description: string;
  price: number;
  image: any;
};

type DishStore = {
  entries: DishEntries[];//the package for the entries 
  addDishes: (entry: DishEntries) => void; // sub function being set to an empty state
  removeDishes: (id: string) => void; // sub function being set to an empt
  getByCourse: (courseName: string) => void; // setting the filtering empty filtering
};

export const useDishStore = create<DishStore>((set, get) => ({
  entries: dishes,
   addDishes:(entry) => {
    const alreadyExists = dishes.some((dish) => dish.dishName === entry.dishName);/**This will check the array for items for item with the same attributes */
    const updated = alreadyExists ? dishes : [...dishes, entry];/**Reset the the array back to its original form  */
    return {entries:updated}/**Will return the new array */

  
  },

  removeDishes: (id) =>
    set((state) => ({ // will find the item with id and delete all other attributes with id attribute
      entries: state.entries.filter((dish) => dish.id !== id),
    })),

  getTotal: () => {
    const { entries } = get(); // This will add the prices of the selection
    return entries.reduce((acc, dish) => acc + dish.price, 0);
  },
  getByCourse: (course: string) => { // this will filter the dishes based on the course name
  const { entries } = get();
  return entries.filter((dish) => dish.courseName === course);
}
}));