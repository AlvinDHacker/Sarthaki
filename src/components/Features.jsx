import React from "react";
import { Briefcase, PiggyBank, Users2 } from "lucide-react";

const Features = () => {
  return (
    <>
      <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Our Features
      </h1>
      <p class="mb-3 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        Team Transformatrix Global Pvt Ltd is here to create a 360%
        Transformation by empowering its founders/CXOs and the people in the
        team – resulting in complete Business and People Transformation.
      </p>
      <div className="border w-[75%] mx-auto mb-4" />
      <div className="grid md:grid-cols-3 text-center">
        <div class="max-w-sm p-4 bg-white rounded-lg dark:bg-gray-800">
          <Briefcase className="mx-auto" size={50} />
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              Business Transformation
            </h5>
          </a>
        </div>
        <div class="max-w-sm p-4 bg-white rounded-lg dark:bg-gray-800">
          <PiggyBank className="mx-auto" size={50} />
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              Finance Transformation
            </h5>
          </a>
        </div>
        <div class="max-w-sm p-4 bg-white rounded-lg dark:bg-gray-800">
          <Users2 className="mx-auto" size={50} />
          <a href="#">
            <h5 class="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              HR Transformation
            </h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default Features;
