import React from "react";

function ButtonSubmit({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#E2FCD9CC]  text-[#3ECF4C] px-4 py-2 rounded-pill
        hover:bg-[#3ECF4C]
        transition duration-400 ease-in-out 
        disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#3ECF4C]
        ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonSubmit;
