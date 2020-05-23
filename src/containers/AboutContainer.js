import React from "react"
import "../components/styles/about.css"


const AboutContainer = (props) => {
    return(
        <div className="about-container">
            <h2 className="about__title">
                Me.
            </h2>
            <div className="about__thumb" style={{
                backgroundImage: `url(${props.imageURL})`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
            }}></div>
            <p className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Laoreet non curabitur gravida arcu ac tortor dignissim. Nulla pharetra diam sit amet nisl. Ut porttitor leo a diam sollicitudin. Semper eget duis at tellus at. Amet commodo nulla facilisi nullam vehicula. Enim nunc faucibus a pellentesque sit amet porttitor. Et tortor at risus viverra adipiscing at in tellus. Eu facilisis sed odio morbi quis commodo odio aenean. Pulvinar sapien et ligula ullamcorper. Feugiat nibh sed pulvinar proin gravida. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ac odio tempor orci dapibus ultrices. Dictum at tempor commodo ullamcorper a. Dolor sed viverra ipsum nunc. Elit ut aliquam purus sit.
            </p>
            


        </div>
    )
}

export default AboutContainer