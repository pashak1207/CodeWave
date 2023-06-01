import React, { ReactElement, useState } from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";

function Menu(): ReactElement {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <div className="menu">
      <div className="menu__top">
        <div className="menu__logo">
          <NavLink to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.4192 1.91617H9.58084C5.34776 1.91617 1.91617 5.34776 1.91617 9.58084V30.4192C1.91617 34.6522 5.34776 38.0838 9.58084 38.0838H30.4192C34.6522 38.0838 38.0838 34.6522 38.0838 30.4192V9.58084C38.0838 5.34776 34.6522 1.91617 30.4192 1.91617ZM9.58084 0C4.28948 0 0 4.28948 0 9.58084V30.4192C0 35.7104 4.28948 40 9.58084 40H30.4192C35.7104 40 40 35.7104 40 30.4192V9.58084C40 4.28948 35.7104 0 30.4192 0H9.58084Z"
                fill="#FFA768"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8395 12.4945C10.6676 12.9821 9.8337 13.8232 9.27662 14.5369C8.78828 15.1626 7.88517 15.2739 7.25949 14.7856C6.63379 14.2973 6.52246 13.3942 7.0108 12.7685C7.73116 11.8455 8.93315 10.5907 10.7353 9.84081C12.5765 9.07468 14.9031 8.89487 17.7289 9.90407C19.4696 10.5258 20.8081 11.1787 21.894 11.7085C22.0881 11.8032 22.2741 11.8939 22.4529 11.9798C23.6553 12.5578 24.4702 12.8847 25.3732 12.9622C26.8508 13.0889 28.4376 12.356 29.9305 11.1962C30.1471 11.028 30.3935 10.8117 30.714 10.4871C31.2719 9.92239 32.1818 9.91681 32.7466 10.4746C33.3111 11.0324 33.3166 11.9423 32.759 12.5069C32.3667 12.904 32.0268 13.2073 31.6939 13.466C29.9923 14.7878 27.6802 16.0448 25.1277 15.8259C23.6589 15.7 22.4336 15.1595 21.2079 14.5704C21.0121 14.4764 20.8146 14.3801 20.6133 14.2821C19.5305 13.7543 18.3416 13.175 16.7622 12.6109C14.558 11.8237 12.9724 12.0231 11.8395 12.4945Z"
                fill="#4591AE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8395 20.055C10.6676 20.5426 9.8337 21.3836 9.27662 22.0974C8.78828 22.7231 7.88517 22.8344 7.25949 22.3461C6.63379 21.8577 6.52246 20.9547 7.0108 20.329C7.73116 19.406 8.93315 18.1512 10.7353 17.4013C12.5765 16.6352 14.9031 16.4554 17.7289 17.4646C19.4696 18.0863 20.8081 18.7392 21.894 19.269C22.0881 19.3637 22.2741 19.4544 22.4529 19.5403C23.6553 20.1183 24.4702 20.4452 25.3732 20.5227C26.8508 20.6494 28.4376 19.9165 29.9305 18.7567C30.1471 18.5884 30.3935 18.3722 30.714 18.0475C31.2719 17.4829 32.1818 17.4773 32.7466 18.0351C33.3111 18.5929 33.3166 19.5028 32.759 20.0674C32.3667 20.4645 32.0268 20.7678 31.6939 21.0265C29.9923 22.3483 27.6802 23.6053 25.1277 23.3863C23.6589 23.2604 22.4336 22.72 21.2079 22.1309C21.0121 22.0369 20.8146 21.9406 20.6133 21.8425C19.5305 21.3148 18.3416 20.7355 16.7622 20.1714C14.558 19.3842 12.9724 19.5836 11.8395 20.055Z"
                fill="#4591AE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8395 27.7198C10.6676 28.2072 9.8337 29.0484 9.27662 29.7622C8.78828 30.3878 7.88517 30.4992 7.25949 30.0108C6.63379 29.5224 6.52246 28.6194 7.0108 27.9935C7.73116 27.0707 8.93315 25.8158 10.7353 25.0659C12.5765 24.2999 14.9031 24.12 17.7289 25.1293C19.4696 25.7509 20.8081 26.4038 21.894 26.9337C22.0881 27.0283 22.2741 27.119 22.4529 27.205C23.6553 27.783 24.4702 28.1099 25.3732 28.1873C26.8508 28.314 28.4376 27.5811 29.9305 26.4213C30.1471 26.2532 30.3935 26.0369 30.714 25.7123C31.2719 25.1475 32.1818 25.142 32.7466 25.6996C33.3111 26.2575 33.3166 27.1674 32.759 27.7322C32.3667 28.1291 32.0268 28.4326 31.6939 28.6913C29.9923 30.0129 27.6802 31.2699 25.1277 31.051C23.6589 30.925 22.4336 30.3847 21.2079 29.7957C21.0121 29.7016 20.8146 29.6053 20.6133 29.5073C19.5305 28.9794 18.3416 28.4002 16.7622 27.8362C14.558 27.0489 12.9724 27.2484 11.8395 27.7198Z"
                fill="#4591AE"
              />
            </svg>
            <h1>codewave</h1>
          </NavLink>
        </div>
        <button className="menu__collapse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#6C7275" />
            <rect x="4" y="4" width="8" height="16" rx="2" fill="#fefefe" />
            {/* must be variable*/}
          </svg>
        </button>
      </div>
      <nav className="menu__nav">
        <ul>
          <li>
            <input type="search" placeholder="Search" />
            <span className="menu__key">F1</span>
          </li>
          <li>
            <NavLink to={"1"}>
              <h3>Home</h3>
              <span className="menu__key">F2</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"2"}>
              <h3>Chats</h3>
              <span className="menu__key">F3</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"3"}>
              <h3>Friends</h3>
              <span className="menu__key">F4</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"4"}>
              <h3>Code</h3>
              <span className="menu__key">F5</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"5"}>
              <h3>Settings</h3>
              <span className="menu__key">F6</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu__chats">
        <button className="menu__chatList">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#6C7275"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Chat list
        </button>
        <ul>
          <li>
            <NavLink to={"/"}>
              <span className="menu__colorPick"></span>
              <h4>Welcome</h4>
              <span>48</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <span className="menu__colorPick"></span>
              <h4>UI8 Production</h4>
              <span>16</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <span className="menu__colorPick"></span>
              <h4>Favorites</h4>
              <span>8</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <span className="menu__colorPick"></span>
              <h4>Archived</h4>
              <span>128</span>
            </NavLink>
          </li>
        </ul>
        <button className="menu__newList">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="9" fill="#6C7275" />
            <path
              d="M8 12H16"
              stroke="#fefefe"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16L12 8"
              stroke="#fefefe"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          New list
        </button>
      </div>
      <div
        onClick={() => setDarkTheme((prev) => !prev)}
        className="menu__theme"
      >
        <div className={"menu__light" + (darkTheme ? "" : " active")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M12 1C12 0.447715 11.5523 0 11 0C10.4477 0 10 0.447715 10 1V3C10 3.55228 10.4477 4 11 4C11.5523 4 12 3.55228 12 3V1Z"
              fill="#FEFEFE"
            />
            <path
              d="M12 19C12 18.4477 11.5523 18 11 18C10.4477 18 10 18.4477 10 19V21C10 21.5523 10.4477 22 11 22C11.5523 22 12 21.5523 12 21V19Z"
              fill="#FEFEFE"
            />
            <path
              d="M0 11C0 10.4477 0.447715 10 1 10H3C3.55228 10 4 10.4477 4 11C4 11.5523 3.55228 12 3 12H1C0.447715 12 0 11.5523 0 11Z"
              fill="#FEFEFE"
            />
            <path
              d="M4.60701 3.1928C4.21649 2.80227 3.58332 2.80227 3.1928 3.1928C2.80227 3.58332 2.80227 4.21649 3.1928 4.60701L4.60701 6.02122C4.99753 6.41175 5.6307 6.41175 6.02122 6.02122C6.41175 5.6307 6.41175 4.99753 6.02122 4.60701L4.60701 3.1928Z"
              fill="#FEFEFE"
            />
            <path
              d="M18.8072 3.1928C19.1978 3.58332 19.1978 4.21649 18.8072 4.60701L17.393 6.02122C17.0025 6.41175 16.3693 6.41175 15.9788 6.02122C15.5883 5.6307 15.5883 4.99753 15.9788 4.60701L17.393 3.1928C17.7835 2.80227 18.4167 2.80227 18.8072 3.1928Z"
              fill="#FEFEFE"
            />
            <path
              d="M6.02122 17.397C6.41175 17.0065 6.41175 16.3734 6.02122 15.9828C5.6307 15.5923 4.99753 15.5923 4.60701 15.9828L3.1928 17.397C2.80227 17.7876 2.80227 18.4207 3.1928 18.8113C3.58332 19.2018 4.21649 19.2018 4.60701 18.8113L6.02122 17.397Z"
              fill="#FEFEFE"
            />
            <path
              d="M15.9788 15.9828C16.3693 15.5923 17.0025 15.5923 17.393 15.9828L18.8072 17.397C19.1978 17.7876 19.1978 18.4207 18.8072 18.8113C18.4167 19.2018 17.7835 19.2018 17.393 18.8113L15.9788 17.397C15.5883 17.0065 15.5883 16.3734 15.9788 15.9828Z"
              fill="#FEFEFE"
            />
            <path
              d="M19 10C18.4477 10 18 10.4477 18 11C18 11.5523 18.4477 12 19 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H19Z"
              fill="#FEFEFE"
            />
            <path
              d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
              fill="#FEFEFE"
            />
          </svg>
          <span>Light</span>
        </div>
        <div className={"menu__dark" + (!darkTheme ? "" : " active")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
          >
            <path
              d="M21.5 14.8442C20.1866 15.4382 18.7286 15.7688 17.1935 15.7688C11.4153 15.7688 6.73116 11.0847 6.73116 5.30654C6.73116 3.77135 7.0618 2.3134 7.65577 1C4.02576 2.64163 1.5 6.2947 1.5 10.5377C1.5 16.3159 6.18414 21 11.9623 21C16.2053 21 19.8584 18.4742 21.5 14.8442Z"
              stroke="#6C7275"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Dark</span>
        </div>
        <div className={"menu__themeSwitch" + (darkTheme ? "" : " left")}></div>
      </div>
    </div>
  );
}

export default Menu;
