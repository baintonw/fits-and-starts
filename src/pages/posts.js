import React from "react"

//Components
import Layout from "../components/Layout"
import Post from "../components/Post"

//Images imported using webpack
import WorldTrade from "../images/world-trade.jpg"
import Stavros from "../images/stavros-messios-eaj7W12Ry68-unsplash.jpg"

const Posts = () => {
    return(
        <Layout>
            <Post imageURL={Stavros}></Post>
            {/* <Post imageURL={Stavros}></Post> */}
            
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