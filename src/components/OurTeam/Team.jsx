import React from "react";
import pers1 from '../../assets/person1.webp'
import pers2 from '../../assets/person2.jpeg'
import pers3 from '../../assets/person3.jpeg'
import pers4 from '../../assets/person4.jpeg'
import TeamInfo from "./TeamInfo";

const OurTeam = () => {
  const leaders = [
    {
      img: pers1,
      name: 'Agnel Dsouza',
      role: 'CEO',
    },
    {
      img: pers2,
      name: 'Person 2',
      role: 'CEO',
    },
    {
      img: pers3,
      name: 'Person 3',
      role: 'CEO',
    },
    {
      img: pers4,
      name: 'Person 4',
      role: 'CEO',
    },
  ]
  const managers = [
    {
      img: pers1,
      name: 'Agnel Dsouza',
      role: 'CEO',
    },
    {
      img: pers2,
      name: 'Person 2',
      role: 'CEO',
    },
    {
      img: pers3,
      name: 'Person 3',
      role: 'CEO',
    },
    {
      img: pers4,
      name: 'Person 4',
      role: 'CEO',
    },
  ]
  const supervisors = [
    {
      img: pers1,
      name: 'Agnel Dsouza',
      role: 'CEO',
    },
    {
      img: pers2,
      name: 'Person 2',
      role: 'CEO',
    },
    {
      img: pers3,
      name: 'Person 3',
      role: 'CEO',
    },
    {
      img: pers4,
      name: 'Person 4',
      role: 'CEO',
    },
  ]
  return (
    <>
    {/* <div className="font-thin text-2xl text-center">
      The building bricks to our company's success are the ones who work tirelessly for it's success
    </div> */}
    <div className="m-5"/>
    <h1 className="text-3xl text-center font-bold">Our Founders</h1>
    <div className="grid md:grid-cols-4">
      
      {
        leaders.map((values, i) => {
          return <TeamInfo key={i} name={values.name} img={values.img} role={values.role}/>
        })
      }
    </div>
    <h1 className="text-3xl text-center font-bold">Our Managers</h1>
    <div className="grid md:grid-cols-4">
      {
        managers.map((values, i) => {
          return <TeamInfo key={i} name={values.name} img={values.img} role={values.role}/>
        })
      }
    </div>
    <h1 className="text-3xl text-center font-bold">Our Supervisors</h1>
    <div className="grid md:grid-cols-4">
      {
        supervisors.map((values, i) => {
          return <TeamInfo key={i} name={values.name} img={values.img} role={values.role}/>
        })
      }
    </div>
    </>
  );
};

export default OurTeam;
