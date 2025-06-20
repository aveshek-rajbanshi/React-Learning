import React, {useState} from "react";
import Navbar from "./Component/Navbar";
import ProductContainer from "./Component/ProductSection";
import Footer from "./Component/Footer";
import "./App.css"


function App (){
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`main ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default App;
