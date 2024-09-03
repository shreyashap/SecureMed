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
  const qualityAssuranceStatus = queryParams.get("qualityAssuranceStatus");
  const dosagePeriod = queryParams.get("dosagePeriod");
  const ageLimit = queryParams.get("ageLimit");
  const batchNumber = queryParams.get("batchNumber");
  const usageInstructions = queryParams.get("usageInstructions");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl mb-4">Medicine Information</h2>
      <div className="text-left">
        <p>
          <strong>Medicine Name : </strong> {medicineName}
        </p>
        <p>
          <strong>Company Name : </strong> {companyName}
        </p>
        <p>
          <strong>Manufactured Date : </strong> {manufacturedDate}
        </p>
        <p>
          <strong>Expiry Date : </strong> {expiryDate}
        </p>
        <p>
          <strong>Batch ID : </strong> {batchID}
        </p>
        <p>
          <strong>Storage Instructions : </strong> {storageInstructions}
        </p>
        <p>
          <strong>Quality Assurance Status : </strong> {qualityAssuranceStatus}
        </p>
        <p>
          <strong>Dosage Period : </strong> {dosagePeriod}
        </p>
        <p>
          <strong>Age Limit : </strong> {ageLimit}
        </p>
        <p>
          <strong>Batch Number : </strong> {batchNumber}
        </p>
        <p>
          <strong>Usage Instructions :</strong> {usageInstructions}
        </p>
      </div>
    </div>
  );
};

export default MedicineData;
