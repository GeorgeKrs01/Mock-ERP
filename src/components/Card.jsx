import React from "react";

const Card = () => {
  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent link wrapping the card from being triggered
    window.location.href = "/product"; // Change to your actual product URL
  };

  return (
    <div className="relative max-w-sm p-6 mt-2 mx-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
      <button onClick={handleEditClick} className="absolute top-2 right-2 p-1">
        <img src="/edit.svg" alt="Edit" className="w-4 h-3" />
      </button>
      <a href="#" className="block">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Product
        </h5>
        <p className="font-normal text-gray-700">Description</p>
        <p className="font-semibold">Quantity</p>
      </a>
    </div>
  );
};

export default Card;
