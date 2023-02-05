import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useController } from "react-hook-form";
const Input = ({ name, control, error = {}, message, children, type }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <WrapperInput>
      <input type={type} className="input" {...field} />
      {children}
      {message && <span className="error">{message}</span>}
    </WrapperInput>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  error: PropTypes.object,
  children: PropTypes.node,
  message: PropTypes.string,
};
const WrapperInput = styled.div`
  position: relative;
  .input {
    width: 100%;
    border-radius: 10px;
    border-radius: 2px 2px 2px 2px inset ${(props) => props.theme.color.primary};
    padding: 20px;
    color: ${(props) => props.theme.color.primary};
    font-size: 18px;
    /* background: ${(props) => props.theme.color.mainColor}; */
    inset: 3px 8px 22px -2px ${(props) => props.theme.color.primary};
    background: rgba(225, 227, 226, 0.2);
    :focus-within {
      border: 2px solid ${(props) => props.theme.color.primary};
    }
  }
  .error {
    font-size: 14px;
    color: ${(props) => props.theme.color.error};
  }
`;

export default Input;
