import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    id: 1,
    time: "11/2022",
    title: "Diligo Holdings",
    duration: "3 month",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni est ipsum delectus voluptatibus soluta dolorem molestiae ipsam, sit, velit non corrupti ullam! Incidunt vero, error quisquam eveniet iure quae.",
  },
  {
    id: 2,
    time: "09/2022",
    title: "Diligo Holdings",
    duration: "9 month",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni est ipsum delectus voluptatibus soluta dolorem molestiae ipsam, sit, velit non corrupti ullam! Incidunt vero, error quisquam eveniet iure quae.",
  },
  {
    id: 3,
    time: "09/2022",
    title: "Diligo Holdings",
    duration: "9 month",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni est ipsum delectus voluptatibus soluta dolorem molestiae ipsam, sit, velit non corrupti ullam! Incidunt vero, error quisquam eveniet iure quae.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item) => {
        return <WorkItem key={item.time} data={item} />;
      })}
    </div>
  );
};

export default Work;
