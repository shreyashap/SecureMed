import React, { useState } from "react";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    medicineName: "",
    companyName: "",
    manufacturedDate: "",
    expiryDate: "",
    qualityAssuranceStatus: "",
    dosagePeriod: "",
    batchID: "",
    ageLimit: "",
    batchNumber: "",
    storageInstructions: "",
    usageInstructions: "",
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
    const qrCodeUrl = `https://secure-med.vercel.app/display?${queryString}`;

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
    <div className="justify-center min-h-screen bg-gray-800 p-6 text-white">
      <h1 className="text-3xl mb-6 text-center font-semibold">
        QR Code Generator
      </h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-3 sm:ml-60 sm:my-12">
        <div className="mb-4">
          <label className="block my-2">Medicine Name</label>
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
          <label className="block my-2">Company Name</label>
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
          <label className="block my-2">Manfactured Date</label>
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
          <label className="block my-2">Expiry Date</label>
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
          <label className="block my-2">Batch ID</label>
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
          <label className="block my-2">Storage Instructions</label>
          <input
            type="text"
            name="storageInstructions"
            placeholder="Storage Instructions"
            value={formData.storageInstructions}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block my-2">Age Limit</label>
          <input
            type="number"
            name="ageLimit"
            placeholder="Age Limit"
            value={formData.ageLimit}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block my-2">Quality Assurance Status</label>
          <input
            type="text"
            name="qualityAssuranceStatus"
            placeholder="Quality Assurance Status"
            value={formData.qualityAssuranceStatus}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block my-2">Batch Number</label>
          <input
            type="text"
            name="batchNumber"
            placeholder="Batch Number"
            value={formData.batchNumber}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block my-2">Dosage Period (In Days)</label>
          <input
            type="number"
            min={1}
            name="dosagePeriod"
            placeholder="Dosage Period"
            value={formData.coursePeriod}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block my-2">Usage Instructions</label>
          <input
            type="text"
            name="usageInstructions"
            placeholder="Usage Instructions"
            value={formData.usageInstructions}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={generateQRCode}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Generate QR Code
        </button>
      </div>

      {qr && (
        <div className="mt-6">
          <img src={qr} alt="Generated QR Code" className="mb-4 w-40 h-40" />
        </div>
      )}
    </div>
  );
};

export default Form;
