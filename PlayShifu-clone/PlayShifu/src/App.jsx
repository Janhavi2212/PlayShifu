import React from "react";
import "./App.css"; 
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainImage from "./components/MainImage";




const App = () => (
  <div className="app">
    <PromoBanner />
    <Header />
    <Navbar />
    <MainImage />
  </div>
);

export default App;