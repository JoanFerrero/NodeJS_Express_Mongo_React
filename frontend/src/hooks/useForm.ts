import { useNavigate } from "react-router-dom";
import { setLogin, setCard, setId } from "../redux/slice/auth";
import { useCustomDispatch } from "../hooks/redux";
import { postData, getData } from "../services";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";
import { ProductContextType } from "../types/types";

export function useForm () {

  const navigate = useNavigate();
  const dispatch = useCustomDispatch();
  const { setPageType } = useContext(ProductsContext) as ProductContextType;


  const login = async (values: {}) => {
    const loggedInResponse = postData("/auth/login", values)
    const loggedIn = (await loggedInResponse).data
    if (!loggedIn.msg) {
      const config = {
        headers: {
          Authorization: `Bearer ${loggedIn.token}`
        }
      }
      const request = getData(`/card/${loggedIn.user.id}`, config)
      const data = (await request).data

      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      dispatch(setId({ id: loggedIn.user.id}))
      dispatch(setCard({ data }))
      navigate("/home");
    }
  }

  const register = async (values: {}) => {
    const savedUserResponse = postData("/auth/register", values);
    const savedUser = (await savedUserResponse).data

    if (savedUser) {
      setPageType("login");
    }
  }

  return { login, register }
}