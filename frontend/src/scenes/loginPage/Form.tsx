/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setLogin, setCard, setId } from "../../redux/slice/auth";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import { postData, getData } from "../../services/Login";

const FormLogin = () => {
  const [pageType, setPageType] = useState("login");
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const dispatch = useCustomDispatch();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const { auth } = useCustomSelector((state) => state)
  const isColor = auth.mode

  const register = async (values: {}) => {
    const savedUserResponse = postData("/auth/register", values);
    const savedUser = (await savedUserResponse).data

    if (savedUser) {
      setPageType("login");
    }
  }

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isLogin && login(values)
    isRegister && register(values)
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  return (
    <div className={`bg-${isColor} grid grid-rows-2 grid-flow-col gap-4`}>
      <div className='hidden sm:block row-span-2'>
          <img className='w-full h-full object-cover' src='https://games-assets.crossfit.com/s3fs-public/styles/sizzle/public/FS1_8312%20%281%29.jpg?itok=eUGysway' alt="" />
      </div>
      <div className="row-span-1 mt-4">
        <Form onSubmit={onSubmit}>
          {isRegister && (
            <>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  name='firstName'
                  type="text" 
                  placeholder="First Name" 
                  required 
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name='lastName'
                  type="text" 
                  placeholder="Last Name" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  name='location'
                  type="text" 
                  placeholder="Last Name" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name='emailreg'
                  type="email" 
                  placeholder="email" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='passwordreg'
                  type="password" 
                  placeholder="Password" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
            </>
          )}
          {isLogin && (
            <>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  name='emaillog'
                  type="text" 
                  placeholder="Email" 
                  required 
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='passwordlog'
                  type="password" 
                  placeholder="Password" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
            </>
          )}
          <Button variant="primary" type="submit">
            {isLogin ? "Login" : "Register"}
          </Button>
          <Form.Group>
            <Form.Text className="text-muted" onClick={() => {
              setPageType(isLogin ? "register" : "login")
              setValues({})
            }}>
            {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Form.Text>
          </Form.Group>
        </Form>
        </div>
        <div className="">
          <img src="https://open.crossfit.com/wp-content/uploads/2022/11/23-OPEN-LOGO_WHITE-BKGD.jpg" alt="" />
        </div>
    </div>
  )
}

export default FormLogin