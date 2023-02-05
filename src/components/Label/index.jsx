import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Label = ({ children, htmlFor }) => {
  return <WrapperLabel htmlFor={htmlFor}>{children}</WrapperLabel>;
};

Label.propTypes = { children: PropTypes.string, htmlFor: PropTypes.string };
const WrapperLabel = styled.label`
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
`;

export default Label;
