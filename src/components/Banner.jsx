import React from "react";
import Image from "next/image";
import bnr1 from "../../public/bnr1.jpg";
import bnr2 from "../../public/bnr2.jpg";
import bnr3 from "../../public/bnr3.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-sm md:max-w-6xl   h-56 m-auto bg-white px-5 py-2">
        <section className="w-full h-full">
          <div className="carousel w-full h-full">
            <div id="slide1" className="carousel-item relative w-full">
              <Image src={bnr1} className="w-full" alt="bnr" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn btn-circle bg-transparent border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-transparent border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image src={bnr2} className="w-full" alt="bnr" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-transparent border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle bg-transparent border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Image src={bnr3} className="w-full" alt="bnr" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-transparent border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-transparent border-none"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
