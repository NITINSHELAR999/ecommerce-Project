import { CardElement , useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import './payment-from.styles.scss'


const PaymentForm = () => {
 
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    
     if(!stripe || !elements){
      return;
     }

     const response = await fetch('/netlify/functions/create-payment-intent.js',{
      method:'post',
       headers: {
        'Content-Type':'application/json'
       },
       body:JSON.stringify({amount:10000})
     }).then(res => res.json())
     console.log(response)    
   

  }
  

  // const paymentHandler = async (e) => {
  //   e.preventDefault();

  //   if(!stripe || !elements){
  //     return;
  //   }

  //   const cardElement =  elements.getElement(CardElement)
  //   console.log('card',cardElement)
  //   console.log('stripe', stripe)
  // }


    
  return (
    <div className="payment-Form-Container" >
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">Pay Now</Button>
      </form>
    </div>
  );
};
export default PaymentForm;
