/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export const setIndex = () => {
  const [index, setIndex] = useState(3);

  const handleSetIndex = (lengthData) => {
    setIndex((prev) => prev + 2);
    if (lengthData === 20) return;
  };
  return {
    index,
    handleSetIndex,
  };
};
export const handlPage = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const handleNextPage = (totalPage) => {
    if (totalPage > pageIndex) setPageIndex((prev) => prev + 1);
    if (pageIndex === totalPage) return;
  };
  const handlePrevPage = () => {
    if (pageIndex === 1) return;
    setPageIndex((prev) => prev - 1);
  };
  const handleItemPaging = (index) => {
    setPageIndex(index);
  };
  return { pageIndex, handleNextPage, handlePrevPage, handleItemPaging };
};
