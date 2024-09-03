import React from "react";
import { useLocation } from "react-router-dom";

const QRCodeDisplay = () => {
  const location = useLocation();
  const { qr, formData } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-lg sm:text-xl md:text-2xl mb-4">Scan this QR Code</h2>
      {qr ? (
        <>
          <img
            src={qr}
            alt="Generated QR Code"
            className="w-60 h-60 sm:w-96 sm:h-96 "
          />
          <p className="mt-4">Use a mobile device to scan this code.</p>
          <a
            href={qr}
            download="qrcode.png"
            className="text-white bg-green-500 hover:bg-green-600 p-2 rounded mt-2"
          >
            Download QR Code
          </a>
        </>
      ) : (
        <p>No QR code found. Please generate a QR code first.</p>
      )}

      {/* {formData && (
        <div className="mt-4 text-left">
          <h3 className="text-xl">Form Data:</h3>
          <p>Medicine Name: {formData.medicineName}</p>
          <p>Company Name: {formData.companyName}</p> 
        </div>
      )} */}
    </div>
  );
};

export default QRCodeDisplay;
