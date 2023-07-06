import React from 'react'
import SignInForm from "../sign-In/sign-in.component";
import SignUpForm from "../sign-up-form/signUpForm";

import './authentication.styles.scss'

export default function Authentication() {
  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}
