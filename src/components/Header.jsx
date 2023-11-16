import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" className="logo" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  padding: 0 4.8rem;
  height: 10rem;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;
