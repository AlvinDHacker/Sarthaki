import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FaSmile } from "react-icons/fa"
import contactFormKey1 from '../../secretKeys';

function ContactForm() {
    const [state, handleSubmit] = useForm(contactFormKey1);
    if (state.succeeded) {
        return <div className="info-box flex flex-col justify-center items-center">
            <FaSmile className='text-blue-500 text-4xl' />
            <h3>Contact Form Submitted!</h3>
        </div>;
    }
    return (
        <form onSubmit={handleSubmit} className="bg-white border-gray-200 shadow hover:shadow-2xl sm:w-[500px] w-auto email-form">
            <div className="">
                {/* <div className="w-full flex gap-5"> */}
                <div className="pb-5">
                    <input id="name" type="text" name="name" className='w-full' placeholder="Your Name" required />
                </div>

                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <input id="email" type="email" name="email" className='w-full' placeholder="Your Email" required />
                </div>
                {/* </div> */}

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <input id="phone" type="number" name="phone" className='w-full' placeholder="Phone" required />
                </div>

                <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <input id="company" type="text" name="company" className='w-full' placeholder="Company Name" required />
                </div>

                <ValidationError
                    prefix="Company Name"
                    field="company"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <label for="services">Services of Interest: </label>
                    <select className='mt-3' id="services" name="services">
                        <option>Bookkeeping and Financial Statements</option>
                        <option>Tax Planning and Compliance</option>
                        <option>Payroll Management</option>
                        <option>Financial Analysis and Reporting</option>
                        <option>AI-Enhanced Auditing</option>
                        <option>Other</option>
                    </select>
                </div>

                <ValidationError
                    prefix="Services"
                    field="services"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <label for="contactMethod">Preferred Contact Method: </label>
                    <select className='mt-3' id="contactMethod" name="contactMethod">
                        <option>Email</option>
                        <option>Phone</option>
                    </select>
                </div>

                <ValidationError
                    prefix="ContactMethod"
                    field="contactMethod"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <label for="hearAboutUs">How did you hear about us? </label>
                    <select className='mt-3' id="hearAboutUs" name="hearAboutUs">
                        <option>Referral</option>
                        <option>Search Engine</option>
                        <option>Social Media</option>
                        <option>Advertisement</option>
                        <option>Other</option>
                    </select>
                </div>

                <ValidationError
                    prefix="HearAboutUs"
                    field="hearAboutUs"
                    errors={state.errors}
                />

                <div className="pb-5">
                    <textarea id="message" name="message" rows="2" className='w-full' placeholder="Message" required></textarea>
                </div>

                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button className='bg-blue-500 ml-[8%] xs:ml-[25%] ss:ml-[30%]' type="submit" disabled={state.submitting}>Send Message</button>

            </div>
        </form>
    );
}

export default function EmailForm() {
    return (
        <div className="xs:w-[400px] ss:w-[500px]">
            <ContactForm />
        </div>
    )
}
