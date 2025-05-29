import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto mt-4 px-4 py-8 bg-white shadow-md rounded-2xl border border-gray-200 flex flex-wrap justify-center gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
