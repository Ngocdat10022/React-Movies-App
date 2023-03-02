import { css } from "styled-components";

export const GlobalClasses = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 13px;
    color: $white-color;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }
  body {
    background: ${(props) => props.theme.color.mainColor};
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.color.sidebarColor};
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.primary};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-button {
      background: ${(props) => props.theme.color.sidebarColor};
    }
    &::selection {
      background: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.white};
    }
  }

  ul li {
    list-style-type: none;
    display: inline-block;
  }
  a {
    text-decoration: none;
    display: inline-block;
  }
  img {
    width: 100%;
  }
  button,
  input {
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }
  .width {
    width: 20px;
  }
`;
