import React from "react";

const Button = ({ btnName }) => {
  return (
    <div>
      <button className="px-5   bg-[#3c3c3c] text-white py-2  rounded-lg text-sm font-semibold w-max">
        {/* {btnName==="All"?'bg-white':""} */}
        {btnName}
      </button>
    </div>
  );
};

export default Button;
