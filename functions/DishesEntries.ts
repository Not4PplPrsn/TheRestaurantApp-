import {create} from 'zustand'
   export type DishEntries = {
    id: string;
    dishName: string;
    courseName: string;
    description: string;
    price: number;
    image : any;
     
 }

 type DishStore = {
    entries:DishEntries[];
    addDishes: (entry: DishEntries) => void;
    removeDishes: (id : string) => void;
 }

 export const newDishes = create<DishStore>