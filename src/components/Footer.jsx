"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="max-w-md md:max-w-6xl  m-auto bg-cyan-900 flex flex-col md:flex-row justify-between items-center text-white p-10">
        <div className="my-5">
          <Image src={logo} alt="logo" className="w-52" />
        </div>
        <div className="my-5 text-center md:text-left">
          <h1 className="text-xl font-bold mb-5">মেনো</h1>
          <div className="font-thin">
            <p>টেকনোলজি</p>
            <p>রোটিন</p>
            <p>ফটো গেলারী</p>
            <p>শিক্ষক গণের তালিকা</p>
          </div>
        </div>
        <div className="my-5 text-center md:text-left">
          <h1 className="text-xl font-bold mb-5 ">বিশেষ লিংক</h1>
          <div className="font-thin">
            <p>কারিগরি শিক্ষা বোর্ড</p>
            <p>কারিগরি শিক্ষা অধিদপ্তর</p>
            <p>শিক্ষা মন্ত্রণালয়</p>
            <p>বিডি জবস</p>
          </div>
        </div>
        <div className="my-5 text-center md:text-left">
          <div>
            <h1 className="text-xl font-bold mb-5">যোগাযোগ</h1>
            <div className="font-thin">
              <p className="flex justify-center items-center md:justify-start">
                <AiFillHome className="mr-5" />
                হবিগঞ্জ পলিটেকনিক ইন্সটিটিউট,
              </p>
              <p>গোপায়া, হবিগঞ্জ</p>
              <p className="flex justify-center items-center md:justify-start">
                <FiMail className="mr-5" /> info@hpi.gov.bd
              </p>
              <p className="flex justify-center items-center md:justify-start">
                <AiOutlinePhone className="mr-5" /> + 880123478
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md md:max-w-6xl h-16 m-auto bg-cyan-900 border-t-2 border-cyan-950 text-white flex justify-between items-center px-5">
        <h2>
          Design&Developed by{" "}
          <Link
            href={"https://appsosis.com/"}
            className="border-b-2 border-dotted"
          >
            AppsOsis
          </Link>
        </h2>
        <div className="flex">
          <h3>
            <BiLogoFacebook />{" "}
          </h3>
          <h3>
            <AiOutlineTwitter />{" "}
          </h3>
          <h3>
            <FiMail />{" "}
          </h3>
          <h3>
            <BiLogoLinkedin />{" "}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
