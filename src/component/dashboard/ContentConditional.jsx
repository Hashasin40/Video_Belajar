import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";

import ContentSemua from "./konten/ContentSemua";
import ContentPemasaran from "./konten/ContentPemasaran";
import ContentDesain from "./konten/ContentDesain";
import ContentPengembangan from "./konten/ContentPengembangan";
import ContentBisnis from "./konten/ContentBisnis";

function ContentConditional({ activeTab }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const snapshot = await getDocs(collection(db, "courses"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  console.log("ALL COURSES:", courses);
console.log("FILTER BISNIS:", courses.filter(d => d.category === "bisnis"));
console.log("activeTab:", activeTab);

  return (
    <div className="mx-5 my-10">
      {activeTab === "semua" && <ContentSemua data={courses} />}
      {activeTab === "pemasaran" && (
        <ContentPemasaran data={courses.filter(d => d.category === "pemasaran")} />
      )}
      {activeTab === "desain" && (
        <ContentDesain data={courses.filter(d => d.category === "desain")} />
      )}
      {activeTab === "pengembangan" && (
        <ContentPengembangan data={courses.filter(d => d.category === "pengembangan")} />
      )}
      {activeTab === "bisnis" && (
        <ContentBisnis data={courses.filter(d => d.category === "bisnis")} />
      )}
    </div>
  );
}

export default ContentConditional;
