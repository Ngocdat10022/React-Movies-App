import React from "react";
import styled from "styled-components";
const Heading = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  padding: 10px 0px;
`;
const HeadingSiderbar = ({ name }) => {
  return <Heading>{name}</Heading>;
};

export default HeadingSiderbar;
