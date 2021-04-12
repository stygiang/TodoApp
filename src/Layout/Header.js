import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const HeaderBox = styled.div`
  height: 200px;
  width: 100%;
  background-image: linear-gradient(
      rgba(107, 109, 184, 0.9),
      rgba(107, 109, 184, 0.9)
    ),
    url("images/Header.jpg");
  background-position: center;
  background-size: cover;
  padding: 0 25px;
  padding-top: 35px;
`;
const NavigationBox = styled.div`
  width: 35px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: auto;
  cursor: pointer;
  /* margin-top: 43px; */
`;
const NavigationBar = styled.div`
  display: inline-block;
  height: 5px;
  border-radius: 5px;

  background: #f7f7f7;
  ${(p) =>
    p.one &&
    css`
      width: 100%;
    `}
  ${(p) =>
    p.two &&
    css`
      width: 50%;
    `}
    ${(p) =>
    p.three &&
    css`
      width: 35%;
    `}
`;
const NavLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderBox>
      <NavLink to='/navigation'>
        <NavigationBox>
          <NavigationBar one />
          <NavigationBar two />
          <NavigationBar three />
        </NavigationBox>
      </NavLink>
    </HeaderBox>
  );
};

export default Header;
