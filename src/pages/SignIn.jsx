import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase"; // ✅ tambahkan ini
import { loginUser } from "../services/authService";
import toast from "react-hot-toast";
import PasswordInput from "../component/PasswordInput";
import ButtonSubmit from "../component/button/ButtonSubmit";
import ButtonLink from "../component/button/ButtonLink";
import GoogleIcon from "../assets/icon_google.png"; // pastikan path ini benar

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Login dengan Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Selamat datang, ${user.displayName}!`);
      window.location.href = "/";
    } catch (error) {
      console.error("Error Google Login:", error);
      toast.error(error.message);
    }
  };

  // 🔹 Login dengan email & password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("Login berhasil!");
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 flex flex-col p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Masuk ke Akun</h2>
      <span className="text-center text-sm flex  text-gray-500 justify-content-center mb-4">Yuk, lanjutin belajarmu di videobelajar.</span>

      {/* Input Email & Password */}
      <div>

        <span className="font-semibold text-gray-700">Email</span>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded-pill"
          required
            onInvalid={(e) => e.target.setCustomValidity("Email wajib diisi")}
            onInput={(e) => e.target.setCustomValidity("")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <span className="font-semibold text-gray-700">Password</span>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3 rounded-pill"
        />


        {/* Link Lupa Password */}
        <div className=" flex items-center justify-end mb-2">
          <ButtonLink to="#">
            <span className="text-sm text-gray-600 hover:underline">Lupa Password?</span>
          </ButtonLink>
        </div>
      </div>



      {/* Tombol Submit */}
      <div className="text-center flex justify-center row gap-3">
        <div className="mx-2 group">
          <ButtonSubmit type="submit" className="w-full">
            <span className=" group-hover:text-white text-size">Masuk</span>
          </ButtonSubmit>
        </div>
        <div className="mx-2 group">
          <ButtonLink to="/signup" className="w-full rounded-pill text-white bg-[#3ECF4C]  group-hover:bg-[#E2FCD9CC] border-2 border-[#3ECF4C] transition duration-400">
            <span className=" group-hover:text-[#3ECF4C] text-size">Daftar</span>
          </ButtonLink>
        </div>
      </div>

      <div className="my-3 flex items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-gray-500">atau</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Tombol Google Login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center rounded-lg rounded-pill border-2 py-2 
        group transition duration-300 ease-in-out border-blue-600 hover:bg-blue-600"
      >
        <img
          src={GoogleIcon}
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        <span className="text-blue-600 group-hover:text-white"  >Login with Google</span>
      </button>
    </form>
  );
}

export default SignIn;
