import React from "react";
import styled from "styled-components";
const TitleSidebar = ({ title, marginTop }) => {
  return <Title marginTop={marginTop}>{title}</Title>;
};
const Title = styled.h5`
  letter-spacing: 5px;
  color: ${(props) => props.theme.color.titlesidebar};
  margin-top: ${(props) => props.marginTop};
`;

export default TitleSidebar;
