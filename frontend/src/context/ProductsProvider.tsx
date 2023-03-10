import { useEffect, useState, ReactNode } from "react";
import { ProductsContext } from "./ProductsContext";
import ProductsService from '../services/Products/ProductsService'
import { Product } from "../types/types";


interface Props {
  children: ReactNode
}

export const ProductProvider = ({ children }: Props) => {
  const [skip, setSkip] = useState(0);
	const [isEnd, setIsEnd] = useState(false);
  const [products, setProducts] = useState<Array<Product>>([])
  const [pageType, setPageType] = useState("login");


  const getAllProducts = () => {
    ProductsService.getData1(`/products?skip=${skip}`)
      .then(({data}) => {
        if(data.length < 6) setIsEnd(true)
        setProducts(products.concat(data))
      })
  }

  useEffect(() => {
    getAllProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip])
  
  return (
    <ProductsContext.Provider value={{ setSkip, setIsEnd, setPageType, isEnd, skip, products, pageType}}>
      {children}
    </ProductsContext.Provider>
  )
}