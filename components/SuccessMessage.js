import React from "react";

const SuccessMessage = ({ data }) => {
  // Access the collected data and display it in the success message
  const { productDetail, userData } = data;

  return (
    <div>
      <h2>Success!</h2>
      <p>Product Detail: {JSON.stringify(productDetail)}</p>
      <p>User Data: {JSON.stringify(userData)}</p>
    </div>
  );
};

export default SuccessMessage;
