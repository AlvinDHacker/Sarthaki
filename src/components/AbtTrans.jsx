import React from "react";
import img from '../assets/image.jpeg'

const AbtTrans = () => {
  return (
    <div>
      <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        About Transformatrix
      </h1>
      <div className="grid md:grid-cols-2">
        <div className="mt-10 mx-5 pt-10">
          <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">
            Transformatrix Global Pvt Ltd is the Collaboration of 4 like-minded
            entrepreneurs who have decided to take the world as a playground to
            excel their skills in becoming a problem solving catalyst and create
            huge renaissance in the way business are managed in India &
            worldwide.
          </p>
          <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">
            Professional Management Team with diverse Corporate, Consulting &
            Technology Industry experience of 100+ years.
          </p>
          <p class="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
            Employee strength: 100+ with diverse experience backgrounds.
            </p>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Know More
          </button>
        </div>
        <div className="m-5 rounded-md">
            <img src={img}/>
        </div>
      </div>
    </div>
  );
};

export default AbtTrans;
