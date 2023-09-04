import Link from "next/link";
import React from "react";
import { GrDocumentPdf } from "react-icons/gr";

const CommonDataTable = ({ data, asset }) => {
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

                return (
                  <tr className="border-none" key={data.id}>
                    <th>{data.id}</th>
                    <td>{data.name}</td>
                    <td>{formattedDate}</td>

                    <td>
                      <Link
                        href={{
                          pathname: "/pdf",
                          query: {
                            asset: asset,
                            path: data.uploadfile,
                          },
                        }}
                      >
                        <GrDocumentPdf className="w-fit m-auto text-3xl" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommonDataTable;
