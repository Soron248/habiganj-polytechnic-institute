"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sir from "../../../public/sir.jpeg";
import Link from "next/link";

const page = () => {
  const [album, setAlbum] = useState([]);
  const [asset, setAsset] = useState("");

  const api = "https://dschool2.appsosis.com/api/gallery";

  const fetchapi = async (url) => {
    const req = await fetch(url);
    const res = await req.json();
    setAlbum(res.data);
    setAsset(res.asseturl);
  };

  useEffect(() => {
    fetchapi(api);
  }, []);
  return (
    <main className="max-w-sm md:max-w-6xl m-auto px-5 bg-white flex flex-col md:grid md:grid-cols-4 gap-4">
      <div className="w-full md:col-span-3 flex flex-col items-center md:items-start md:flex-row">
        {album &&
          album.map((data) => {
            return (
              <div
                className="w-56  bg-slate-100 h-fit rounded-lg"
                key={data.gl_id}
              >
                <Link
                  href={{
                    pathname: `/gallery/album`,
                    query: {
                      id: JSON.stringify(data.gl_id),
                    },
                  }}
                >
                  <Image
                    src={asset + "/" + data.gl_featured}
                    alt="album-logo"
                    width={500}
                    height={500}
                  />
                </Link>
                <h1 className="text-center text-lg py-2 text-black">
                  {data.gl_name}
                </h1>
              </div>
            );
          })}
      </div>
      <Sidebar />
    </main>
  );
};

export default page;
