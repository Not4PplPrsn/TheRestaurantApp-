import { create } from 'zustand';// allow for the transfer of these functions between the typescript files 
import { dishes } from './theDishArray';// these are the items which are
import { Trash } from './DeletedDishes';

export type DishEntries = { // The kinds of the information that can fill the array elements
  id: number;
  dishName: string;
  courseName: string;
  description: string;
  price: number;
  image: any;
  isDeleted: boolean;
};

type DishStore = {
  
  bin: DishEntries[];
  entries: DishEntries[];//the package for the entries 
  addDishes: (entry: DishEntries) => void; // sub function being set to an empty state
  removeDishes: (id: number) => void; // sub function being set to an empt
  getByCourse: (courseName: string) => void; // setting the filtering empty filtering
};

export const useDishStore = create<DishStore>((set, get) => ({
  entries: dishes,
  bin: Trash,
  addDishes: (entry) => {
    const currentEntries = get().entries;//retrieve current entries 
    const alreadyExists = currentEntries.some(
      (dish) => dish.dishName === entry.dishName
    );

    if (alreadyExists) return;

    const newEntry = { ...entry, isDeleted: false };

    const updated = [newEntry, ...currentEntries];

    const reordered = updated.map((dish, index) => ({
      ...dish,
      id: index + 1,//this reorders the array such that all items that are added come first and allows the user to add new item if it does ont exist
    }));

    set({ entries: reordered });
  },


removeDishes: (id) =>
  set((state) => {
    const dishToDelete = state.entries.find((dish) => dish.id === id);
    if (!dishToDelete) return state;

    const updatedDish = { ...dishToDelete, isDeleted: true };

    return {
      entries: state.entries.filter((dish) => dish.id !== id),
      bin: [...state.bin ?? [], updatedDish],
    };
  }), 
  
  getTotal: () => {
    const { entries } = get(); // This will add the prices of the selection
    return entries.reduce((acc, dish) => acc + dish.price, 0);
  },



  getByCourse: (course: string) => { // this will filter the dishes based on the course name
  const { entries } = get();
  return entries.filter((dish) => dish.courseName === course);/**Will Filter based upon the course */
},

restoreDish: (id: number) => {
  const { bin, entries } = get();// retrieves the items from the Trash array 

  const dishToRestore = bin.find((dish) => dish.id === id); //locates the item from the bin array using id
  if (!dishToRestore) return;

  const restoredDish = { ...dishToRestore, isDeleted: false };// changes the the deleted marker to not deleted 

  const updatedEntries = [restoredDish, ...entries];
  const reorderedEntries = updatedEntries.map((dish, index) => ({
    ...dish,
    id: index + 1,
  })); // adds the items back into the array but att the top of the list

  const updatedBin = bin.filter((dish) => dish.id !== id); // updates the bin and removes the item 

  set({
    entries: reorderedEntries,
    bin: updatedBin, 
    /**updates the dish and bin array to their new form */
  });
},



}));