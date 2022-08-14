import styled from "styled-components";

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
    min-height: calc(115vh - var(--nav-height));
    display: grid;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--button);
    }
  }
  p {
    color: var(--grey-600);
    font-size: 20px;
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
export default Wrapper;
