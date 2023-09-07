"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Notice = ({ notice }) => {
  return (
    <div className="w-full h-auto bg-gray-50 shadow-lg border rounded-md">
      <h1 className="w-full bg-slate-200 py-2 pl-5 text-black">নোটিস বোর্ড </h1>
      <section className="text-black p-10 max-h-96 overflow-scroll">
        {notice &&
          notice.map((data) => {
            const dateString = data.created_at;
            const date = new Date(dateString);

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            const formattedDate = `${day}/${month}/${year}`;
            return (
              <ul key={data.id}>
                <li className="my-2">
                  <Link
                    href={`https://dschool2.appsosis.com/${data.uploadfile}`}
                    className="text-blue-600"
                  >
                    {data.name}{" "}
                    <span className="text-black">{formattedDate}</span>
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
