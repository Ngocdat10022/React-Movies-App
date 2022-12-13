import React, { useEffect } from "react";
import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import MoviesCard from "~/movies/MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesSimilar } from "~/Store/movies/movies-silce";
import { useParams } from "react-router-dom";
const MoiesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const MoviesSimilar = ({ type }) => {
  const moviesId = useParams();
  const movies = useSelector((state) => state.movies);
  console.log("movies", movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesSimilar({ id: moviesId.id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoiesListWrapper>
      {movies.movies_Similar.length > 0 &&
        movies.movies_Similar.map((item) => {
          return <MoviesCard key={item.id} data={item} />;
        })}
    </MoiesListWrapper>
  );
};
MoviesSimilar.propTypes = {
  type: PropTypes.string,
};
export default MoviesSimilar;
