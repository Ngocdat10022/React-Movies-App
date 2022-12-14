import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const WrapperHeader = styled.div`
  padding: 20px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  a {
    color: ${(props) => props.theme.color.white};
    font-size: 15px;
    transition: all 0.5;
    &.active {
      color: ${(props) => props.theme.color.primary};
      transition: all 0.5;
    }
  }
  a li {
    list-style: none;
  }
  .name-user {
    font-size: 15px;
    font-weight: bold;
    color: ${(props) => props.theme.color.primary};
    text-shadow: 8px 8px 5px ${(props) => props.theme.color.primary};
  }
`;
const navLink = [
  {
    name: "TV series",
    to: "/",
  },
  {
    name: "Movies",
    to: "/movies",
  },
  {
    name: "Anime",
    to: "/Anime",
  },
];
const Header = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <WrapperHeader className="header">
      <nav>
        {navLink.map((item, index) => {
          return (
            <NavLink to={item.to} key={item.name}>
              <li>{item.name}</li>
            </NavLink>
          );
        })}
      </nav>
      <h3 className="name-user">{user?.name}</h3>
    </WrapperHeader>
  );
};

export default Header;
