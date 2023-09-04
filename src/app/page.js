"use client";
import Sidebar from "@/components/Sidebar";
import About from "@/components/home/About";
import Notice from "@/components/home/Notice";
import { useEffect, useState } from "react";

export default function Home() {
  const [notice, setNotice] = useState([]);
  const [about, setAbout] = useState("");

  const api = "https://dschool2.appsosis.com/api/home";

  const fetchapi = async (url) => {
    const req = await fetch(url);
    const res = await req.json();
    setNotice(res.data.notice);
    setAbout(res.data.about);
  };

  useEffect(() => {
    fetchapi(api);
  }, []);
  return (
    <main className="max-w-md md:max-w-6xl m-auto px-5 bg-white flex flex-col md:grid md:grid-cols-4 gap-4">
      <div className="w-full md:col-span-3 ">
        <Notice notice={notice} />
        <About about={about} />
      </div>
      <Sidebar />
    </main>
  );
}
