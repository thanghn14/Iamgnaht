import React from "react";
import ProjectItem from "./ProjectItem";
import crmImg from "../assets/imgs/crm2.png";
import hrmImg from "../assets/imgs/hrm2.png";
import learnImg from "../assets/imgs/elearn.jpg";
import saleImg from "../assets/imgs/sales2.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        As a Frontend developer with experience working on real projects in an
        enterprise environment, I am able to create products that bring great
        experiences for my customers.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={crmImg}
          title="CRM System"
          company="Exsoft JSC"
          tech="Ant Design - ReactJS/Typesript"
        />
        <ProjectItem
          img={hrmImg}
          title="DILIGO HRM"
          company="Diligo Holings"
          tech="ReactJS - MUI"
        />
        <ProjectItem
          img={learnImg}
          title="D Elearning"
          company="Diligo Holings"
          tech="ReactJS - Bootstrap"
        />
        <ProjectItem
          img={saleImg}
          title="Sales website"
          company="FPT Polytechnic"
          tech="ReactJS - Angular - SpringBoot"
        />
      </div>
    </div>
  );
};

export default Projects;
