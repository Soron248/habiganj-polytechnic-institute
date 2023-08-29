import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="max-w-md md:max-w-6xl m-auto px-5 bg-white grid grid-cols-4 gap-4">
      <div className="w-full col-span-3 "></div>
      <Sidebar />
    </main>
  );
}
