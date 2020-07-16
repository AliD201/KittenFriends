import React from "react";


const Card = (props) => {
  const {name , email , id} = props;
    return (
        <div className="bg-light-red dib br3 pa4 ma2 grow bw2 shadow-5 tc">
        <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="profile"/>
        <div>
          <h2>{name}</h2>
          <p> {email}</p>
        </div>
        </div>
    )
}

export default Card;
