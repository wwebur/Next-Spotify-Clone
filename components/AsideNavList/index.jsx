import React from "react";
import SearchIcon from "../../public/assets/icons/searchIcon";
import HomeIcon from "../../public/assets/icons/homeIcon";
import LibIcon from "../../public/assets/icons/LibIcon";
import HeartIcon from "../../public/assets/icons/HeartIcon";
import PlusIcon from "../../public/assets/icons/plusIcon";
import AppModeIcon from "../../public/assets/icons/appModeIcon";
import styles from "./.module.sass";
import NavLink from "../NavLink";
import { useTheme } from "next-themes";

export default function AsideNavList({ open }) {
  const { theme, setTheme } = useTheme("");
  const siteMap = [
    {
      id: 1,
      name: "home",
      path: "/",
      icon: <HomeIcon />,
      route: true,
    },
    {
      id: 2,
      name: "search",
      path: "/search",
      icon: <SearchIcon />,
      route: true,
    },
    {
      id: 3,
      name: "library",
      path: "/collection",
      icon: <LibIcon />,
      route: true,
    },
    { id: 4 },
    {
      id: 5,
      name: "create playlist",
      path: "/play",
      icon: <PlusIcon />,
    },
    {
      id: 6,
      name: "liked songs",
      path: "/collection/tracks",
      icon: <HeartIcon />,
      route: true,
    },
    { id: 7 },
    {
      id: 8,
      name: `${theme === "dark" ? "light" : "dark"} mode`,
      path: "/mode",
      icon: <AppModeIcon />,
      function: setTheme,
    },
  ];

  return (
    <nav className={`${styles.app_navigation} my-4`}>
      <ul className={styles.app_navigation_list}>
        {siteMap.map((el) => {
          if (el.name)
            if (el.route)
              return (
                <NavLink
                  key={el.id}
                  styles={styles}
                  href={el.path}
                  exact
                  className={styles.app_nav_link}
                >
                  {el.icon}
                  {open ? <span>{el.name}</span> : null}
                </NavLink>
              );
            else {
              return (
                <li key={el.id} className={`${styles.app_nav_item}`}>
                  <div className="container">
                    <button
                      className={styles.app_nav_link}
                      onClick={() => {
                        if (el.path === "/mode") {
                          el.function(theme === "light" ? "dark" : "light");
                        }
                      }}
                    >
                      {el.icon}
                      {open ? <span>{el.name}</span> : null}
                    </button>
                  </div>
                </li>
              );
            }
          else {
            return (
              <li key={el.id} className={`${styles.app_nav_item}`}>
                <div className="container">
                  <hr className={styles.list_divider} />
                </div>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}