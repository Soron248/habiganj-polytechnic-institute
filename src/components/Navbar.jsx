"use client";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { MdNewspaper } from "react-icons/md";
import { BiImage } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className=" md:static max-w-sm  md:max-w-6xl  h-auto md:h-24 m-auto bg-white px-5 py-1 ">
        <div className="navbar  bg-cyan-900 text-white mb-5">
          <div className=" w-full flex justify-center flex-col items-center">
            <span
              className="md:hidden cursor-pointer my-3"
              onClick={toggleMenu}
            >
              {menuOpen ? <ImCross /> : <GiHamburgerMenu />}
            </span>
            <div
              className={`md:flex ${
                menuOpen ? "block" : "hidden"
              }  flex flex-col justify-center items-center md:justify-between  md:flex-row w-full md:items-stretch `}
            >
              <div className="dropdown dropdown-start my-2 md:my-0 mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <Link href="/">
                    <AiFillHome />
                  </Link>
                  <Link
                    href="/"
                    className=" md:block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {" "}
                    মূল পেইজ
                  </Link>
                </label>
              </div>
              <div className="dropdown dropdown-start my-2 md:my-0 mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <AiOutlineMenu />
                  <span className=" flex">
                    আমাদের সম্পর্কে <IoIosArrowDown className="ml-2" />
                  </span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[5] p-2 shadow bg-white text-black rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href={"/teacher"} onClick={() => setMenuOpen(false)}>
                      শিক্ষক গণের তালিকা
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/committee"}
                      onClick={() => setMenuOpen(false)}
                    >
                      কর্মকর্তা/কর্মচারী তালিকা
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-start my-2 md:my-0 mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <Link href={"/result"}>
                    <MdNewspaper />
                  </Link>

                  <Link
                    href={"/result"}
                    className=" md:block"
                    onClick={() => setMenuOpen(false)}
                  >
                    ফলাফল
                  </Link>
                </label>
              </div>
              <div className="dropdown dropdown-start my-2 md:my-0 mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <PiStudentBold />
                  <span className=" flex">
                    ছাত্র-ছাত্রী <IoIosArrowDown className="ml-2" />
                  </span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[5] p-2 shadow bg-white text-black rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href={"/students"} onClick={() => setMenuOpen(false)}>
                      ছাত্র-ছাত্রী{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/class-wise-students"}
                      onClick={() => setMenuOpen(false)}
                    >
                      ক্লাস অনুযায়ী{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-start my-2 md:my-0 mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <BiFoodMenu />
                  <span className="flex">
                    রোটিন <IoIosArrowDown className="ml-2" />
                  </span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[5] p-2 shadow bg-white text-black rounded-box w-52 mt-4"
                >
                  <li>
                    <Link
                      href={"/class-routine"}
                      onClick={() => setMenuOpen(false)}
                    >
                      ক্লাস রুটিন{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/exam-routine"}
                      onClick={() => setMenuOpen(false)}
                    >
                      পরীক্ষা রুটিন{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-start my-2 md:my-0 mx-1">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <Link href={"/gallery"}>
                    <BiImage />
                  </Link>
                  <Link
                    href={"/gallery"}
                    className=" md:block"
                    onClick={() => setMenuOpen(false)}
                  >
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
