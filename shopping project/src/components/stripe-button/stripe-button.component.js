import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IF3eDF2Q4fqCyX6jNBxY3FEKbugo5koI0u3Ev7530dlhJyLZDlFr2rqpbskUdco54vHi5K9w8RvY3VdTo6636WL00HswFqA5y';

const onToken = token => {
    console.log(token);
    alert('Payment Successful')
};

    return(
        <StripeCheckout
            label='Pay Now'
            name='Teo Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}₺`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;