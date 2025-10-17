import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Insight from "./pages/Insight";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { CartProvider } from "./CartContext";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <CartProvider>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </CartProvider>
  );
}

export default App;
