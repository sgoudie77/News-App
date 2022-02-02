import React from 'react'
import BtnHome from '../buttons/BtnHome'

function Contact() {
    return (
        <div className="contact">
            <div className='contact-info'>
                <h1>Contact</h1>
                <p>If you have any questions or comments, please feel free to contact us anytime</p>
                <p>Email: email@example.com</p>
                <p>Tel: (123) 456 - 7890</p>
                <p>Address: 123 Somewhere Street, Toronto, Canada, A1B 2C3</p>
            </div>
            <div className='contact-btn'>
                <BtnHome />
            </div>
        </div>
    )
}

export default Contact