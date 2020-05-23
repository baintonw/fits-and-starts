import React from "react"

import "../components/styles/carousel.css"
import { checkPropTypes } from "prop-types"

const Carousel = (props) => {
    console.log('props in Carousel: ', props)
    return(
        <div className="carousel">
            <button onClick={() => props.moveLeft()} className="leftBtn">
                <p className="scroll-icon">&lt;</p>        
            </button>
                {props.children}
           <button onClick={() => props.moveRight()} className="rightBtn">
                <p className="scroll-icon">&gt;</p>
           </button>
        </div>
    )
}

export default Carousel