import React, { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "~/Store/movies/movies-silce";
import BannerItem from "./BannerItem";
const Banner = ({ type }) => {
  const dispath = useDispatch();
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    dispath(getMovies({ type: type }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!movies.moviesList) return;
  return (
    <>
      <Swiper grabCursor spaceBetween={0} slidesPerView="auto">
        {movies.moviesList.length > 0 &&
          movies.moviesList.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <WapperBaner>
                  <BannerItem data={item} />
                </WapperBaner>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

const WapperBaner = styled.div`
  height: 400px;
  margin: auto;
  border-radius: 20px;
  margin-top: 50px;
  overflow: hidden;
  position: relative;

  .banner__img {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .banner__content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .banner__heading {
      font-size: 30px;
      color: ${(props) => props.theme.color.white};
      font-weight: bold;
    }
    .banner__tag {
      display: flex;
      align-items: center;
      gap: 20px;
      span {
        padding: 5px 10px;
        background: transparent;
        color: ${(props) => props.theme.color.white};
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
    .banner__btn {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`;
export default Banner;
