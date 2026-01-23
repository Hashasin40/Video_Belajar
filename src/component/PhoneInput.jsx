import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneInputCustom({ value, onChange }) {
  return (
    <div className="space-y-3 flex flex-col mb-3">
      <span className="font-semibold text-gray-700">Nomor Telepon</span>

      <div className="relative w-full">
        <PhoneInput
          country={"id"}
          value={value}
          onChange={onChange}
          placeholder="Nomor Telepon"
          // hilangkan default margin dari react-phone-input-2
          containerClass="!w-full !m-0"
          inputClass="
            !w-full 
            !h-[42px]             /* 👉 samain tinggi sama input lain */
            !rounded-full         /* 👉 bentuk pill */
            !pl-14 !pr-4          /* 👉 jarak kiri buat flag + kode negara */
            !border !border-gray-300
            !bg-white !text-gray-800
            focus:!border-blue-500
            focus:!ring-2 focus:!ring-blue-400
            !outline-none
            transition
          "
          buttonClass="
            !bg-transparent !border-none
            !absolute !left-4 !top-1/2 !-translate-y-1/2
          "
          dropdownClass="
            !bg-white !rounded-lg !shadow-lg !border !border-gray-200
            !text-gray-800
          "
        />
      </div>
    </div>
  );
}

export default PhoneInputCustom;
