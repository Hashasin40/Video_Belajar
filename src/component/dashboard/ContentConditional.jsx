import React from "react";
import ContentSemua from "./konten/ContentSemua";
import ContentPemasaran from "./konten/ContentPemasaran";
import ContentDesain from "./konten/ContentDesain";
import ContentPengembangan from "./konten/ContentPengembangan";
import ContentBisnis from "./konten/ContentBisnis";

function ContentConditional({ activeTab }) {
  return (
    <div className="mx-5 my-10 transition duration-400 ease-in-out">
      {activeTab === "semua" && <ContentSemua />}
      {activeTab === "pemasaran" && <ContentPemasaran />}
      {activeTab === "desain" && <ContentDesain />}
      {activeTab === "pengembangan" && <ContentPengembangan />}
      {activeTab === "bisnis" && <ContentBisnis />}
    </div>
  );
}

export default ContentConditional;
