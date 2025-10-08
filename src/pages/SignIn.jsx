import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="container mt-5 text-center">
      <h1>Ini Sign In</h1>
      <p>Masuk ke akun Anda untuk melanjutkan.</p>
        <Link to="/signup">Belum punya akun? Daftar di sini.</Link> <br />
        <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
}

export default SignIn;  