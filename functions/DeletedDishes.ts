// this is where the deleted items will be stored 
import { DishEntries } from "./DishesEntries";


//stored the exportable type in  a new type container
type Dish = DishEntries;

export const Trash: Dish[] = [];