import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Gaming from "./Gaming/Gaming";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sponsors from "./Sponsors/Sponsors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
