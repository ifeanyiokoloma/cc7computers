import { auth } from "../firebase/app";

const SignUp = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    const { email, password } = inputs;
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setInputs((newInput) => ({ ...newInput, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ifeanyiokoloma@gmail.com"
          onChange={handleChange}
        />
      </label>
      <label>
        password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
      </label>
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
