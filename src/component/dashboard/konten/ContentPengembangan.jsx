import React from "react";
import ButtonView from "../../button/ButtonView";

function ContentPengembangan({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {data.map(course => (
        <div
        className="group relative bg-white rounded-xl p-4 flex flex-col
        shadow transition-all duration-500 hover:-translate-y-3"
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-xl
          border-2 border-transparent
          group-hover:border-emerald-500
          transition-all duration-500"
        />

          <img
            src={course.thumbnail}
            alt={course.title}
            className="rounded-lg mb-3"
          />
          <h5 className="font-semibold line-clamp-2">{course.title}</h5>
          <p className="line-clamp-3 text-gray-500">{course.description}</p>
          <div className="mt-2 flex flex-row justify-between items-center">
            <div className="mt-4 flex flex-row">
              <p className="text-sm">
                <span className="text-gray-500">⭐ {course.rating ?? "N/A"} •{" "}</span>
                <span className="font-semibold text-green-600">{course.price
                  ? `Rp ${course.price.toLocaleString()}`
                  : "Harga belum tersedia"}
                </span>
              </p>
            </div>
            <ButtonView/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentPengembangan;
