    // Form Sign Up
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4 border p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Pendaftaran Akun</h2>
      <span className="text-center text-sm flex  text-gray-500 justify-content-center mb-4">Yuk, daftarkan akunmu sekarang juga!</span>
      
      <div className="space-y-3 flex flex-col"> 
        <div className="space-y-3 flex flex-col mb-3">
        <span className="font-semibold text-gray-700">Nama Lengkap</span>
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="border p-2 w-full rounded-pill"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          onInvalid={(e) => e.target.setCustomValidity("Nama wajib diisi")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>

        <PhoneInput
          value={phone}
          onChange={setPhone}
        />

      <div className="space-y-3 flex flex-col mb-3">
        <span className="font-semibold text-gray-700">Email</span>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        onInvalid={(e) => e.target.setCustomValidity("Email wajib diisi")}
        onInput={(e) => e.target.setCustomValidity("")}
      />
      </div>

      <div className="space-y-3 flex flex-col mb-3">
        <span className="font-semibold text-gray-700">Password</span>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-full"
          required
          onInvalid={(e) => e.target.setCustomValidity("Password wajib diisi")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <span className="text-sm text-gray-500">Minimal 6 karakter</span>
      </div>

      <div className="space-y-3 flex flex-col">
        <span className="font-semibold text-gray-700">Konfirmasi Password</span>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Konfirmasi Password"
          className="w-full rounded-full"
          required
          onInvalid={(e) => e.target.setCustomValidity("Konfirmasi Password wajib diisi")}
          onInput={(e) => e.target.setCustomValidity("")}
        />
      </div>

      </div>

      {/* Link Lupa Password */}
      <div className=" flex items-center justify-end mb-2">
        <ButtonLink to="#">
          <span className="text-sm text-gray-600 hover:underline">Lupa Password?</span>
        </ButtonLink>
      </div>

      {/* Tombol Submit */}
      <div className="text-center flex justify-center row gap-3">
        <div className="mx-2 group">
          <ButtonSubmit type="submit" className="w-full">
            <span className=" group-hover:text-white text-size">Daftar</span>
          </ButtonSubmit>
        </div>
        <div className="mx-2 group">
          <ButtonLink to="/signin" className="w-full rounded-pill text-white bg-[#3ECF4C]  group-hover:bg-[#E2FCD9CC] border-2 border-[#3ECF4C] transition duration-400">
            <span className=" group-hover:text-[#3ECF4C] text-size">Masuk</span>
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
