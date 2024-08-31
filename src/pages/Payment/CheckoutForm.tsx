import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useCreatePaymentMutation } from "../../redux/features/user/user.api";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [createPayment]=useCreatePaymentMutation(undefined)
    const [transactionId,setTransactionId] =useState("")
    const [clientSecret, setClientSecret] = useState('')
    const price={price:100}
    const user=useAppSelector(selectCurrentUser)
    console.log(user,"user")

    useEffect(() => {
        const fetchPayment = async () => {
          try {
            const res = await createPayment(price);
            
            console.log('Payment response:', res.data.data.clientSecret);
            setClientSecret(res.data.data.clientSecret)
          } catch (error) {
            console.error('Error creating payment:', error);
            // Handle the error here
          }
        };
    
        fetchPayment();
      }, []);
      console.log(clientSecret)



    const handleSubmit=async(event)=>{
      event.preventDefault()

      
      if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
        return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if (error) {
        console.log('payment error', error);
        setError(error.message);
    }
    else {
        console.log('payment method', paymentMethod)
        setError('');
    }


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                
                name: user?.user_email || 'anonymous'
            }
        }
    })

    if (confirmError) {
        console.log('confirm error')
    }
    else {
        console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);
    
    
    }}





    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-sm btn-primary my-4" type="submit"  disabled={!stripe || !clientSecret}  >
            Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheckoutForm;