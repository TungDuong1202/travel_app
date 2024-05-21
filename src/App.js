import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Navbar />
      </div>

      <div className="app-body">
        <Outlet />
      </div>

      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
