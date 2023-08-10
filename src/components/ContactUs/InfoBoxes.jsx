import React from 'react'
import { FaPhone, FaClock, FaAddressBook, FaEnvelope } from 'react-icons/fa'

export default function InfoBoxes() {
    return (
        <div className='sm:flex-row sm:justify-center sm:items-center flex-col flex gap-10'>
            <div className="flex flex-col gap-10">
                <div className="bg-white border-gray-200 shadow hover:shadow-2xl info-box">
                    <FaAddressBook className='text-blue-500 text-4xl' />
                    <h3>Address</h3>
                    <p>Bandra Worli Sealink,<br />HELLO, MUM-101</p>
                </div>
                <div className="bg-white border-gray-200 shadow hover:shadow-2xl info-box">
                    <FaPhone className='text-blue-500 text-4xl' />
                    <h3>Call Us</h3>
                    <p>+91 75068 06734</p>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="bg-white border-gray-200 shadow hover:shadow-2xl info-box">
                    <FaEnvelope className='text-blue-500 text-4xl' />
                    <h3>Email Us</h3>
                    <p>alstonsoares17@gmail.com</p>
                </div>
                <div className="bg-white border-gray-200 shadow hover:shadow-2xl info-box">
                    <FaClock className='text-blue-500 text-4xl' />
                    <h3>Open Hours</h3>
                    <p>Monday - Friday<br />24/7</p>
                </div>
            </div>
        </div>
    )
}
