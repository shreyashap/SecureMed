import React from "react";
import { useLocation } from "react-router-dom";

const MedicineData = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const medicineName = queryParams.get("medicineName");
  const companyName = queryParams.get("companyName");
  const manufacturedDate = queryParams.get("manufacturedDate");
  const expiryDate = queryParams.get("expiryDate");
  const batchID = queryParams.get("batchID");
  const storageInstructions = queryParams.get("storageInstructions");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl mb-4">Medicine Information</h2>
      <div className="text-left">
        <p>
          <strong>Medicine Name:</strong> {medicineName}
        </p>
        <p>
          <strong>Company Name:</strong> {companyName}
        </p>
        <p>
          <strong>Manufactured Date:</strong> {manufacturedDate}
        </p>
        <p>
          <strong>Expiry Date:</strong> {expiryDate}
        </p>
        <p>
          <strong>Batch ID:</strong> {batchID}
        </p>
        <p>
          <strong>Storage Instructions:</strong> {storageInstructions}
        </p>
      </div>
    </div>
  );
};

export default MedicineData;
