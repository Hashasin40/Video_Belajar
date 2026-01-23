import React, { useState } from "react";
import { logoutUser } from "../services/authService";
import toast from "react-hot-toast";
import Content1 from "../component/dashboard/Content1";
import ContentConditional from "../component/dashboard/ContentConditional";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("semua");

  const tabs = [
    { key: "semua", label: "Semua Kelas" },
    { key: "pemasaran", label: "Pemasaran" },
    { key: "desain", label: "Desain" },
    { key: "pengembangan", label: "Pengembangan Diri" },
    { key: "bisnis", label: "Bisnis" },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Berhasil logout!");
      window.location.href = "/";
    } catch (error) {
      toast.error("Gagal logout: " + error.message);
    }
  };

  return (
    <>
      <Content1 />

      <div className="mx-5 my-10">
        <h1 className="font-bold text-2xl">Koleksi Video Pembelajaran Unggulan</h1>
        <p className="text-gray-500">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      </div>

      {/* Tab Menu */}
      <div className="mx-5 flex flex-wrap gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative text-green-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 ${
              activeTab === tab.key ? "font-bold after:scale-x-100 text-green-700" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Konten Berdasarkan Tab */}
      <ContentConditional activeTab={activeTab} />
    </>
  );
}

export default Dashboard;
