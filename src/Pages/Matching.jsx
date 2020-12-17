import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import UserInfo from "../Components/UserInfo/UserInfo";
import Header from "../Components/Header/HeaderNavigation";
import { useUser } from "../UserProvider";

function Matching() {
  const { user, employees, dispatchUserAction } = useUser();
  const [matchingIndex, setMatchingIndex] = useState(0);
  const [matchingUser, setMatchingUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getNextUser();
  }, []);

  const getUsersWithSameReasonsAndInterests = () => {
    const usersWithSameReasons = employees.filter((employee) => {
      return employee.reasons.some((reasons) => user.reasons.includes(reasons));
    });

    const usersWithSameInterests = usersWithSameReasons.filter((employee) => {
      return employee.interests.some((interests) => user.interests.includes(interests));
    });

    const usersWithoutAMatch = usersWithSameInterests.filter((employee) => {
      return !user.matches.includes(employee.id);
    });

    return usersWithoutAMatch;
  };

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getNextUser = () => {
    const matchingUsers = getUsersWithSameReasonsAndInterests();
    const previousIdx = matchingIndex;
    let idx = getRandomArbitrary(0, matchingUsers.length);

    while (idx === previousIdx) {
      idx = getRandomArbitrary(0, matchingUsers.length);
    }

    setMatchingIndex(idx);
    setMatchingUser(matchingUsers[idx]);
  };

  const handleAccept = () => {
    const isMatch = matchingUser.matches.includes(user.id);

    dispatchUserAction({ type: "addMatch", payload: matchingUser.id });

    if (isMatch) {
      history.push(`/match/${matchingUser.id}`);
      return;
    }

    getNextUser();
  };

  const handleReject = () => {
    getNextUser();
  };

  return (
    <>
      {!matchingUser ? (
        <div className="row">
          <div className="col-xs center-xs">
            <h2>Keine Leute gefunden.</h2>
          </div>
        </div>
      ) : (
        <UserInfo user={matchingUser} onReject={handleReject} onAccept={handleAccept} />
      )}
      <div className="row center-xs margin-top-2">
        <div className="col-xs">
          <Link to="/" className="button button--primary margin-right-2">
            Match nach Aktivität suchen
          </Link>
          <Link to="/my-matches" className="button bg-color-white">
            Meine heutigen Matches
          </Link>
        </div>
      </div>
    </>
  );
}

export default Matching;
