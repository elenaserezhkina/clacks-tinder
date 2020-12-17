import React from "react";

const CrossIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.6593 33.353C40.1116 34.8053 40.1116 37.1437 38.6593 38.5714C37.207 39.9991 34.8685 40.0237 33.4408 38.5714L20.05 25.1807L6.65926 38.5714C5.20695 40.0237 2.86849 40.0237 1.44079 38.5714C0.0131009 37.1191 -0.0115145 34.7807 1.44079 33.353L14.8316 19.9622L1.44079 6.57143C-0.0115145 5.11912 -0.0115145 2.78066 1.44079 1.35296C2.8931 -0.0747286 5.23156 -0.099344 6.65926 1.35296L20.05 14.7437L33.4408 1.35296C34.8931 -0.099344 37.2316 -0.099344 38.6593 1.35296C40.0869 2.80527 40.1116 5.14373 38.6593 6.57143L25.2685 19.9622L38.6593 33.353Z"
      fill="#666666"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="43"
    height="40"
    viewBox="0 0 43 40"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.2596 0.0465088C27.1791 0.0465088 23.5997 2.06651 21.4998 5.14349C19.3999 2.06651 15.8205 0.0465088 11.74 0.0465088C5.27322 0.0465088 0.0234375 5.14349 0.0234375 11.4619C0.0234375 13.9516 0.763179 15.8777 1.93245 17.6863C5.22549 22.8537 21.4998 39.9767 21.4998 39.9767C21.4998 39.9767 37.7741 22.8537 41.0672 17.6863C42.2364 15.8777 42.9762 13.9281 42.9762 11.4619C42.9762 5.14349 37.7264 0.0465088 31.2596 0.0465088Z"
      fill="#00427C"
    />
  </svg>
);

const SwipeButton = ({ onEvent, type, classes }) => {
  const SwipeButtonIcon = () => {
    switch (type) {
      case "cross":
        return <CrossIcon />;
      case "heart":
        return <HeartIcon />;
    }
  };
  return (
    <button className={`button swipe-button ${classes}`} onClick={onEvent}>
      <SwipeButtonIcon />
    </button>
  );
};

export default SwipeButton;
