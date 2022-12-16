import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CatEdit from "./pages/CatEdit";
import CatNew from "./pages/CatNew";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import cats from "./mockCats";
import { Routes, Route } from "react-router-dom";

const App = () => {
  console.log(cats);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex />} />
        <Route path="/catshow" element={<CatShow />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
