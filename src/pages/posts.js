import React from "react"

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
    let postArray = [{img: Stavros},{img: WorldTrade},{img: Bilal},{img: Karla},{img: Stavros}]
    return (
        <Layout>
            <Carousel>
                {/* <Post imageURL={Karla}></Post> */}
                {postArray.map(post => {
                    return <Post imageURL={post.img}></Post>
                })}
            </Carousel>
        </Layout>
    )
}

export default Posts

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