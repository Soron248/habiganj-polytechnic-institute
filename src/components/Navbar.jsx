"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { IoHardwareChipOutline } from "react-icons/io5";
import { BiImage } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
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
                  <AiFillHome />
                  <Link href="/"> মূল পেইজ</Link>
                </label>
              </div>
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <AiOutlineMenu />
                  আমাদের সম্পর্কে
                  <IoIosArrowDown />
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
                  <BiFoodMenu />
                  <Link href={"/result"}>ফলাফল</Link>
                </label>
              </div>
              <div className="dropdown dropdown-start mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <AiOutlineMenu />
                  ছাত্র-ছাত্রী
                  <IoIosArrowDown />
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
                  <a>রোটিন</a>
                  <IoIosArrowDown />
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
                  <BiImage />
                  <Link href={"/gallery"}>ফটো গ্যালারী</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
