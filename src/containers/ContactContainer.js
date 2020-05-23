import React from "react"

import "../components/styles/contact.css"




const ContactContainer = () => {
    const copyText = (e) => {

        console.log('text copied!', 'target: ', e.target)
        const copyText = e.target
        // const selectedText = e.target.textArea.select()
        // const copiedText
        console.log('copyText: ', copyText)
        
    }
    return(
        <div className="contact-container">
            <div className="contact-container__email-box">
                <h3 onClick={(e) => copyText(e)} className="contact-container__email">baintonw@gmail.com</h3>
            </div>
            <div className="contact-container__links">
                
            </div>
        </div>
    )
}

export default ContactContainer