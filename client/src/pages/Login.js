import React, {useState} from 'react'
import LoginForm from '../components/loginForm/LoginForm'
import Navbar from '../components/navbarLoggedout/Navbar'
import ResetFrom from '../components/resetPasswordForm/ResetFrom'

export default function Login() {
  const [forgotpassword, setForgotPassword] = useState(false)
  return (
    <>
    <Navbar />
    {(!forgotpassword) ? <LoginForm setForgotPassword={setForgotPassword} /> : <ResetFrom setForgotPassword={setForgotPassword} />}
    </>
  )
}