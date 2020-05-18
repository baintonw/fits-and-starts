import React from "react"
import "./styles/post.css"

import WorldTrade from "../images/world-trade.jpg"


const Post = (props) => {
    return(
          <div className="post">
              
                
              <div  className="left" style={{
                    backgroundImage: `url(${props.imageURL})`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    marginLeft: `1rem`,
                }}>

              </div>
              <div className="right">
                <h2>Post Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique pulvinar libero, in porttitor velit. Etiam bibendum justo sit amet massa malesuada dapibus. Vestibulum rutrum neque non sapien ornare tempus. Duis lobortis feugiat eros, eget rutrum lacus commodo ac. Integer blandit dapibus turpis, at congue urna tempor non. Praesent commodo, felis eget lobortis pharetra, diam nulla ornare mauris, ut feugiat tortor nulla et nisl. Duis faucibus mi nec ipsum mollis, eget pellentesque massa fermentum. Sed egestas dolor non est pulvinar volutpat et vel mauris. In ullamcorper, magna at tempor ornare, velit libero auctor dolor, vel blandit velit sem nec turpis. Duis elementum vitae est eget ultrices. Mauris volutpat, lorem nec rutrum eleifend, libero ex sollicitudin neque, eu sagittis metus neque vel tortor. Nullam sit amet erat in est sollicitudin convallis a vel tortor.</p>

                <p>Ut efficitur, turpis nec ullamcorper pretium, ligula justo pellentesque nisi, sit amet volutpat urna risus ac ligula. Nulla ultrices ipsum non dolor ultrices, ac tincidunt erat pellentesque. Praesent et nisi eu diam facilisis aliquet ac vitae leo. Aenean purus tellus, facilisis vitae ex non, elementum tempor diam. Pellentesque tortor sem, rhoncus vel vulputate non, euismod at ante. Praesent mollis, odio placerat accumsan vehicula, elit diam aliquet leo, cursus varius lectus nisi at ante. Donec ligula erat, convallis ac magna quis, viverra aliquam neque. Fusce lectus eros, accumsan sit amet neque dictum, malesuada cursus velit. Suspendisse ut felis lorem. Cras id orci quis urna consectetur blandit. Suspendisse eget arcu at nibh mattis dignissim eget quis diam. Phasellus id suscipit libero. Curabitur ullamcorper ligula in eros ornare suscipit.</p>

                <p>Ut efficitur, turpis nec ullamcorper pretium, ligula justo pellentesque nisi, sit amet volutpat urna risus ac ligula. Nulla ultrices ipsum non dolor ultrices, ac tincidunt erat pellentesque. Praesent et nisi eu diam facilisis aliquet ac vitae leo. Aenean purus tellus, facilisis vitae ex non, elementum tempor diam. Pellentesque tortor sem, rhoncus vel vulputate non, euismod at ante. Praesent mollis, odio placerat accumsan vehicula, elit diam aliquet leo, cursus varius lectus nisi at ante. Donec ligula erat, convallis ac magna quis, viverra aliquam neque. Fusce lectus eros, accumsan sit amet neque dictum, malesuada cursus velit. Suspendisse ut felis lorem. Cras id orci quis urna consectetur blandit. Suspendisse eget arcu at nibh mattis dignissim eget quis diam. Phasellus id suscipit libero. Curabitur ullamcorper ligula in eros ornare suscipit.</p>

                <p>Ut efficitur, turpis nec ullamcorper pretium, ligula justo pellentesque nisi, sit amet volutpat urna risus ac ligula. Nulla ultrices ipsum non dolor ultrices, ac tincidunt erat pellentesque. Praesent et nisi eu diam facilisis aliquet ac vitae leo. Aenean purus tellus, facilisis vitae ex non, elementum tempor diam. Pellentesque tortor sem, rhoncus vel vulputate non, euismod at ante. Praesent mollis, odio placerat accumsan vehicula, elit diam aliquet leo, cursus varius lectus nisi at ante. Donec ligula erat, convallis ac magna quis, viverra aliquam neque. Fusce lectus eros, accumsan sit amet neque dictum, malesuada cursus velit. Suspendisse ut felis lorem. Cras id orci quis urna consectetur blandit. Suspendisse eget arcu at nibh mattis dignissim eget quis diam. Phasellus id suscipit libero. Curabitur ullamcorper ligula in eros ornare suscipit.</p>
              </div>

          </div>
    )
}

export default Post


// <div className="post">
//             <h2 className="post__title">{props.postTitle}</h2>
//             <div className="post__image-box"
//                 style={{
//                     backgroundImage: `url(${props.imageUrl})`,
//                     backgroundPosition: `center`,
//                     backgroundSize: `cover`,
//                 }}
//             >
//             </div>
//             <p className="post__content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

//                 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
//             </p>
// </div>    