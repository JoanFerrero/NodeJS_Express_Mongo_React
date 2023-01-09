import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import { setProducts, setCard, setNotCard } from "../../redux/slice/auth";
import { getData, getData1 } from '../../services/Login';

type Props = {}

const ShopPage = (props: Props) => {

  const dispatch = useCustomDispatch();
  const { auth } = useCustomSelector((state) => state);
  const products = auth.products
  const mode = auth.mode
  const token = auth.token
  const id = auth.id
  const navigate = useNavigate();

  const addProd = async (idP: String) => {
    if(id) {
      dispatch(setNotCard())
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
        const request = getData(`/card/${id}/${idP}`, config)
      const data = await (await request).data
      console.log(data)
      dispatch(setCard({ data }))
    } else {
      navigate('/login')
    }
  }


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
          {products.map(
            ({
              Name,
              description,
              picturePath,
              updatedAt,
              __v,
              _id,
            }: any) => (
              <div className="card w-96 bg-base-100 shadow-xl" id={_id}>
                <figure><img src={`http://localhost:3001/assets/${picturePath}`} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title dark:text-slate-50">{Name}</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => addProd(_id)}>Add Card</button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopPage