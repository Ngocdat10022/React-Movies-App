import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchIcon, StarIcon } from "~/assets/icons";
import { Heading } from "../Heading";
import { Button } from "~/components/Button";
import TagList from "~/components/Tag/TagList";
import Tag from "~/components/Tag/Tag";
import { TitleCard } from "../TitleCard";
const WrappersidebarRight = styled.div`
  background-color: ${(props) => props.theme.color.sidebarColor};
  width: ${(props) => props.theme.width.sideBarright};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  padding: 30px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.sidebarColor};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.sidebarColor};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-button {
    background: ${(props) => props.theme.color.sidebarColor};
  }
  .wrapper-input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(200, 201, 204, 0.5);
    position: relative;
    margin-bottom: 30px;
    input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: transparent;
      padding: 10px;
      color: ${(props) => props.theme.color.white};
    }
    .search-icon {
      position: absolute;
      right: 10px;
      width: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(200, 201, 204, 0.5);
    }
  }
  .siderbar-content {
    &_card {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .card {
        width: 100%;
        height: auto;
        background-color: ${(props) => props.theme.color.bgCard};
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        &__img {
          width: 30%;
          img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
        }
        &__content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          width: 70%;
          height: 100%;
        }
        &__star {
          display: flex;
          align-items: center;
          font-size: 10px;
          justify-content: space-between;
          color: ${(props) => props.theme.color.white};
          span {
            .color {
              color: #ffaa01;
            }
          }
        }
      }
    }
  }
`;
const SidebarRight = (props) => {
  return (
    <WrappersidebarRight>
      <div className="wrapper-input">
        <input placeholder="Quick Search" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="sidebar-content">
        <Heading name="Poppular Movies" />
        <div className="siderbar-content_card">
          <div className="card">
            <div className="card__img">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.WnAMMuI8YKDz5UxkdoM05QHaKI&pid=Api&P=0"
                alt="spiderman"
              />
            </div>
            <div className="card__content">
              <TitleCard children="Spiderman" />
              <div className="card__star">
                <span>2021</span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  6.1 <StarIcon className="color" />
                </span>
              </div>
              <TagList></TagList>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.WnAMMuI8YKDz5UxkdoM05QHaKI&pid=Api&P=0"
                alt="spiderman"
              />
            </div>
            <div className="card__content">
              <TitleCard children="Spiderman" />
              <div className="card__star">
                <span>2021</span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  6.1 <StarIcon className="color" />
                </span>
              </div>
              <TagList></TagList>
            </div>
          </div>
          <Button children="See more" isBold={false} />
        </div>
      </div>
      <div className="sidebar-content">
        <Heading name="Poppular Movies" />
        <div className="siderbar-content_card">
          <div className="card">
            <div className="card__img">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.WnAMMuI8YKDz5UxkdoM05QHaKI&pid=Api&P=0"
                alt="spiderman"
              />
            </div>
            <div className="card__content">
              <TitleCard children="Spiderman" />
              <div className="card__star">
                <span>2021</span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  6.1 <StarIcon className="color" />
                </span>
              </div>
              <TagList></TagList>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.WnAMMuI8YKDz5UxkdoM05QHaKI&pid=Api&P=0"
                alt="spiderman"
              />
            </div>
            <div className="card__content">
              <TitleCard children="Spiderman" />
              <div className="card__star">
                <span>2021</span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  6.1 <StarIcon className="color" />
                </span>
              </div>
              <TagList></TagList>
            </div>
          </div>
          <Button children="See more" isBold={false} />
        </div>
      </div>
    </WrappersidebarRight>
  );
};

SidebarRight.propTypes = {};

export default SidebarRight;
