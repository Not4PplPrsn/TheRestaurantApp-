import { create } from 'zustand';
import { dishes } from './theDishArray';

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
  removeDishes: (id: string) => void; // sub function being set to an empty state 
  getTotal: () => number; // total function set to an empty state
};

export const useDishStore = create<DishStore>((set, get) => ({
  entries: dishes,

  addDishes: (entry) =>
    set((state) => ({ // adds the information to the array
      entries: [...state.entries, entry],
    })),

  removeDishes: (id) =>
    set((state) => ({ // will find the item with id and delete all other attributes with id attribute
      entries: state.entries.filter((dish) => dish.id !== id),
    })),

  getTotal: () => {
    const { entries } = get(); // This will add the prices of the selection
    return entries.reduce((acc, dish) => acc + dish.price, 0);
  },
}));