import {
  DownloadIcon,
  HomeIcon,
  LogoutIcon,
  MoviesIcon,
  SettingIcon,
  StarIcon,
  TimeIcon,
  TvIcon,
  UserGroupIcon,
  UserIcon,
} from "~/assets/icons";

export const LIST_NAV_ONE = [
  {
    id: 0,
    name: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Commuity",
    icon: <UserGroupIcon />,
    to: "/",
  },
  {
    id: 2,
    name: "Discover",
    icon: <UserGroupIcon />,
    to: "/",
  },
  {
    id: 3,
    name: "Awards",
    icon: <UserGroupIcon />,
    to: "/",
  },
  {
    id: 4,
    name: "Celebs",
    icon: <UserIcon />,
    to: "/",
  },
];

export const LIST_LIBARY = [
  {
    id: 0,
    name: "Recent",
    icon: <TimeIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Top Rated",
    icon: <StarIcon />,
    to: "/",
  },
  {
    id: 2,
    name: "Downloaded",
    icon: <DownloadIcon />,
    to: "/",
  },
];
export const LIST_CATEGORY = [
  {
    id: 0,
    name: "TV series",
    icon: <TvIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Movies",
    icon: <MoviesIcon />,
    to: "/",
  },
  {
    id: 2,
    name: "Anime",
    icon: <MoviesIcon />,
    to: "/",
  },
];
export const LIST_GENNERAL = [
  {
    id: 0,
    name: "Setting",
    icon: <SettingIcon />,
    to: "/",
  },
  {
    id: 1,
    name: "Logout",
    icon: <LogoutIcon />,
    to: "/",
  },
];
