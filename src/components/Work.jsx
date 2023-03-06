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
      "Exsoft là startup công nghệ trong lĩnh vực Chăm sóc sức khỏe và Giáo dục sớm. Các sản phẩm của Exsoft đều tập trung vào việc đem lại giá trị cho khách hàng và xã hội, tạo ra giải pháp hữu ích cho hàng triệu cha mẹ trong quá trình chăm sóc và giáo dục con cái.",
  },
  {
    id: 2,
    time: "09/2022",
    title: "Diligo Holdings",
    duration: "9 month",
    position: "Frontend Developer",
    details:
      "DILIGO HOLDINGS là công ty 100% vốn của người Việt, chuyên sản xuất, xuất khẩu, gia công và phân phối hàng tiêu dùng tại Việt Nam từ những năm 2006.",
  },
  {
    id: 3,
    time: "09/2019",
    title: "FPT Polytechnic",
    duration: "3 year",
    position: "Fullstack Developer",
    details:
      "Cao đẳng FPT Polytechnic là trường đào tạo trong lòng doanh nghiệp với đa ngành nghề, đa lĩnh vực. FPT Polytechnic ra đời với mong muốn đem đến cho người học những giá trị đào tạo thực tế đúng với triết lý “Thực học – Thực nghiệp”.",
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
