import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "./Store/auth/auth-slice";
import { getToken, logout } from "./utils/auth";
import Router from "~/routes/Router";
function App() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logout();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="App">
      <Router />
    </div>
  );
}
export default App;
