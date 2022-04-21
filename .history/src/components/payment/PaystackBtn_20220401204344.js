import Img from "react-cool-img";
import { PaystackButton } from "react-paystack";
import useAuth from "../../hooks/useAuth";
import paystackLogo from "../../data/images/paystack.svg";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/app";
import moment from "moment";

function PaystackBtn({ productPrice, className, onSuccess, productID }) {
  const { user } = useAuth();
  const config = {
    reference: uuidv4(),
    email: user.email,
    amount: `${productPrice}00`,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };
  // you can call this function anything
  const handlePaystackSuccessAction = async (reference, productID) => {
    // Implementation for whatever you want to do with reference and after success call.
    const productRef = doc(db, "products", productID);
    await updateDoc(productRef, {
      sold: true,
      buyer: {
        email: user.email,
        name: user.displayName,
        phoneNumber: user.phoneNumber,
        emailVerified: user.emailVerified,
      },
      saleInfo: {
        saleRef: reference,
        timeSold: new Date().toLocaleString(),
      },
    });
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    // text: "Paystack",
    onSuccess: (reference, productID) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <PaystackButton
        children={
          <Img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundColor: "white",
            }}
            src={paystackLogo}
            alt="paystack logo"
          />
        }
        onSuccess={onSuccess}
        className={className}
        {...componentProps}
      />
    </>
  );
}

export default PaystackBtn;
