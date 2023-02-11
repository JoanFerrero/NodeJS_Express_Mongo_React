import { useContext } from "react";
import { useCustomSelector } from "../../hooks/redux";
import ProductCard from "../../components/ProductCard";
import { ProductsContext } from '../../context/ProductsContext'
import { ProductContextType, Product } from "../../types/types";

const ShopPage = () => {

  const { auth } = useCustomSelector((state) => state);
  const mode = auth.mode
  const classButton = mode === "light" ? "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
    : "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"


  const { isEnd, setSkip, skip, products } = useContext(ProductsContext) as ProductContextType;

  return (
    <div className={`bg-${mode} dark:bg-black`}>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map(
          ({
            Name,
            description,
            picturePath,
            price,
            _id,
          }: Product) => (
            <ProductCard name={Name} description={description} picturePath={picturePath} price={price} _id={_id}/>
          ))}
        </div>
      </div>
      <div className="mt-1 grid justify-items-center ">
        {isEnd ? <button className={`${classButton}`}>All Seen</button>: <button className={`${classButton}`} onClick={() => setSkip(skip + 6)}>View more</button>}
      </div>
    </div>
  )
}

export default ShopPage