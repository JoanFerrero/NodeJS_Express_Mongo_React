import { useCustomSelector, useCustomDispatch } from "../hooks/redux"
import { setCard, setNotCard } from "../redux/slice/auth";
import { getData } from '../services';
import toast, { Toaster } from 'react-hot-toast';

const ProductCard = ({Name,description,picturePath,price,_id}: any) => {
  const { auth } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();
  const token = auth.token
  const id = auth.id

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
      toast.success('Successfully Added!')
      dispatch(setCard({ data }))
    } else {
      toast.error('Need Login!')
    }
  }

  return (
    <>
      <Toaster />
      <div className="card w-96 bg-base-100 shadow-xl" id={_id}>
        <figure><img src={`http://localhost:3001/assets/${picturePath}`} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title dark:text-slate-50">{Name}</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{description}</p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{price} €</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => addProd(_id)}>Add Card</button>
          </div>
        </div>
      </div>
    </>
  )

}

export default ProductCard