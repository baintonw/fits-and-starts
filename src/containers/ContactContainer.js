import React from "react"

import "../components/styles/contact.css"




class ContactContainer extends React.Component {

    state = {
        emailCopied: false
    }

    copyText = (e) => {
        const copiedText = e.target.innerText
        console.log('copiedText: ', copiedText)
        window.navigator.clipboard.writeText(copiedText)
        this.setState({
            emailCopied: true
        })
        
    }

    render() {
        console.log('this.state: ', this.state)
        return(
            <div className="contact-container">
                <div className="contact-container__prompt">{this.state.emailCopied ? 'Copied' : 'Click to copy: '}</div>
                <div className="contact-container__email-box">
                    
                        <h3 onClick={(e) => this.copyText(e)} className="contact-container__email">baintonw@gmail.com</h3>
                    
                </div>
                <div className="contact-container__links">
                    
                </div>
            </div>
        )
    }
        
    
    
}

export default ContactContainer