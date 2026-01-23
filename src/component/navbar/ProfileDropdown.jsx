import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { Link } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ButtonLink from "../button/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileDropdown() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex justify-between items-center relative">
      <div className="flex items-center space-x-4">
        {!user ? (
          <div className="flex space-x-2">
            <div className="mx-2 group">
              <ButtonLink
                to="/signin"
                className="w-full rounded-pill text-white bg-[#3ECF4C] group-hover:bg-[#E2FCD9CC] border-2 border-[#3ECF4C] transition duration-400"
              >
                <span className="group-hover:text-[#3ECF4C]">Masuk</span>
              </ButtonLink>
            </div>
            <div className="mx-2 group">
              <ButtonLink
                to="/signup"
                className="w-full rounded-pill bg-[#E2FCD9CC] group-hover:bg-[#3ECF4C] border-2 border-[#3ECF4C] transition duration-400"
              >
                <span className="text-[#3ECF4C] group-hover:text-white">Daftar</span>
              </ButtonLink>
            </div>
          </div>
        ) : (
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <Link
                  to="/kelas"
                  onClick={closeDropdown}
                  className="block px-4 py-2 group hover:bg-gray-100 text-decoration-none"
                >
                  <span className="relative text-green-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-600 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                    Kelas saya
                  </span>
                </Link>
                <Link
                  to="/profile"
                  onClick={closeDropdown}
                  className="block px-4 py-2 group hover:bg-gray-100 text-decoration-none"
                >
                  <span className="relative text-green-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-600 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                    Profil Saya
                  </span>
                </Link>
                <Link
                  to="/pesanan"
                  onClick={closeDropdown}
                  className="block px-4 py-2 group hover:bg-gray-100 text-decoration-none"
                >
                  <span className="relative text-green-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-600 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                    Pesanan Saya
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 group hover:bg-gray-100"
                >
                  <span className="relative text-red-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-red-600 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                    Keluar
                    <FontAwesomeIcon icon={faRightFromBracket} className="ml-2" />
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default ProfileDropdown;
