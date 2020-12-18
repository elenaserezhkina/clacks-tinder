import React, { useState, useEffect } from "react";
import "./Match.scss";
import Header from "../../Components/Header/HeaderNavigation";
import HeartAnimation from "../../Components/HeartAnimation/HeartAnimation";
import { useUser } from "../../UserProvider";
import { useHistory, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import UserCard from "../../Components/UserInfo/UserCard";

function Match(props) {
  const { employees } = useUser();
  const history = useHistory();
  const [animation, setAnimation] = React.useState(false);
  const [matchedUser, setMatchedUser] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    const matchedUserFound = employees.find((user) => user.id === parseInt(id));

    if (matchedUserFound) {
      setMatchedUser(matchedUserFound);
      setTimeout(() => setAnimation(false), 2000);
    } else {
      history.push("/matching");
    }
  }, []);

  return animation ? (
    <HeartAnimation />
  ) : (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        <div className="background-white">
          <div class="row center-lg">
            <div class="col-xs-12 col-lg-4 ">
              <UserCard hasFakeImage user={matchedUser} />
            </div>
          </div>

          <div className="row center-xs margin-top-2">
            <div className="col-xs-12">
              <Link to="/my-matches" className="button button--primary">
                Meine heutigen Matches
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Match;
