import React from "react"

import "../components/styles/carousel.css"
import { checkPropTypes } from "prop-types"
const Carousel = (props) => {
    return(
        <div className="carousel">
           {props.children}
        </div>
    )
}

export default Carousel