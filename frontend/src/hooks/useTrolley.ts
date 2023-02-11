import { useCustomSelector, useCustomDispatch } from "./redux";
import { setCard, setNotCard } from "../redux/slice/auth";
import ProductsService from '../services/Products/ProductsService'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export function useTrolley () {

  const { auth } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();
  const token = auth.token
  const id = auth.id
  const navigate = useNavigate()

  const removeProd = async (idP: String) => {
    dispatch(setNotCard())
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const request = ProductsService.getData(`/card/${id}/${idP}`, config)
    const data = await (await request).data
    console.log(data)
    dispatch(setCard({ data }))
    toast.promise(request, {
      loading: 'Loading',
      success: 'Successfully Remove',
      error: 'Error Remove',
    });
  }

  const endShop = () => {
    toast.success('Thank you for trusting Nobull!')

    setTimeout(() => { 
      navigate("/shop") 
      dispatch(setNotCard())
    }, 3000)
  }

  return {removeProd, endShop}
}