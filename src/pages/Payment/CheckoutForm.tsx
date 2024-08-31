import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useCreatePaymentMutation, useUserBookingMutation } from "../../redux/features/user/user.api";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useBookingInfo } from "../../redux/features/booking/bookingSlice";
import { toast } from "sonner";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [createPayment]=useCreatePaymentMutation(undefined)
    const [transactionId,setTransactionId] =useState("")
    const [clientSecret, setClientSecret] = useState('')
    
    const user=useAppSelector(selectCurrentUser)
    const bookingInfo=useAppSelector(useBookingInfo)
    const [userBooking] = useUserBookingMutation();
    const price={price:bookingInfo.price}


    // console.log(bookingInfo,"user")
 
    const bookingDbInfo={
        facility:bookingInfo.facilityId,
        date:bookingInfo.date,
        startTime:bookingInfo.startTime,
        endTime:bookingInfo.endTime
    }

    console.log(bookingDbInfo)
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
      const toastId = toast.loading("Booking creating..");


      
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
                const res = await userBooking(bookingDbInfo);
                console.log(res);
                if (res.error) {
                toast.error(`${res.error.data.errorMessages[0]?.path} ${res.error.data.errorMessages[0]?.message}`, {
                    id: toastId,
                    duration: 2000,
                });
                }
                if (res.data.success) {
                toast.success("Booking Created", { id: toastId, duration: 2000 });
                Swal.fire({
                    title: `Dear ${bookingInfo.UserName}`,
                   
                    html: `Your booking for  <strong>${bookingInfo.facilityName} </strong> has been confirme and your payment has been done. Your total payable amount is <strong>${price.price}$</strong>. Thank you so much for your booking. Have a nice day!.
                      
                    `,
                    showCloseButton: true,
                    
                    
                    
                  });


                }
    
    
    }}

    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: 'black',
                        '::placeholder': {
                            color: 'black',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className="btn btn-outline  mt-10 w-full text-xl" type="submit"  disabled={!stripe || !clientSecret}  >
            Confirm Payment
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheckoutForm;