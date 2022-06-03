import React from "react";
import "./Card.css"


const Card = ({name, email, id}) => {
    return(
       // <h1>RoboFriends</h1>
        <div className='w5 tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' className='photo' src={`./images/robot${id}.png`}/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card