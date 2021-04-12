import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      rgba(107, 109, 184, 0.9),
      rgba(107, 109, 184, 0.9)
    ),
    url("images/Header.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`;
const NavigationBox = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;
const NavLink = styled(Link)`
  width: max-content;
  border: 0.5px solid #6b6db8;
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  padding: 0.73em 2.8em;
  color: #6b6db8;
  border-radius: 50px;
  transition: background-color 300ms, color 300ms;
  &:hover {
    background-color: #6b6db8;
    color: #ededed;
  }
`;

const Navigation = () => {
  return (
    <Container>
      <NavigationBox>
        <LinksContainer>
          <NavLink to='/'>Profile</NavLink>
          <NavLink to='/dashboard'>dasboard</NavLink>
          <NavLink to='/'>Create Task</NavLink>
          <NavLink to='/managetasks'>Manage Tasks</NavLink>
        </LinksContainer>
      </NavigationBox>
    </Container>
  );
};

export default Navigation;
