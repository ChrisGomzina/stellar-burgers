export type TIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
  uuidv4?: string;
};

export type TAddedIngredient = {
  readonly id: string;
  readonly type: string;
};

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type TAllOrders = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
};

export type TUserOrders = Omit<TAllOrders, 'total' | 'totalToday'>;

export type TUser = {
  readonly email: string;
  readonly name?: string;
  readonly password?: string;
};

export type TWsOrdersActions = {
  wsInit: string;
  wsFailed: string;
  onOpen: string;
  onMessage: string;
  onClose: string;
  onError: string;
  wsDisconnect: string;
};

export type TIngredientProps = {
  data: TIngredient;
};

