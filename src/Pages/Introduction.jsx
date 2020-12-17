import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./Introduction.scss";
import { useUser } from "../UserProvider";
import { useHistory } from "react-router-dom";
import UserCard from "../Components/UserInfo/UserCard";
import { UserActions } from "../UserProvider";

function Introduction() {
  const history = useHistory();
  const { user, matchInterests, dispatchUserAction } = useUser();
  const [reason, setReason] = useState("");
  const [interests, setInterests] = useState(
    matchInterests.interests.map((interest) => ({ interest, checked: false }))
  );
  const [description, setDescription] = useState("Ich will nen Kaffee");

  useEffect(() => {
    setReason(user.reasons[0]);
    setInterests(getInitialInterests());
  }, []);

  const getInitialInterests = () => {
    return matchInterests.interests.map((interest) => {
      if (user.interests.includes(interest)) {
        return { interest, checked: true };
      }
      return { interest, checked: false };
    });
  };

  const handleReasonChange = (e) => {
    if (e.target.value) {
      setReason(e.target.value);
      dispatchUserAction({
        type: UserActions.SET_REASONS,
        payload: [e.target.value],
      });
    }
  };

  const handleInterestChange = (e) => {
    const newInterests = interests.map(({ interest, checked }) => {
      if (interest === e.target.innerText) {
        return {
          interest,
          checked: !checked,
        };
      }
      return {
        interest,
        checked,
      };
    });

    setInterests(newInterests);

    dispatchUserAction({
      type: UserActions.SET_INTERESTS,
      payload: newInterests.filter((interest) => interest.checked).map((interest) => interest.interest),
    });
  };

  const handleImageLinkChange = (e) => {
    dispatchUserAction({ type: UserActions.SET_FAKE_IMAGE, payload: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    dispatchUserAction({ type: UserActions.SET_DESCRIPTION, payload: description });

    history.push("/matching");
  };

  return (
    <div className="row">
      <div className="col-lg-4 col-xs-12">
        <UserCard user={user} hasFakeImage />
      </div>
      <div className="col-lg-8 col-xs-12">
        <div>
          <input
            type="text"
            className="input bg-color-white"
            placeholder="Fotolink einfügen"
            onChange={handleImageLinkChange}
          />
        </div>
        <div className="display-flex align-items-center margin-top-1">
          <span className="color-black">Ich bin in der Laune für &nbsp;&nbsp;</span>
          <FormControl>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={reason}
              onChange={handleReasonChange}
            >
              {matchInterests.reasons.map((reason, i) => (
                <MenuItem key={`reason-${i}`} value={reason}>
                  {reason}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="margin-top-1">
          <span className="display-inline-block color-black margin-bottom-1">Dabei will ich:</span>
          <ul className="tags__list">
            {interests.map(({ interest, checked }, i) => (
              <li
                key={`interest-${i}`}
                className={`tag ${checked ? "is-checked" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={handleInterestChange}
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
        <div className="margin-top-1">
          <button className="button button--primary" onClick={() => handleSubmit()}>
            Finde dein match
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
