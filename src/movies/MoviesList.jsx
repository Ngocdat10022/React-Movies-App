import React, { useEffect } from "react";
import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import MoviesCard from "./MoviesCard";
import { useDispatch, useSelector } from "react-redux";
const MoiesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const MoviesList = ({ type }) => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: "now_playing" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoiesListWrapper>
      {/* <Swiper grabCursor={true} spaceBetween={40} slidesPerView="auto">
        <SwiperSlide>
          <MoviesCard />
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard />
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard />
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard />
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard />
        </SwiperSlide>
        <SwiperSlide>
          <MoviesCard />
        </SwiperSlide>
      </Swiper> */}
      <MoviesCard />
    </MoiesListWrapper>
  );
};

MoviesList.propTypes = {
  type: PropTypes.string,
};
export default MoviesList;
