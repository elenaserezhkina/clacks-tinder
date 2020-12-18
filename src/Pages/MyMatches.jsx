import React from "react";
import { Link } from "react-router-dom";
import UserCard from "../Components/UserInfo/UserCard";
import { useUser } from "../UserProvider";

const MyMatches = () => {
  const { employees, user } = useUser();

  const getMyMatches = () => {
    const indexedEmployees = employees.reduce((indexedEmployees, employee) => {
      return {
        ...indexedEmployees,
        [employee.id]: employee,
      };
    }, {});

    return user.matches.reduce((matches, matchId) => {
      const isMatch = indexedEmployees[matchId].matches.includes(user.id);

      if (isMatch) {
        return [...matches, indexedEmployees[matchId]];
      }

      return matches;
    }, []);
  };
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <h4>
            Das sind deine Matches für: <strong>{user.reasons[0]}</strong>
          </h4>
        </div>
      </div>
      {!getMyMatches().length ? (
        <>
          <div className="row">
            <div className="col-xs">
              <h5>Heute noch keine Matches 😢</h5>
            </div>
          </div>
          <div className="row margin-top-1">
            <div className="col-xs">
              <Link to="/" className="button button--primary margin-right-2">
                Match nach Aktivität suchen
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row top-xs">
            {getMyMatches().map((employee) => (
              <div key={`match-${employee.id}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <UserCard user={employee} hasFakeImage />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xs-12">
              <button className="button button--primary">Triff deine Matches</button>
            </div>
          </div>
        </>
      )}
      {/* <div className="row">
        <div className="col-xs-12">
          <h4>
            <strong>Dein Supermatch</strong>
          </h4>
        </div>
      </div>
      <div className="row top-xs">
        {getMyMatches().map((employee) => (
          <div key={`match-${employee.id}`} className="col-xs-3">
            <UserCard user={employee} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default MyMatches;
