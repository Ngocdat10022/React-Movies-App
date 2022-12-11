import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Header } from "~/components/Header";
import { Banner } from "~/components/Banner";
import { Heading } from "~/components/Heading";
import { MoviesNowPlaying } from "~/movies/movies-nowplaying";
import { MoviesTopRated } from "~/movies/movies-top-rated";
// import { getToken } from "~/Utils/auth";
// import { authRefreshToken, authUpdateUser } from "~/Store/auth/auth-slice";
const Main = styled.div`
  flex: 1;
  margin-right: 400px;
  background: ${(props) => props.theme.color.mainColor};
  padding: 20px 20px 0px 20px;
  /* height: 300vh; */
`;
const Home = (props) => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate("/login");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  return (
    <Main>
      <Header />
      <Banner type="upcoming" />
      {/* <Banner type="popular" /> */}
      <Heading name="Now Playing" />
      <MoviesNowPlaying type="now_playing" />
      <Heading name="Top Rated Movies" />
      <MoviesTopRated type="top_rated" />
    </Main>
  );
};
export default Home;
