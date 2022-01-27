import Footer from "./components/footer/Footer";
import styles from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import Pages from "./pages/Pages";
import "./cors.json";
import { useState } from "react";

function App() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <>
      <Navbar isSearch={isSearch} setIsSearch={setIsSearch} />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
