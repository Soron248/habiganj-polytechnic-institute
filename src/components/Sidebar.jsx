import Image from "next/image";
import React from "react";
import sir from "../../public/sir.jpeg";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col  items-center md:pl-5 text-black">
      <div className="w-full shadow-xl border rounded-md mb-5">
        <h1 className="text-center py-2 bg-slate-200">অধ্যক্ষ </h1>
        <Image src={sir} alt="sir" className="w-20 h-20 m-auto my-8" />
        <h5 className="w-full text-justify p-5">
          শিক্ষা মন্ত্রণালয়, কারিগরি ও মাদ্রাসা বিভাগের অধীনে কারিগরি শিক্ষা
          অধিদপ্তর কর্তৃক পরিচালিত গৌরবময় প্রযুক্তি ভিত্তিক শিক্ষা প্রতিষ্ঠান।{" "}
        </h5>
      </div>
      <div className="w-full shadow-xl border rounded-md mb-5">
        <h1 className="text-center py-2 bg-slate-200">অধ্যক্ষ </h1>
        <div className=" flex flex-col  items-start gap-5 py-5 px-8">
          <Link
            className="border-b-2 border-gray-200 w-full py-1 hover:text-blue-500"
            href={"http://www.educationboardresults.gov.bd/"}
          >
            শিক্ষা বোর্ডের ফলাফল{" "}
          </Link>
          <Link
            className="border-b-2 border-gray-200 w-full py-1 hover:text-blue-500"
            href={"https://teachers.gov.bd/"}
          >
            ডিজিটাল কন্টেন্ট
          </Link>
          <Link
            className="border-b-2 border-gray-200 w-full py-1 hover:text-blue-500"
            href={"https://moedu.gov.bd/"}
          >
            শিক্ষা মন্ত্রণালয়
          </Link>
          <Link
            className="border-b-2 border-gray-200 w-full py-1 hover:text-blue-500"
            href={"http://www.nctb.gov.bd/"}
          >
            এনসিটিবি
          </Link>
        </div>
      </div>
      <div className="w-full shadow-xl border rounded-md mb-5">
        <h1 className="text-center py-2 bg-slate-200">ভিজিটর </h1>
        <h5 className="w-fit bg-yellow-500 m-auto text-center text-4xl font-extrabold my-5">
          004839
        </h5>
      </div>
    </div>
  );
};

export default Sidebar;
