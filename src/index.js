import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import App from "./components/App";
import Header from "./pages/Header.js";
import Footer from './pages/Footer.js';



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header/>
    <App />
   <Footer/>
  </StrictMode>,
  rootElement
);
