import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const WrapperCricle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.bg_color};
`;
const Cricle = (props) => {
  const { bg_color } = props;
  return <WrapperCricle bg_color={bg_color}></WrapperCricle>;
};
Cricle.propTypes = {
  bg_color: PropTypes.string,
};

export default Cricle;
