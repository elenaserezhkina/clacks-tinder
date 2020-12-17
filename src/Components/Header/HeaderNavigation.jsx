import React from "react";
import "./HeaderNavigation.scss";
import Logo from "../../Pictures/logo.svg";
import { Link } from "react-router-dom";
import { useUser } from "../../UserProvider";

function HeaderNavigation() {
  const { user } = useUser();

  return (
    <header id="ember94" className="app-header ember-view">
      <div className="app-header__item app-header__item--logo">
        <a href="/" id="ember95" className="active ember-view">
          <div id="ember96" className="app-logo ember-view"></div>
        </a>
      </div>
      <div className="app-header__item app-header__item--navigation">
        <nav id="ember97" className="navigation-panel ember-view">
          <div className="navigation">
            <a href="" id="ember98" className="navigation__link ember-view">
              <i className="fas fa-project-diagram"></i>
            </a>
            <a href="" id="ember99" className="navigation__link is-active ember-view">
              <span id="ember100" className="back-to-top-helper back-to-top-helper--main-navigation ember-view">
                <i className="fas fa-bullhorn"></i>
              </span>
            </a>
            <a href="" id="ember101" className="navigation__link ember-view">
              <img
                src={
                  user?.image ||
                  "https://static.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-coverimage.jpg"
                }
                alt=""
              />
            </a>
            <a href="" id="ember102" className="navigation__link ember-view">
              {" "}
              <i className="fas fa-users"></i>
            </a>
            <a href="" id="ember103" className="navigation__link ember-view">
              {" "}
              <i className="fas fa-handshake"></i>
            </a>
          </div>
        </nav>
      </div>
      <div className="app-header__item app-header__item--toolbar">
        <div id="ember104" className="app-toolbar ember-view">
          <div className="app-toolbar__item">
            <button className="app-toolbar__link" data-ember-action="" data-ember-action-105="105">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="app-toolbar__item">
            <div id="ember106" className="app-switcher ember-view">
              <button
                className="app-switcher__toggle-button  app-toolbar__link"
                data-ember-action=""
                data-ember-action-107="107"
              >
                <i className="fas fa-th"></i>
              </button>
              <div className="app-switcher__panel"></div>
            </div>
          </div>
          <div className="app-toolbar__item">
            <a href="" id="ember117" className="app-toolbar__link ember-view">
              {" "}
              <i className="fas fa-cog"></i>
            </a>
          </div>
          <div className="app-toolbar__item">
            <button className="app-toolbar__link" data-ember-action="" data-ember-action-118="118">
              <i className="fas fa-stream"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNavigation;
