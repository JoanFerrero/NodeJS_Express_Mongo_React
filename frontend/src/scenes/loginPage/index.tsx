import React from 'react';
import FormLogin from "./Form";
import { useCustomSelector } from "../../hooks/redux";

type Props = {}

const LoginPage = (props: Props) => {

  const { auth } = useCustomSelector((state) => state)
  const isColor = auth.mode

  return (
    <div className={`bg-${isColor}`} style={{width: '100%', padding: '2rem'}}>
      <FormLogin />
    </div>
  )
}

export default LoginPage