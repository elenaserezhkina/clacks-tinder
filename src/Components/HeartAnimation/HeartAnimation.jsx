import * as React from "react";
import Lottie from "react-lottie";
import * as Heart from "./Heart.json";
import "./HeartAnimation.scss";

export default class HeartAnimation extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Heart.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#f25764",
        }}
        className="heart-animation-container"
      >
        <Lottie options={defaultOptions} height={300} width={300} />
        <h1 style={{ color: "#fffafa" }}>Congrats, you found your perfect Clacks for today!!!</h1>
      </div>
    );
  }
}
