import React from "react"
import "./styles/footer.css"



const Footer = () => {
    return ( 
            <footer className="footer">
                © {new Date().getFullYear()} 
            </footer>
    )
}

export default Footer