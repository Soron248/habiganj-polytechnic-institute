"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const CommonDataTable = ({ data, asset }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [pdf, setPdf] = useState("");
  return (
    <>
      <div className="overflow-x-auto my-10 ">
        <Paper className="w-full z-0">
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" className="font-bold">
                    ক্র,নং
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                    শিরোনাম
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                    প্রকাশের তারিখ
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                    প্রক্রিয়া
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((data, index) => {
                    const dateString = data.created_at;
                    const date = new Date(dateString);

                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();

                    const formattedDate = `${day}/${month}/${year}`;
                    const path = asset + "/" + data.uploadfile;
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell align="center">{data.id}</TableCell>
                        <TableCell align="center">{data.name}</TableCell>
                        <TableCell align="center">{formattedDate}</TableCell>
                        <TableCell align="center">
                          <a
                            onClick={() => setPdf(path)}
                            className="cursor-pointer"
                          >
                            <GrDocumentPdf className="w-fit m-auto text-3xl" />
                          </a>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 15, 30]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

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
