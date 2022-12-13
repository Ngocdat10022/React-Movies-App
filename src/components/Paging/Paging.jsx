import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NextIcon, PrevIcon } from "~/assets/icons";
const PagingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .paging-wapper {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 20px;
    width: 300px;
    overflow-x: scroll;
    padding: 10px;
    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.color.sidebarColor};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.primary};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-button {
      background: transparent;
    }
  }

  .paging-item {
    padding: 10px 15px;
    color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.white};
    border-radius: 5px;
    cursor: pointer;
  }
  span {
    color: white;
    cursor: pointer;
  }
`;
const Paging = ({
  total_page,
  handleNextPage,
  handlePrevPage,
  handleItemPaging,
  pageIndex = 1,
}) => {
  return (
    <PagingWrapper>
      <span
        onClick={() => {
          handlePrevPage();
        }}
      >
        <PrevIcon />
      </span>
      <div className="paging-wapper">
        {new Array(total_page).fill().map((item, index) => {
          return (
            <div style={{ padding: "5px" }} key={index}>
              <span
                onClick={() => {
                  handleItemPaging(index + 1);
                }}
                style={
                  pageIndex === index + 1
                    ? { borderColor: "#FF3D71", color: "#FF3D71" }
                    : {}
                }
                className="paging-item"
              >
                {index + 1}
              </span>
            </div>
          );
        })}
      </div>
      <span
        onClick={() => {
          handleNextPage(total_page);
        }}
      >
        <NextIcon />
      </span>
    </PagingWrapper>
  );
};
Paging.propTypes = {
  total_page: PropTypes.number,
  handleNextPage: PropTypes.func,
  handleprevPage: PropTypes.func,
  pageIndex: PropTypes.number,
};

export default Paging;
