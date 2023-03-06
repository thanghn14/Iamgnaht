import React from "react";

const ProjectItem = ({ img, title, company, tech }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-100 to-[#001b5e]/70">
      <img src={img} alt="" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-while tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-[#001b5e] font-bold cursor-pointer text-lg">{company}</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
