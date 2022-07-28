import Landing from "./Pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: yellow;
  text-align: center;
  font-size: 30px;
`;
function App() {
  return (
    <div>
      <Landing />
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
