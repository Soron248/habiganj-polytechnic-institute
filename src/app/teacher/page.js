"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import lol from "../../../public/sir.jpeg";
import React, { useEffect, useState } from "react";

const page = () => {
  const [teacher, setTeacher] = useState([]);
  const [asset, setAsset] = useState("");

  const api = "https://dschool2.appsosis.com/api/teacher";

  const fetchapi = async (url) => {
    const req = await fetch(url);
    const res = await req.json();
    setTeacher(res.data);
    setAsset(res.asseturl);
  };

  useEffect(() => {
    fetchapi(api);
  }, []);
  return (
    <main className="max-w-md md:max-w-6xl m-auto px-5 bg-white grid grid-cols-4 gap-4">
      <div className="w-full col-span-3 flex gap-5">
        {teacher &&
          teacher.map((data) => {
            return (
              <div
                className="w-64 h-72 bg-gray-100 shadow-lg rounded-md "
                key={data.id}
              >
                <Image
                  src={asset + "/" + data.uploadfile}
                  alt="teacher"
                  className="w-full h-40"
                  width={500}
                  height={500}
                />
                <div className="text-black flex flex-col justify-center items-center">
                  <h1 className="font-bold my-3">{data.name}</h1>
                  <p>Phone: {data.mobile}</p>
                  <p>Email: {data.email}</p>
                </div>
              </div>
            );
          })}
      </div>
      <Sidebar />
    </main>
  );
};

export default page;
