import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Introduction from "./Pages/Introduction";
import Notfound from "./Pages/Notfound";
// import Header from "./Components/Header/HeaderNavigation";
import Match from "./Pages/Match/Match";
import Matching from "./Pages/Matching";
import HeartAnimation from "./Pages/HeartAnimationPage";
import { UserProvider } from "./UserProvider";
import HeaderNavigation from "./Components/Header/HeaderNavigation";
import MyMatches from "./Pages/MyMatches";
import "./styles/app.scss";

function App() {
  return (
    <UserProvider>
      <HeaderNavigation />
      <div className="container" style={{ paddingTop: "100px" }}>
        <Router>
          {/* <Header /> */}
          <Switch>
            {/* <UserInfo /> */}
            <Route exact path="/" component={Introduction} />
            <Route exact path="/matching" component={Matching} />
            <Route exact path="/heart" component={HeartAnimation} />
            <Route exact path="/match/:id" component={Match} />
            <Route exact path="/my-matches" component={MyMatches} />
            <Route path="*" component={Notfound} />
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
