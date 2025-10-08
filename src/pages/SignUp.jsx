import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container mt-5 text-center">
      <h1>Ini Sign Up</h1>
      <p>Buat akun baru untuk memulai.</p>
        <Link to="/signin">Sudah punya akun? Masuk di sini.</Link>
    </div>
  );
}

export default SignUp;
