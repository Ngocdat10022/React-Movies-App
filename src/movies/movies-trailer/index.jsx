import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMoviesTrailer } from "~/Store/movies/movies-silce";
const WrapperMoviesTrailer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;
const MoviesTrailer = () => {
  const moviesId = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getMoviesTrailer({ type: "videos", id: moviesId.id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesId.id]);
  const new_data = movies.video_Trailer.slice(0, 1);
  console.log(new_data);
  return (
    <WrapperMoviesTrailer>
      {new_data.map((item) => {
        return (
          <iframe
            key={item.id}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        );
      })}
    </WrapperMoviesTrailer>
  );
};

export default MoviesTrailer;
