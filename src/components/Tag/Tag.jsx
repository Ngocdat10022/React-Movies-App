import React from "react";
import styled from "styled-components";
const WrapperTag = styled.span`
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 8px;
  font-size: 8px;
  color: ${(props) => props.theme.color.white};
`;
const Tag = ({ children }) => {
  return <WrapperTag>{children}</WrapperTag>;
};

export default Tag;
