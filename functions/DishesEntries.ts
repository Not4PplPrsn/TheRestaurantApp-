import {create} from 'zustand'
import { dishes } from './theDishArray'; // the other array so that they can be affect by the use of dishes 


   export type DishEntries = {
    id: string;
    dishName: string;
    courseName: string;
    description: string;
    price: number;
    image : any;
     
 }

type DishStore = {
  entries: DishEntries[];
  addDishes: (entry: DishEntries) => void;
  removeDishes: (id: string) => void;
};

export const useDishStore = create<DishStore>((set) => ({
  entries: dishes, // ✅ initialize with static array
  addDishes: (entry) =>
    set((state) => ({
      entries: [...state.entries, entry],
    })),
  removeDishes: (id) =>
    set((state) => ({
      entries: state.entries.filter((dish) => dish.id !== id),
    })),
}));
