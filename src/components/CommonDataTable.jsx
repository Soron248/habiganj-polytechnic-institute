"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";

const CommonDataTable = ({ data, asset }) => {
  const [pdf, setPdf] = useState("");
  return (
    <>
      <div className="overflow-x-auto my-10">
        <table className="table text-black">
          {/* head */}
          <thead className="text-black text-sm text-center">
            <tr>
              <th>ক্র,নং</th>
              <th>শিরোনাম</th>
              <th>প্রকাশের তারিখ</th>
              <th>প্রক্রিয়া</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            {data &&
              data.map((data) => {
                const dateString = data.created_at;
                const date = new Date(dateString);

                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                const formattedDate = `${day}/${month}/${year}`;
                const path = asset + "/" + data.uploadfile;
                return (
                  <tr className="border-none" key={data.id}>
                    <th>{data.id}</th>
                    <td>{data.name}</td>
                    <td>{formattedDate}</td>

                    <td>
                      <a
                        onClick={() => setPdf(path)}
                        className="cursor-pointer"
                      >
                        <GrDocumentPdf className="w-fit m-auto text-3xl" />
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {pdf && (
          <div>
            <object
              data={pdf}
              type="application/pdf"
              className="w-full h-screen my-10"
            >
              <embed src={pdf} className="w-full h-screen" title="PDF " />
            </object>

            <button className="btn w-full mb-5">
              <Link href={pdf}>Open PDF</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CommonDataTable;
