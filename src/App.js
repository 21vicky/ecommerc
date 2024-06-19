import React from "react";
import Contact from "./Components/Contact/Contact";
import Privacy from "./Components/Privacy/Privacy";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Loginform from "./Components/Login/Loginform";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Advisement from "./Components/Advisement/Advisement";
import Category from "./Components/Category/Category";
import Shopping from "./Components/shopping/Shopping";
import Testimonial from "./Components/Testimonial/Testimonial";
import OurServices from "./Components/OurServices/OurServices";
import Footer from "./Components/Footer/footer";

import Test from "./Components/Test/Test";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Advisement />
        <Category />
        <Shopping />
        <Testimonial />
        <OurServices />
        <Footer />
        {/*<Test />*/}
        {/*<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Loginform" element={<Loginform />} />
        </Routes>*/}
      </Router>
    </div>
  );
};

export default App;
