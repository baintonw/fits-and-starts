import React from "react"

import "../components/styles/contact.css"




const ContactContainer = () => {
    const copyText = (e) => {
        const copiedText = e.target.innerText
        console.log('copiedText: ', copiedText)
        window.navigator.clipboard.writeText(copiedText)
        
    }
    return(
        <div className="contact-container">
            <div className="contact-container__email-box">
                <a>
                    <h3 onClick={(e) => copyText(e)} className="contact-container__email">baintonw@gmail.com</h3>
                </a>
            </div>
            <div className="contact-container__links">
                
            </div>
        </div>
    )
}

export default ContactContainer