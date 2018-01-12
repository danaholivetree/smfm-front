import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Image } from 'cloudinary-react'

const SignUpStripe = ({currentUser}) => {

  return (
      <div>Hi {currentUser.name.split(' ')[0]}. SMFM uses Stripe to get you paid quickly and keep your personal and payment information secure. Thousands of companies around the world trust Stripe to process payments for their users. Set up a Stripe account to get paid with SMFM.</div>
  )

}
export default SignUpStripe
