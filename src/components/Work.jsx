import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    id: 1,
    time: "11/2022",
    title: "Exsoft JSC",
    duration: "3 month",
    position: "Frontend Developer",
    details:
      "Participate in the development and maintenance of CRM and Landingpage systems using Ant design, ReactJS/Typescript",
  },
  {
    id: 2,
    time: "11/2021",
    title: "Diligo Holdings",
    duration: "9 month",
    position: "Frontend Developer",
    details:
      "Diligo holdings' human resource management system and online learning system uses ReactJS",
  },
  {
    id: 3,
    time: "09/2019",
    title: "FPT Polytechnic",
    duration: "3 year",
    position: "Fullstack Developer",
    details:
      "Study and work as a professional Developer",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item) => {
        return <WorkItem key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Work;
