import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import Home from "./Pages/Home";
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Header from './components/Header';
import FooterPage from './components/Footer';

//TODO:Add meta tags in head element of index.html for getting better search results, see react helmet tutorial for that.

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterPage/>
    </Router>


  );
}

export default App;
