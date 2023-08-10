import React from "react";
import ServiceItem from "./ServiceItem";

const Service = () => {
  const data = [
    {
      head: "Bookkeeping and Financial Statements :",
      desc: "Our meticulous bookkeeping services ensure that your financial records are maintained accurately and up-to-date. We handle day-to-day transactions, reconciliations, and financial reporting, giving you a clear picture of your business's financial health.",
    },
    {
      head: "Tax Planning and Compliance :",
      desc: "Stay ahead of tax-related challenges with our strategic tax planning services. Our experts analyze your financial situation to optimize your tax position while ensuring full compliance with the latest tax regulations.",
    },
    {
      head: "Payroll Management :",
      desc: "Simplify your payroll processes with our efficient payroll management services. We handle payroll calculations, tax deductions, direct deposits, and statutory compliance, leaving you free to focus on core business activities.",
    },
    {
      head: "Financial Analysis and Reporting :",
      desc: "Gain valuable insights into your business&#39;s performance with our comprehensive financial analysis and reporting services. Our detailed reports help you make informed decisions and identify areas for improvement.",
    },
    {
      head: "AI-Enhanced Auditing :",
      desc: "Experience faster and more accurate audits with our AI-enhanced auditing services. Our advanced tools provide a thorough examination of your financial records, ensuring compliance and identifying potential risks.",
    },
    {
      head: "Compliance and Regulatory Services :",
      desc: "Navigate the complex landscape of regulatory requirements effortlessly with our compliance services. We help you stay compliant with various financial and regulatory frameworks, reducing the risk of penalties and fines.",
    },
    {
      head: "CFO Advisory Services :",
      desc: "Get access to expert financial advice with our CFO advisory services. Our experienced CFOs provide strategic financial planning and guidance to help you achieve your business objectives.",
    },
    {
      head: "Business Advisory Services :",
      desc: "Partner with us for personalized business advisory services. We assist you in setting financial goals, devising growth strategies, and overcoming financial challenges to drive your business forward.",
    },
  ];
  return (
    <div className="">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold md:text-center text-start tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Our Services - Sarthaki Accounting & Compliance Services
          </h1>
          <p class="mb-8 text-lg font-normal md:text-center text-start text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Welcome to Sarthaki Accounting & Compliance Services, your reliable
            partner for end-to-end accounting and compliance solutions. Our team
            of seasoned professionals is committed to providing comprehensive
            financial services tailored to meet the unique needs of your
            business. With a focus on accuracy, efficiency, and compliance, we
            offer a range of services designed to streamline your financial
            processes and keep your business on the path to success.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
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
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="grid lg:grid-cols-3 md:grid-cols-2  py-8 px-4 gap-7 mx-auto ">
          {data.map((values, index) => {
            return (
              <ServiceItem key={index} head={values.head} desc={values.desc} />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Service;
