import React from "react";
import main from "../assets/images/landing.png";
import Wrapper from "../assets/wrappers/LandingPage";
//Every time we'll set up component , import wrapper from folder.
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        {/*info */}
        <div className="info">
          <h1>
            Book<span> Tracking </span>App
          </h1>
          <p>
            Book app is an app where people save the books they read. Thanks to
            this application where they can see their book readings.
            Retrospectively, people can track their progress. Come on, Enjoy the
            app by registering!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="books" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
