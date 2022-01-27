import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // const location = useLocation();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [dialog, setDialog] = useState("");
  // const navigate = useNavigate();
  // let from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const input = e.target;
    const emailValue = input.value;
    if (input.name === "email") {
      setEmail((params) => {
        return (params = emailValue);
      });
    }

    const passwordValue = input.value;
    if (input.name === "password") {
      setPassword((params) => {
        return (params = passwordValue);
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      navigate(from, { replace: true });
    } catch (error) {
      setDialog((params) => {
        return (params = `${error.code} ${error.message}`);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter Your Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Enter Your Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
      </div>
      <p className="error">{dialog}</p>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
