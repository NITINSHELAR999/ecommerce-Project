import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(`$
{process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    `);



    // You have been registered at basic level, Form No is 5236178 and password AU20000421

