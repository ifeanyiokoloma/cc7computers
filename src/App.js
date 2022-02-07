import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pages from "./pages/Pages";
import "./cors.json";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [isSearch, setIsSearch] = useState(false);
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  

  return (
    <>
      <Navbar isSearch={isSearch} setIsSearch={setIsSearch} />
      <Pages />
      <Footer />
    </>
  );
}

export default App;
