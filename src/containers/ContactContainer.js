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
        console.log('currentTarget: ', e.currentTarget, this)
        // if(e.target.class === )
        e.currentTarget.classList.add('copied')
        
    }

    render() {
        console.log('this.state: ', this.state)
        return(
            <div className="contact-container">
                <div className="contact-container__prompt">{this.state.emailCopied ? 'Copied!' : 'Click to copy: '}</div>
                        
                            <h3 onClick={(e) => this.copyText(e)} className="contact-container__email">
                                <span className="top-bottom-border">baintonw@gmail.com</span>
                            </h3>
                <div className="contact-container__links">
                    
                </div>
            </div>
        )
    }
        
    
    
}

export default ContactContainer