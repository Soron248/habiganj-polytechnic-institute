"use client";
import CommonDataTable from "@/components/CommonDataTable";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [asset, setAsset] = useState("");

  const api = "https://dschool2.appsosis.com/api/documents/class-wise-student";

  const fetchapi = async (url) => {
    const req = await fetch(url);
    const res = await req.json();
    setData(res.data);
    setAsset(res.asseturl);
  };

  useEffect(() => {
    fetchapi(api);
  }, []);
  return (
    <main className="max-w-sm md:max-w-6xl m-auto px-5 bg-white flex flex-col md:grid md:grid-cols-4 gap-4">
      <div className="w-full md:col-span-3 ">
        <CommonDataTable data={data} asset={asset} />
      </div>
      <Sidebar />
    </main>
  );
};

export default page;
