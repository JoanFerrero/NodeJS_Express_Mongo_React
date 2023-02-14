/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {  useCustomSelector } from "../hooks/redux";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";
import { ProductContextType } from "../types/types";
import { useForm } from "../hooks/useForm";

const FormLogin = () => {
  const { pageType, setPageType } = useContext(ProductsContext) as ProductContextType;
  const { login, register} = useForm()
  const [values, setValues] = useState({});
  const [validated, setValidated] = useState(false);
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const { auth } = useCustomSelector((state) => state)
  const isColor = auth.mode

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
    if(form.checkValidity() === true){
      isLogin && login(values)
      isRegister && register(values)
    }
  };

  return (
    <div className={`bg-${isColor} grid grid-rows-2 grid-flow-col gap-4`}>
      <div className='hidden sm:block row-span-2'>
          <img className='w-full h-full object-cover' src='https://games-assets.crossfit.com/s3fs-public/styles/sizzle/public/FS1_8312%20%281%29.jpg?itok=eUGysway' alt="" />
      </div>
      <div className="row-span-1 mt-4">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control 
                  name='firstName'
                  type="text" 
                  placeholder="First Name" 
                  required 
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                  name='lastName'
                  type="text" 
                  placeholder="Last Name" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                  name='location'
                  type="text" 
                  placeholder="Location" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                  name='emailreg'
                  type="email" 
                  placeholder="Email" 
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label></Form.Label>
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
              <Form.Group controlId="validationCustom01">
                <Form.Label></Form.Label>
                <Form.Control 
                  name='emaillog'
                  type="email" 
                  placeholder="Email" 
                  required 
                  onChange={onChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label></Form.Label>
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