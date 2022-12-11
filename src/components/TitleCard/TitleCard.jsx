import React from "react";
import styled from "styled-components";
const H3 = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 15px;
  letter-spacing: 2px;
`;
const TitleCard = ({ children }) => {
  return <H3 className="card__title">{children}</H3>;
};

export default TitleCard;
