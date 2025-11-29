export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export enum PageRoute {
  HOME = '/',
  PRODUCTS = '/products',
  PRODUCT_DETAIL = '/product/:id',
  SELL = '/sell',
  LOGIN = '/login',
  REGISTER = '/register',
  ABOUT = '/about',
  PRIVACY = '/privacy',
  TERMS = '/terms',
}