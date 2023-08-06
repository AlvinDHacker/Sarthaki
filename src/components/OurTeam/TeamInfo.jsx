import React from 'react'

const TeamInfo = ({img, name, role}) => {
  return (
    <div className='my-5'>
      <div class="w-full max-w-sm bg-white rounded-lg dark:bg-gray-800">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-[280px] h-[360px] mb-3 shadow-md hover:shadow-2xl object-cover rounded-lg"
            src={img}
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {role}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo
