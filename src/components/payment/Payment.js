import { PaystackButton } from "react-paystack";
import useAuth from "../../hooks/useAuth";
import styles from "./payment.module.css";

function Payment({ productPrice }) {
  const { user } = useAuth();
  const config = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount: `${productPrice}00`,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <PaystackButton className={styles.paymentBtn} {...componentProps} />
    </>
  );
}

export default Payment;
