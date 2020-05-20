import React, { useState } from "react"

//Components
import Layout from "../components/Layout"
import Post from "../components/Post"

import Carousel from "../containers/Carousel"

//Images imported using webpack
import WorldTrade from "../images/world-trade.jpg"
import Stavros from "../images/stavros-messios-eaj7W12Ry68-unsplash.jpg"
import Mosque from "../images/apeksha-k-_IP0Ly_6FIo-unsplash.jpg"
import Bilal from "../images/bilal-o--aSyfQQxPjU-unsplash.jpg"
import Karla from "../images/karla-aranda-xrhKjr-OIvc-unsplash.jpg"


const Posts = () => {
    console.log('USE STATE: ', useState)
    let postArray = [{img: Stavros, id: 0},{img: WorldTrade, id: 1},{img: Bilal, id: 2},{img: Karla, id: 3},{img: Stavros, id: 4}]
    const [x, setX] = useState(0);
    console.log('x: ', x)
    const moveLeft = () => {
            if(x < 0) {
                setX(x + 100)
            }
        
        console.log('moving left!', 'x: ', x)
    }
    const moveRight = () => {
        console.log(postArray.length - 1)
            if(x > (postArray.length - 1) * -100){
                setX(x - 100)
            }
        console.log('moving Right!', 'x: ', x)
    }
    return (
        <Layout>
            <Carousel moveLeft={moveLeft} moveRight={moveRight} >
                {postArray.map((post, index) => {
                    return <Post translateX={x} id={"farts"} key={index} imageURL={post.img}></Post>
                })}
            </Carousel>
        </Layout>
    )
}

export default Posts

{/* <Post imageURL={Karla}></Post> */}


//Original Post template
{/* <div
                style={{
                
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 8.0875rem 8.45rem`,

                }}
            >
                <p style={{
                    marginTop: `12rem`
                }}>Welcome to my blog.</p>
                <p>Here are some of my posts: </p>
                <Post imageUrl={WorldTrade} postTitle="Will's FIRST Post"></Post>
                <Post postTitle="Will's SECOND Post"></Post>
                <Post postTitle="Will's Third Post"></Post>
</div> */}