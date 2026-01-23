import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import toast from "react-hot-toast";

export function useSignUp() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          namaLengkap: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          provider: "google",
          createdAt: new Date(),
        });
      }

      toast.success(`Selamat datang, ${user.displayName}!`);
      navigate("/");
    } catch (error) {
      console.error("Error Google Login:", error);
      toast.error(error.message);
    }
  };

  const handleSubmit = async ({ nama, telp, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { 
        displayName: nama,
        photoURL: `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&background=random`,
      });

      // 🔁 Refresh data user di client
      await user.reload();
      const refreshedUser = auth.currentUser;
      console.log("Refreshed User:", refreshedUser);

      // Simpan data user ke Firestore

    await setDoc(doc(db, "users", refreshedUser.uid), {
      uid: refreshedUser.uid,
      namaLengkap: refreshedUser.displayName,
      noTelp: telp,
      email: refreshedUser.email,
      photoURL: refreshedUser.photoURL,
      provider: "email",
      createdAt: new Date(),
    });

      toast.success("Akun berhasil dibuat!");
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return { handleGoogleLogin, handleSubmit };
}
