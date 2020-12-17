import React, { useState, useEffect } from "react";
import "./FinalMatch.scss";
import Header from "../Header/HeaderNavigation";
import Chat from "../../Pictures/chat.svg";
import Profile from "../../Pictures/prof.svg";
import HeartAnimation from "../HeartAnimation/HeartAnimation";


function FinalMatch(props) {
  const [animation, setAnimation] = React.useState(true);
 const [hero, setHero] = useState("");
 const [image, setImage] = useState("");

  useEffect(() => {
    fetch(
      `https://www.superheroapi.com/api.php/10222024101214062/${props.match.params.id}`
    )
      .then(resp => resp.json())
      .then(hero => {
        setHero(hero);
        setImage(hero.image.url);
      })
      .then(setTimeout(()=>setAnimation(false),2000));
  }, []);

 return animation ? (
    <HeartAnimation />
  ) : (
    <React.Fragment>
      <div className="wrapper">
        <Header />

        <p className="winner">
          it's <br />
          <h1>{hero.name}</h1>
        </p>
        <div className="background-white">
          <div style={{ backgroundImage: `url(${image})` }} className="picture">
            <div>
              <img className="chat" src={Chat} alt="chat"></img>
              <img className="profile" src={Profile} alt="chat"></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FinalMatch;
