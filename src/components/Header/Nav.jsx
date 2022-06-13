import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../../images/logo.png";

const Navbar = styled.nav`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: lighter;
  margin-right: 24px;
  position: relative;
  &:first-child {
    color: #62dbfc;
    font-weight: bold;
    font-size: 18px;
    margin-right: 90px;
    &::before {
      content: "";
      width: 25px;
      height: 25px;
      background-image: url(${logoImg});
      background-position: center;
      background-size: cover;
      position: absolute;
      top: -5px;
      left: -35px;
    }
  }
`;

function Nav() {
  return (
    <Navbar>
      <NavLink to="/">React</NavLink>
      <NavLink to="/docs">문서</NavLink>
      <NavLink to="/Tutorial">자습서</NavLink>
      <NavLink to="/blog">블로그</NavLink>
      <NavLink to="/community">커뮤니티</NavLink>
    </Navbar>
  );
}

export default Nav;
