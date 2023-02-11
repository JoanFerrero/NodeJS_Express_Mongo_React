import { useEffect, useState, ReactNode } from "react";
import { ProductsContext } from "./ProductsContext";
import ProductsService from '../services/Products/ProductsService'


interface Props {
  children: ReactNode
}

export const PokemonProvider = ({ children }: Props) => {
  const [offset, setOffset] = useState(0);

  const getAllProducts = (limit = 9) => {
    ProductsService.getData1('/products?skip=1')
      .then(({data}) => {
        console.log(data)
      })
  }

  useEffect(() => {
    getAllProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])
  
  return (
    <ProductsContext.Provider value={{ getAllProducts}}>
      {children}
    </ProductsContext.Provider>
  )
}