import React from 'react'

// import { Image } from 'cloudinary-react'

const SignUpStripe = ({currentUser}) => {

  return (
      <div>
        <p>Hi {currentUser.name.split(' ')[0]}. SMFM uses Stripe to get you paid quickly and keep your personal and payment information secure. Thousands of companies around the world trust Stripe to process payments for their users. Set up a Stripe account to get paid with SMFM.</p>
        <a href='https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://stripe.com/connect/default/oauth/test&client_id=ca_C7RrShVaSZvRq3WYFZ8Z2JS7yc3LriK5&state={process.env.STATE_VALUE}' > <img src='../../../public/blue-on-light.png' alt='signup button'/></a>
      </div>

      )

}
export default SignUpStripe
