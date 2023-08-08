import React from "react";
import AboutItem from "./AboutItem";

const About = () => {
  const data = [
    {
      time: 'February 2005',
      event: 'Company Started',
      desc: 'The creators of the company ...',
    },
    {
      time: 'February 2005',
      event: 'Company Started',
      desc: 'The creators of the company ...',
    },
    {
      time: 'February 2005',
      event: 'Company Started',
      desc: 'The creators of the company ...',
    },
  ]
  return (
    <div>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
      {
          data.map((values, i) => {
            <AboutItem key={i} time={values.time} event={values.event} desc={values.desc}/>
          })
      }       
      </ol>
      {/* {
          data.map((values, i) => {
            <AboutItem key={i} time={values.time} event={values.event} desc={values.desc}/>
          })
        } */}
    </div>
  );
};

export default About;
