import { Item } from "./item.model";

export interface UserItems {
  userId: number;
  itemsList: Item[]
}
