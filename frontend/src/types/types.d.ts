export interface ProductContextType {
  setSkip:(value: number) => void
  setPageType: (value: string) => void
  pageType: tring
  skip: number
  isEnd: boolean
  products: Array<Product>
}

export interface Product {
  Name: string;
  createdAt: string;
  description: string;
  picturePath: string;
  price: number;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface TrolleyContextType {
  setRemoveprod:(value: String) => void
  endShop:() => void
}
