import React from "react";
import SwipeButton from "../SwipeButton";
import UserCard from "./UserCard";

const UserInfo = ({ user, onReject, onAccept }) => {
  return (
    <React.Fragment>
      <div className="row center-xs middle-xs">
        <div className="col-xs-12 display-flex justify-content-center align-items-center padding-0">
          <SwipeButton onEvent={onReject} type="cross" classes="hide-for-mobile" />
          <div className="card-matching-container">
            <UserCard hasFakeImage user={user}></UserCard>
          </div>
          <SwipeButton onEvent={onAccept} type="heart" classes="hide-for-mobile" />
        </div>
      </div>
      <div className="row center-xs margin-top-1">
        <div className="col-xs-12">
          <span>
            <SwipeButton onEvent={onReject} type="cross" classes="show-for-mobile margin-right-2" />
          </span>
          <span>
            <SwipeButton onEvent={onAccept} type="heart" classes="show-for-mobile" />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
