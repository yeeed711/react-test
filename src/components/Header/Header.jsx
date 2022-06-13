import Nav from "./Nav";
import styled from "styled-components";

const Heade = styled.header`
  height: 50px;
  background-color: #20232a;
`;

function Header() {
  return (
    <Heade>
      <Nav />
    </Heade>
  );
}

export default Header;
