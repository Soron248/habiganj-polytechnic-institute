"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

const page = ({ searchParams }) => {
  let pdf = `${searchParams.asset}/${searchParams.path}`;
  return (
    <main className="max-w-md md:max-w-6xl m-auto px-5 bg-white flex flex-col md:grid md:grid-cols-4 gap-4">
      <div className="w-full md:col-span-3 flex flex-col justify-center">
        <object
          data={pdf}
          type="application/pdf"
          className="w-full h-screen mb-10"
        >
          <embed src={pdf} className="w-full h-screen" title="PDF " />
          {/* <p>
            This browser does not support PDFs. Please download the PDF to view
            it:
          </p> */}
        </object>

        <Link href={pdf} className="btn mb-5">
          Open PDF
        </Link>
      </div>
      <Sidebar />
    </main>
  );
};

export default page;
