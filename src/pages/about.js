import React from "react"

import Layout from "../components/layout"
import AboutContainer from "../containers/AboutContainer.js"

import Image from "../images/andrea-ferrario-CYUSjP7oy3k-unsplash.jpg"


const About = () => {
    return(
        <Layout>
            <AboutContainer imageURL={Image}></AboutContainer>
        </Layout>
    )
}

export default About