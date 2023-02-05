import React from "react";
import styled from "styled-components";
const Plus = ({ height, width }) => {
  return (
    <PlusW height={height} width={width}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6  h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </PlusW>
  );
};

const PlusW = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(158, 158, 158, 0.7);
  font-size: 15px;
  border-radius: 5px;
`;
export default Plus;
