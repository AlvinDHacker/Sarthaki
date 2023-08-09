import React from "react";

const ServiceItem = ({ head, desc }) => {
  return (
    <div>
      <div class="bg-white h-full dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow hover:shadow-2xl md:p-10">
        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
          {head}
        </h2>
        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
          {desc}
        </p>
        <a
          href="#"
          class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceItem;
