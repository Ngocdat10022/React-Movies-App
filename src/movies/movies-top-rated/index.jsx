import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MoviesCard from "~/movies/MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesTopRated } from "~/Store/movies/movies-silce";
const MoiesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const MoviesTopRated = ({ type }) => {
  const movies = useSelector((state) => state.movies);
  console.log("movies", movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesTopRated({ type: type }));
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
      {movies.movies_Top_Rated.length > 0 &&
        movies.movies_Top_Rated.map((item) => {
          return <MoviesCard key={item.id} data={item} />;
        })}
    </MoiesListWrapper>
  );
};

MoviesTopRated.propTypes = {
  type: PropTypes.string,
};

export default MoviesTopRated;
