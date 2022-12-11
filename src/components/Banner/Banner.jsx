import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "~/Store/movies/movies-silce";
import { Plus } from "../Plus";
import BannerItem from "./BannerItem";
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
const Banner = ({ type }) => {
  const dispath = useDispatch();
  const movies = useSelector((state) => state.movies);
  console.log("movies", movies);
  useEffect(() => {
    console.log("dispath success");
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
                  {/* <div className="banner__img">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt="slide"
                    />
                  </div>
                  <div className="banner__content">
                    <h3 className="banner__heading">{item.title}</h3>
                    <div className="banner__tag">
                      <span>Action</span>
                      <span>Acventure</span>
                      <span>Drama</span>
                    </div>
                    <div className="banner__btn">
                      <Button
                        width="200px"
                        children="Watch"
                        isBold={true}
                        onClick={() => {}}
                      />
                      <Plus height="40px" width="40px" />
                    </div>
                  </div> */}
                  <BannerItem data={item} />
                </WapperBaner>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Banner;
