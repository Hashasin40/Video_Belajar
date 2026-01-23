import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./component/RequireAuth";

// ✅ Lazy load pages
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const DashboardLayout = React.lazy(() => import("./component/layout/DashboardLayout"));
const AuthLayout = React.lazy(() => import("./component/layout/AuthLayout"));
const Pesanan = React.lazy(() => import("./pages/Pesanan"));
const Profil = React.lazy(() => import("./pages/Profil"));
const Pembayaran = React.lazy(() => import("./pages/Pembayaran"));
const PembayaranSelesai = React.lazy(() => import("./pages/PembayaranSelesai"));
const Kelas = React.lazy(() => import("./pages/Kelas"));
const DetailProduk = React.lazy(() => import("./pages/DetailProduk"));
const Category = React.lazy(() => import("./pages/Category"));
const Bayar = React.lazy(() => import("./pages/Bayar"));

function App() {
  return (
    <>
      {/* ✅ Toast Notification */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "#198754",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#dc3545",
              color: "#fff",
            },
          },
        }}
      />

      {/* ✅ Suspense fallback while loading routes */}
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          
          {/* Protected Routes */}
          <Route path="/category" element={
          <RequireAuth>
            <DashboardLayout /> {/* ✅ dilindungi RequireAuth */}
          </RequireAuth>
        }>
            <Route index element={<Category />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Main App Routes */}
          <Route path="/pesanan" element={<Pesanan />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/pembayaran-selesai" element={<PembayaranSelesai />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/produk/:id" element={<DetailProduk />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/bayar" element={<Bayar />} />

          {/* Optional 404 page */}
          <Route
            path="*"
            element={<div className="text-center mt-5">Halaman tidak ditemukan</div>}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
