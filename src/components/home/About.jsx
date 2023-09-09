import React from "react";

const About = ({ about }) => {
  const htmlContent = about.abp_content;
  const textContent = htmlContent
    .replace(/<p[^>]*>/g, "")
    .replace(/<\/p>/g, "");
  return (
    <div className="w-full h-auto bg-gray-50 shadow-lg border rounded-md mt-10">
      <h1 className="w-full bg-slate-200 py-2 pl-5 text-black">পরিচিতি </h1>
      <section className="text-black p-10 text-justify leading-8">
        <div dangerouslySetInnerHTML={{ __html: textContent }} />
      </section>
    </div>
  );
};

export default About;
