import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonView({ label, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
        className="border px-3 py-2 rounded-full shadow hover:shadow-xl hover:-translate-y-0.5
        hover:bg-gray-400 transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-gray-500
        "
    >
      <span className="font-semibold text-sm group-hover:text-gray-800">View All
        <FontAwesomeIcon icon={faChevronDown} className="ml-1 animate-bounce group-hover:rotate-180 group-hover:animate-none"/>
      </span>
    </button>
  );
}

export default ButtonView;