import React, { useState, useReducer, useContext } from "react";
import { users } from "./users";

export const UserActions = {
  SET_DESCRIPTION: "setDescription",
  SET_REASONS: "setReasons",
  SET_INTERESTS: "setInterests",
  SET_FAKE_IMAGE: "setFakeImage",
  ADD_MATCH: "addMatch",
};

const usingLocalStorage = (key) => {
  const setItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  return { setItem, getItem };
};

const userReducer = (state, action) => {
  const { setItem } = usingLocalStorage("me");

  switch (action.type) {
    case UserActions.SET_DESCRIPTION: {
      const newState = {
        ...state,
        description: action.payload,
      };
      setItem(newState);
      return newState;
    }
    case UserActions.SET_REASONS: {
      const newState = {
        ...state,
        reasons: [...action.payload],
      };
      setItem(newState);
      return newState;
    }
    case UserActions.SET_INTERESTS: {
      const newState = {
        ...state,
        interests: [...action.payload],
      };
      setItem(newState);
      return newState;
    }
    case UserActions.SET_FAKE_IMAGE: {
      const newState = {
        ...state,
        fakeImage: action.payload,
      };
      setItem(newState);
      return newState;
    }
    case UserActions.ADD_MATCH: {
      const hasMatch = state.matches.find((id) => id === action.payload);

      if (!hasMatch) {
        const newState = {
          ...state,
          matches: [...state.matches, action.payload],
        };
        setItem(newState);
        return newState;
      }

      return state;
    }
    default:
      return;
  }
};

const employeesReducer = (state, action) => {
  switch (action.type) {
    default:
      return;
  }
};

export const UserProvider = ({ children }) => {
  const { getItem } = usingLocalStorage("me");
  const savedUser = getItem();
  console.log(savedUser);
  const [user, dispatchUserAction] = useReducer(
    userReducer,
    savedUser || {
      id: 1,
      name: "Olena @os",
      active: false,
      matches: [],
      reasons: [],
      interests: ["Mood", "Bugs"],
      description: "Lorem ipsum",
      coffeePoints: 0,
      gossipPoints: 0,
      gamePoints: 0,
      fakeImage: null,
      image: "https://clacksnack.clacks.de/conterior/gallery/employees/311819/1601023543_19280.jpg",
    }
  );

  const [employees, dispatchEmployeeAction] = useReducer(employeesReducer, users);

  const [matchInterests, setMatchInterests] = useState({
    reasons: [
      "Kaffee trinken",
      "Kuchen und Sekt",
      "Mittagessen",
      "Just talk",
      "Nach der Arbeit...",
      "Sport",
      "Spielen",
      "Flirten",
      "Laufen",
    ],
    interests: [
      "Mood",
      "Bugs",
      "Füßball",
      "lästern",
      "Kreuzworträtsel",
      "Yoga",
      "Zumba",
      "Gymnastik",
      "Rückenübungen",
      "Bier",
    ],
  });

  return (
    <UserContext.Provider value={{ user, employees, matchInterests, dispatchUserAction, dispatchEmployeeAction }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = React.createContext();
export const useUser = () => useContext(UserContext);
