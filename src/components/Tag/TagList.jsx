import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
const ListTag = styled.div`
  display: flex;
  gap: 5px;
`;
const TagList = () => {
  return (
    <ListTag>
      <Tag>Action</Tag>
      <Tag>Action</Tag>
      <Tag>Action</Tag>
    </ListTag>
  );
};

export default TagList;
