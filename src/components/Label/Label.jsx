import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const WrapperLabel = styled.label`
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
`;
const Label = ({ children, htmlFor }) => {
  return <WrapperLabel htmlFor={htmlFor}>{children}</WrapperLabel>;
};

Label.propTypes = { children: PropTypes.string, htmlFor: PropTypes.string };

export default Label;
