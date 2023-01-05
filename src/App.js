import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatNew from "./pages/CatNew";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react"; 

const App = () => {
  const [cats, setCats] = useState([])
  fetch("http://localhost:3000/cats")
  .then((response) => response.json())
  .then((payload) => {setCats(payload)})
  .catch((error) => console.log(error))

  const createCat = (cat) => {
    console.log(cat)
  }

  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat = {createCat}/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
