import { create } from 'zustand';// allow for the transfer of these functions between the typescript files 
import { dishes } from './theDishArray';// these are the items which are
import { Trash } from './DeletedDishes';
 import { Cart } from './Cart';
 import { CourseType } from '@/app/(tabs)/Select';
 

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
  getByCourse: (courseName: CourseType) => DishEntries[]; // setting the filtering empty filtering
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



getByCourse: (courseName) => {
  const { entries } = get();


  // Normalize accented and inconsistent course names
  const normalized = courseName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return entries.filter(
    (dish) =>
      dish.courseName.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === normalized &&
      !dish.isDeleted
  );
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


type CartItems={
   id: number;
  dishName: string;
  courseName: string;
  description: string;
  price: number;
  image: any;
  isDeleted: boolean;
  quantity: number;
}

type CartStore = {
 cart: CartItems[];
 addToCart: (entry: CartItems)=> void;
 removeFromCart: (id: number) => void;
 clearCart: () => void
 getTotal: (price: number) => void;


}




export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (dish) => {
    const existing = get().cart.find((item) => item.id === dish.id);
    if (existing) {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }));
    } else {
      set((state) => ({
        cart: [...state.cart, { ...dish, quantity: 1 }],
      }));
    }
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },

  clearCart: () => set({ cart: [] }),

    getTotal: () => {
    const { cart } = get(); // This will add the prices of the selection
    return cart.reduce((acc, item) => acc + item.price, 0);
  },

}));