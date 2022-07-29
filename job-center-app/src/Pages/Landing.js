import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
//Every time we'll set up component , import wrapper from folder.
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/*info */}
        <div className="info">
          <h1>
            job<span> Tracking </span>app
          </h1>
          <p>
            Tumeric williamsburg man bun raw denim, gluten-free tilde salvia art
            party church-key tofu ramps prism butcher. +1 coloring book roof
            party synth franzen paleo tilde drinking vinegar offal affogato
            vaporware ennui. Jianbing seitan flannel gastropub brunch heirloom
            keffiyeh neutra swag XOXO literally 8-bit. Activated charcoal blue
            bottle bespoke, thundercats subway tile adaptogen meggings four
            dollar toast asymmetrical irony everyday carry. Salvia locavore
            coloring book taiyaki vegan artisan synth bicycle rights art party
            chambray hoodie +1 readymade pok pok. Messenger bag normcore
            truffaut vexillologist XOXO, narwhal tacos humblebrag palo santo
            ramps umami. Godard raclette la croix fanny pack, craft beer vice
            swag small batch actually tattooed master cleanse photo booth cloud
            bread.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
