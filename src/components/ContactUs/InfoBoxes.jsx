import React from 'react'
import { FaPhone, FaAddressBook, FaClock, FaEnvelope } from 'react-icons/fa'

export default function InfoBoxes() {
    const contactInfoBoxes1 = [
        {
            img: <FaAddressBook className='text-blue-500 text-4xl' />,
            title: "Head Office Address",
            content: "123 Main Street, Cityville, State, ZIP Code"
        },
        {
            img: <FaPhone className='text-blue-500 text-4xl' />,
            title: "Call Us",
            content: "+1 (555) 123-4567"
        },
        {
            img: <FaEnvelope className='text-blue-500 text-4xl' />,
            title: "Email Us",
            content: "info@sarthakiaccounting.com"
        }
    ];
    const contactInfoBoxes2 = [
        {
            img: <FaAddressBook className='text-blue-500 text-4xl' />,
            title: "Branch Office Address",
            content: "456 Market Avenue, Townsville, State, ZIP Code"
        },
        {
            img: <FaPhone className='text-blue-500 text-4xl' />,
            title: "Call Us",
            content: "+1 (555) 987-6543"
        },
        {
            img: <FaEnvelope className='text-blue-500 text-4xl' />,
            title: "Email Us",
            content: "branch@sarthakiaccounting.com"
        }
    ];
    return (
        <div className='sm:flex-row sm:justify-center sm:items-center flex-col flex gap-10'>
            <div className="flex flex-col gap-10">
                {
                    contactInfoBoxes1.map((item, index) => {
                        return <div key={index} className="bg-white border-gray-200 shadow hover:shadow-2xl info-box">
                            {item.img}
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>;
                    })
                }
            </div>
            <div className="flex flex-col gap-10">
                {
                    contactInfoBoxes2.map((item, index) => {
                        return <div key={index} className="bg-white border-gray-200 shadow hover:shadow-2xl info-box">
                            {item.img}
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>;
                    })
                }
            </div>
        </div>
    )
}
