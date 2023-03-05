import React from "react";
import ProjectItem from "./ProjectItem";
import crmImg from "../assets/imgs/crm.png";
import hrmImg from "../assets/imgs/hrm.png";
import learnImg from "../assets/imgs/elearning.png";
import saleImg from "../assets/imgs/sales2.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsam ut
        maiores mollitia nostrum dicta voluptatem quam rem ex at impedit ipsa
        quo, reiciendis qui fugiat quas non, quos praesentium?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={crmImg} title='CRM System'/>
        <ProjectItem img={hrmImg} title='HRM System'/>
        <ProjectItem img={learnImg} title='Elearning'/>
        <ProjectItem img={saleImg} title='Sales website'/>
      </div>
    </div>
  );
};

export default Projects;
