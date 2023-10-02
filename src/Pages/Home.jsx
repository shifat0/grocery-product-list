import React, { createContext, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products/Products";

export const searchContext = createContext("");

function Home() {
  const [searchText, setSearchText] = useState("");
  return (
    <searchContext.Provider value={{ searchText, setSearchText }} v>
      <Navbar />
      <Products />
    </searchContext.Provider>
  );
}

export default Home;
