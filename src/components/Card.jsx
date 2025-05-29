import React from "react";

const Card = () => {
  return (
    <>
      <a
        href="#"
        class="block max-w-sm p-6 mt-2 mx-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Product
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Description</p>
        <p class="font-semibold ">Quantity</p>
      </a>
    </>
  );
};

export default Card;
