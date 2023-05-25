export type TCategories =
  | "rolls"
  | "sushi"
  | "sets"
  | "bowls"
  | "drinks"
  | "sauces";

export interface IUser {
  id: string;
  username: string;
  email: string;
  phone: string;
  cartItems: Array<{
    id: string;
    quantity: number;
  }>;
  favourites: Array<IDish>;
  addresses: Array<string>;
  history: Array<IOrder>;
}

export interface IDish {
  _id: string;
  category: TCategories;
  name: string;
  weight: number;
  price: number;
  ingredients: Array<String>;
  specs: Array<String>;
  type: Array<String>;
}

export interface IProduct {
  id: string;
  name: string;
  photo: string;
}

export interface IOrder {
  _id: string;
  adress: string;
  username: string;
  payment?: string;
  details?: Array<string>;
  dishes: any;
  createdAt: string;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
  phone: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IDishStore {
  dishes: Array<IDish>;
  cartDishes: Array<IDish>;
}

export interface ICartItems {
  id: string;
  quantity: number;
}

export interface IOrderStore {
  orders: Array<IOrder>;
}
