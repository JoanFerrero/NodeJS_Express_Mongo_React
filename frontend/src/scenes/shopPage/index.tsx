import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import { setProducts } from "../../redux/slice/auth";
import {  getData1 } from '../../services/Login';
import ProductCard from "../../components/ProductCard";

type Props = {}

const ShopPage = (props: Props) => {

  const dispatch = useCustomDispatch();
  const { auth } = useCustomSelector((state) => state);
  const mode = auth.mode


  const getProducts = async () => {
    const response = getData1("/products");
    const data = await (await response).data

    dispatch(setProducts({ data: data }));
  };

  useEffect(() => {
      getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`bg-${mode} dark:bg-black`}>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default ShopPage