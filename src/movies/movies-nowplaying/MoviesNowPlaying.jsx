import React, { useEffect } from "react";
import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import MoviesCard, { CartLoadingSkeleton } from "~/movies/MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesNowPlaying } from "~/Store/movies/movies-silce";
import { handlPage } from "~/constant/GlobalFunc";
const MoiesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const MoviesNowPlaying = ({ type }) => {
  const { pageIndex } = handlPage();
  const movies = useSelector((state) => state.movies);
  console.log("loading", movies.loading);
  console.log("movies", movies);
  const loading = movies.loading;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesNowPlaying({ type: type, page: pageIndex }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoiesListWrapper>
      {loading && (
        <>
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
          <CartLoadingSkeleton />
        </>
      )}
      {!loading &&
        movies.movies_Now_Playing.length > 0 &&
        movies.movies_Now_Playing.map((item) => {
          return <MoviesCard key={item.id} data={item} />;
        })}
    </MoiesListWrapper>
  );
};
MoviesNowPlaying.propTypes = {
  type: PropTypes.string,
};
export default MoviesNowPlaying;
