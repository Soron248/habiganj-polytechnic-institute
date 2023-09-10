import React, { useEffect, useState } from "react";
import Link from "next/link";

const Notice = ({ notice }) => {
  // Store the current index of the notice being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Create an interval to scroll the notices every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.max(notice.length, 1)
      );
    }, 3000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [notice]);

  // Calculate the indices for the 3 visible data items
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % Math.max(notice.length, 1),
    (currentIndex + 2) % Math.max(notice.length, 1),
  ];

  return (
    <div className="w-full h-auto bg-gray-50 shadow-lg border rounded-md">
      <h1 className="w-full bg-slate-200 py-2 pl-5 text-black">নোটিস বোর্ড</h1>
      <section className="text-black p-10 max-h-96 overflow-hidden relative">
        {notice && notice.length > 0 && (
          <ul className="notice-list">
            {visibleIndices.map((index) => {
              const data = notice[index];
              if (!data) return null; // Handle the case when there are fewer than 3 data items

              const dateString = data.created_at;
              const date = new Date(dateString);

              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();

              const formattedDate = `${day}/${month}/${year}`;

              return (
                <li key={data.id} className="visible">
                  <Link
                    href={`https://dschool2.appsosis.com/${data.uploadfile}`}
                    className="text-blue-600"
                  >
                    {data.name}{" "}
                    <span className="text-black">{formattedDate}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <button type="button" className="btn-sm btn-outline btn-info m-5">
        <Link href={"/notice"}>সকল নোটিশ</Link>
      </button>
    </div>
  );
};

export default Notice;
