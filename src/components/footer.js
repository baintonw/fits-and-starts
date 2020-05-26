import React from "react"
import "./styles/footer.css"



const Footer = () => {
    return ( 
            <footer className="footer">
                <p className="copyright">© {new Date().getFullYear()} Will Bainton</p>
            </footer>
    )
}

export default Footer