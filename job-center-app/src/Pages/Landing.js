import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" />
      </nav>
      <div className="container page">
        {/*info */}
        <div className="info">
          <h1>
            job<span>tracking</span> app
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
