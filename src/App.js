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
import React, { useState, useEffect } from "react"; 

const App = () => {
  const [cats, setCats] = useState([])
  useEffect(() => {
      readCat()
  }, [])
  
  const readCat = () => {
  fetch("http://localhost:3000/cats")
  .then((response) => response.json())
  .then((payload) => setCats(payload))
  .catch((error) => console.log(error))
  }

  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readCat())
    .catch((errors) => console.log("Cat create errors:", errors))
  }

  const updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => readCat())
    .catch((errors) => console.log("Cat create errors:", errors))
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readCat())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow deleteCat={deleteCat} cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat = {createCat}/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
