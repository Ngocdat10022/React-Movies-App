import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const WrapperHeader = styled.div`
  padding: 20px 20px 0px 20px;
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
    </WrapperHeader>
  );
};

export default Header;
