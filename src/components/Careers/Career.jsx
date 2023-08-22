import React from "react";

const Career = () => {
  const position = [
    {
      pos: "Manager",
      role: "Manage teams and guide to success",
      sal: "100",
    },
    {
      pos: "Developer",
      role: "Develop websites and other domains",
      sal: "200",
    },
    {
      pos: "Accountant",
      role: "Calculate net profits and returns",
      sal: "100",
    },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-2 m-2">
        <div className="bg-gray-100 rounded-lg px-5 py-3 mx-3">
          <h1 className="text-xl font-bold py-3">
            Apply for a Job at Sarthaki
          </h1>
          <form>
            <div className="mb-3 grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mb-3 grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone No.
                </label>
                <input
                  type="text"
                  id="text"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@sarthaki.com"
                />
              </div>
            </div>

            <div className="mb-3 ">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Why would you like to apply
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div className="mb-3">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="user_avatar"
              >
                Upload Resume
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h1 className="text-xl font-bold py-3">Slots Open</h1>

          <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {position.map((values) => (
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {values.pos}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {values.role}
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        Rs. {values.sal}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
