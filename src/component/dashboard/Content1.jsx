import { Link } from "react-router-dom";
import React from "react";
import BgContent from "../../assets/bg_content1.jpg"; 
import ButtonLink from "../button/ButtonLink";

function Content1() {
    return (
        <>
        <div>
            <div className=" text-white p-4 mx-5 rounded-lg my-5 text-center"
                style={{
                    backgroundImage: `url(${BgContent})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backgroundBlendMode: 'darken',
            }}>
                <div className="max-w-3xl mx-auto my-4">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight break-words font-sans">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>
                    <small className="">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</small>
                        <div className="mt-3 group">
                            <ButtonLink to="/category" className="  text-white bg-[#3ECF4C]  group-hover:bg-[#FFFFFF]  transition duration-700">
                            <span className="group-hover:text-[#3ECF4C] text-size">Temukan Video Course untuk Dipelajari!</span>
                            </ButtonLink>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Content1