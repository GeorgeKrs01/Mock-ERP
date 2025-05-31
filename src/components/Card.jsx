import React, { useState } from "react";

const Card = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [productName, setProductName] = useState("Product");
  const [description, setDescription] = useState("Description");
  const [quantity, setQuantity] = useState("Quantity");

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optional: Save data to a server here
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents new line in textarea
      handleSave();
    }
  };

  return (
    <div className="relative max-w-sm p-6 mt-2 mx-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
      <button
        onClick={isEditing ? handleSave : handleEditClick}
        className="absolute top-2 right-2 p-1"
      >
        <img
          src="/edit.svg"
          alt={isEditing ? "Save" : "Edit"}
          className="w-4 h-4"
        />
      </button>

      <div className="block">
        {isEditing ? (
          <>
            <input
              className="w-full mb-2 text-xl font-bold border border-gray-300 rounded px-2 py-1"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <textarea
              className="w-full mb-2 text-gray-700 border border-gray-300 rounded px-2 py-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <input
              className="w-full text-gray-800 font-semibold border border-gray-300 rounded px-2 py-1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {productName}
            </h5>
            <p className="font-normal text-gray-700">{description}</p>
            <p className="font-semibold">{quantity}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
