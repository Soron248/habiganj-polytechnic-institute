"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Notice = ({ notice }) => {
  return (
    <div className="w-full h-auto bg-gray-50 shadow-lg border rounded-md">
      <h1 className="w-full bg-slate-200 py-2 pl-5 text-black">নোটিস বোর্ড </h1>
      <section className="text-black p-10">
        {notice &&
          notice.map((data) => {
            return (
              <ul key={data.id}>
                <li className="my-2">
                  <Link
                    href={`https://dschool2.appsosis.com/${data.uploadfile}`}
                    className="text-blue-600"
                  >
                    {data.name} <span className="text-black">26/08/2023</span>
                  </Link>
                </li>
              </ul>
            );
          })}
      </section>
    </div>
  );
};

export default Notice;
