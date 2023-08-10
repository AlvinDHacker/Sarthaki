import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  const data = [
    {
      time: "February 2005",
      event: "Company Started",
      desc: "The creators of the company ...",
    },
    {
      time: "February 2005",
      event: "Company Started",
      desc: "The creators of the company ...",
    },
    {
      time: "February 2005",
      event: "Company Started",
      desc: "The creators of the company ...",
    },
  ];
  return (
    <div className="m-10">
      <ol class="items-center sm:flex">
        {data.map((values, i) => {
          return (
            <AboutItem
              key={i}
              time={values.time}
              event={values.event}
              desc={values.desc}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default About;
