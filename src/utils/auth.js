import Cookies from "js-cookie";
const accessTokenKey = "movies_access_token";
const refreshTokenKey = "movies_refresh_token";

const objCookies = {
  expires: 30,
  domain: process.env.COOKIES_DOMAIN,
};
export const saveToken = (accessToken, refresh_token) => {
  if (accessToken && refresh_token) {
    Cookies.set(accessTokenKey, accessToken, {
      ...objCookies,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIES_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIES_DOMAIN,
    });
  }
};
export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};
