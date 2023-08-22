import { CheckCircle, Mail, Phone } from "lucide-react";
import React from "react";

const PricingScheme = () => {
  const data = [
    {
      plan: "Basic Package :",
      price: "10",
      
    },
    {
      plan: "Standard Package :",
      price: "20",
    },
    {
      plan: "Advanced Package :",
      price: "30",
    },
  ];
  const stdpln = [
    {
      text: "Monthly Bookkeeping",
    },
    {
        text: "Monthly Financial Statements",
    },
    {
        text: "Tax Filing Assistance",
    },
    {
        text: "Payroll Management - Limited",
    },
    {
        text: "Email Support",
    },
  ];
  return (
    <div>
      <div className="mx-3 grid md:grid-cols-4 gap-4 my-5">
        {data.map((values) => (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {values.plan}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">{values.price}</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              {stdpln.map((values) => (
                <li className="flex space-x-3">
                  <CheckCircle size={20}/>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {values.text}
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
        ))}
        <div>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Customized Solutions :
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">10</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <p className="my-5 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            If your business requires specific services or if you have unique accounting needs, we offer
customizable solutions. Contact our team to discuss your requirements, and we will design a
package that aligns perfectly with your business objectives.
            </p>
            <div className="flex space-x-3">
                <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Contact
            </button>
            <Phone size={35}/>
            <Mail size={35}/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingScheme;
