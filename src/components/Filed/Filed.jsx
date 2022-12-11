import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const WrapperFiled = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
const Filed = ({ children }) => {
  return <WrapperFiled>{children}</WrapperFiled>;
};

Filed.propTypes = {
  children: PropTypes.node,
};

export default Filed;
