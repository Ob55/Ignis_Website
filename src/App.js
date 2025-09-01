import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./ components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Insight from "./pages/Insight";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
