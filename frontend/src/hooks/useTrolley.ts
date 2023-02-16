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
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const removeAddProd = async (idP: String) => {
    dispatch(setNotCard())
    const request = ProductsService.getData(`/card/${id}/${idP}`, config)
    console.log(`/card/${id}/${idP}`)
    const data = await (await request).data
    console.log(data)
    dispatch(setCard({ data }))
    toast.promise(request, {
      loading: 'Loading',
      success: 'Successfully Remove',
      error: 'Error Remove',
    });
  }

  const endShop = async () => {
    toast.success('Thank you for trusting Nobull!')
    const request = ProductsService.getData(`/cardelete/63c2cca9a8f24bc3da45f429`, config)
    const data = (await request).data
    console.log(data)
    setTimeout(() => { 
      dispatch(setCard({ data }))
      navigate("/shop") 
    }, 1000)
  }

  return {removeAddProd, endShop}
}