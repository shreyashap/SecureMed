import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import QRCodeDisplay from "./components/QRCodeDisplay";
import MedicineData from "./components/MedicineData";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/qrcode" element={<QRCodeDisplay />} />
          <Route path="/display" element={<MedicineData />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
