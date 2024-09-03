import React, { useState } from "react";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    medicineName: "",
    companyName: "",
    manufacturedDate: "",
    expiryDate: "",
    batchID: "",
    storageInstructions: "",
  });
  const [qr, setQr] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    for (const key in formData) {
      if (!formData[key]) {
        setError(`Please fill out the ${key}`);
        return false;
      }
    }
    setError("");
    return true;
  };

  const generateQRCode = () => {
    if (!validateForm()) return;

    const queryString = new URLSearchParams(formData).toString();
    const qrCodeUrl = `https://yourdomain.com/display?${queryString}`;

    QRCode.toDataURL(qrCodeUrl, {
      width: 400,
      margin: 2,
      color: {
        dark: "#2D3748FF",
        light: "#F7FAFCFF",
      },
    })
      .then((url) => {
        setQr(url);
        navigate("/qrcode", { state: { qr: url } });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 p-6 text-white">
      <h1 className="text-3xl mb-6">QR Code Generator</h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        <input
          type="text"
          name="medicineName"
          placeholder="Medicine Name"
          value={formData.medicineName}
          onChange={handleInputChange}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleInputChange}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="manufacturedDate"
          placeholder="Manufactured Date"
          value={formData.manufacturedDate}
          onChange={handleInputChange}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date"
          value={formData.expiryDate}
          onChange={handleInputChange}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="batchID"
          placeholder="Batch ID"
          value={formData.batchID}
          onChange={handleInputChange}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="storageInstructions"
          placeholder="Storage Instructions"
          value={formData.storageInstructions}
          onChange={handleInputChange}
          className="p-2 rounded bg-gray-700 text-white"
        />
      </div>

      <button
        onClick={generateQRCode}
        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
      >
        Generate QR Code
      </button>
      {qr && (
        <div className="mt-6">
          <img src={qr} alt="Generated QR Code" className="mb-4 w-40 h-40" />
        </div>
      )}
    </div>
  );
};

export default Form;
