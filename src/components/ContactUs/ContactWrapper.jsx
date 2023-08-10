import React from 'react'
import InfoBoxes from './InfoBoxes'
import EmailForm from './EmailForm'
import "../../css/contact.css"

export default function ContactWrapper() {
    return (
        <section id="contact" className="contact flex justify-center">

            <div className="container">

                <div className='flex lg:flex-row lg:justify-center items-center flex-col gap-10'>
                    <InfoBoxes />
                    <EmailForm />
                </div>

            </div>

        </section>
    )
}
