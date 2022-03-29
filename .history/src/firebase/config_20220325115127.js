// Your web app's Firebase configuration
import { auth } from "./app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const config = {
  apiKey: "AIzaSyBNRRIxVwZasqTfjoFQ6J6NsqDVs9OWjzs",
  authDomain: "cc7-website.firebaseapp.com",
  projectId: "cc7-website",
  storageBucket: "cc7-website.appspot.com",
  messagingSenderId: "395637042685",
  appId: "1:395637042685:web:7401e6871478d655ce3d94",
};

// export const uiConfig = {
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: "popup",
//   signInSuccessUrl: "/signedIn",
//   signInOptions: [
//     // List of OAuth providers supported.
//     auth.GoogleAuthProvider.PROVIDER_ID,
//     auth.FacebookAuthProvider.PROVIDER_ID,
//     auth.TwitterAuthProvider.PROVIDER_ID,
//     auth.GithubAuthProvider.PROVIDER_ID,
//     {
//       provider: auth.PhoneAuthProvider.PROVIDER_ID,
//       defaultCountry: "NG",
//       defaultNationalNumber: "+2349030658008",
//     },
//   ],
//   callbacks: {
//     // Avoid redirects after sign-in.
//     signInSuccessWithAuthResult: () => false,
//   },
//   // Terms of service url.
//   // tosUrl: "<your-tos-url>",
//   // Privacy policy url.
//   // privacyPolicyUrl: "<your-privacy-policy-url>",
//   // Other config options...
// };
