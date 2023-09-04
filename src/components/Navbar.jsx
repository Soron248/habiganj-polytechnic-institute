"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { MdNewspaper } from "react-icons/md";
import { BiImage } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="max-w-md md:max-w-6xl h-24 m-auto bg-white px-5 py-1">
        <div className="navbar bg-cyan-900 text-white">
          <div className="flex justify-center flex-1 px-4">
            <div className="flex justify-between w-full items-stretch">
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <Link href="/">
                    <AiFillHome />
                  </Link>
                  <Link href="/" className="hidden md:block">
                    {" "}
                    মূল পেইজ
                  </Link>
                </label>
              </div>
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <AiOutlineMenu />
                  <span className="hidden md:flex">
                    আমাদের সম্পর্কে <IoIosArrowDown className="ml-2" />
                  </span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-white text-black rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href={"/teacher"}>শিক্ষক গণের তালিকা</Link>
                  </li>
                  <li>
                    <Link href={"/committee"}>কর্মকর্তা/কর্মচারী তালিকা</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <Link href={"/result"}>
                    <MdNewspaper />
                  </Link>

                  <Link href={"/result"} className="hidden md:block">
                    ফলাফল
                  </Link>
                </label>
              </div>
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <PiStudentBold />
                  <span className="hidden md:flex">
                    ছাত্র-ছাত্রী <IoIosArrowDown className="ml-2" />
                  </span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-white text-black rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href={"/students"}>ছাত্র-ছাত্রী </Link>
                  </li>
                  <li>
                    <Link href={"/class-wise-students"}>ক্লাস অনুযায়ী </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <BiFoodMenu />
                  <span className="hidden md:flex">
                    রোটিন <IoIosArrowDown className="ml-2" />
                  </span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-white text-black rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href={"/class-routine"}>ক্লাস রুটিন </Link>
                  </li>
                  <li>
                    <Link href={"/exam-routine"}>পরীক্ষা রুটিন </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <Link href={"/gallery"}>
                    <BiImage />
                  </Link>
                  <Link href={"/gallery"} className="hidden md:block">
                    ফটো গ্যালারী
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
