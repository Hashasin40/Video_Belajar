import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ButtonLink({ to, onClick, children, className = "", disabled = false }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      e.preventDefault(); // cegah navigasi default
      onClick(e); // jalankan custom function
    } else if (to) {
      navigate(to); // navigasi ke halaman tujuan
    }
  };

  // kalau ada 'to', tampil sebagai <Link>
  if (to) {
    return (
      <Link
        to={to}
        onClick={handleClick}
        className={`inline-block px-4 py-2 rounded 
          text-center transition text-decoration-none
          ${disabled ? "pointer-events-none opacity-50" : ""}
          ${className}`}
      >
        {children}
      </Link>
    );
  }

  // kalau nggak ada 'to', tampil sebagai <button>
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`inline-block rounded 
        text-center transition
        ${disabled ? "pointer-events-none opacity-50" : ""}
        ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonLink;
