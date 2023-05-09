import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

function Menu(): ReactElement {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="Layer_39" data-name="Layer 39">
                <path d="M45.35,53.5H18.65A6.5,6.5,0,0,1,12.15,47V31.14a6.49,6.49,0,0,1,2.08-4.75L27.62,12.26a6.5,6.5,0,0,1,8.85-.06c.07.06,13.25,14.12,13.32,14.2a6.48,6.48,0,0,1,2.06,4.73V47A6.5,6.5,0,0,1,45.35,53.5ZM29.76,14.37,16.37,28.49a3.51,3.51,0,0,0-1.22,2.65V47a3.49,3.49,0,0,0,3.5,3.48h26.7A3.49,3.49,0,0,0,48.85,47V31.13a3.48,3.48,0,0,0-1.21-2.64L34.4,14.38A3.49,3.49,0,0,0,29.76,14.37ZM15.28,27.46h0Z" />
              </g>
            </svg>
            <h5>Головна</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="Layer_91" data-name="Layer 91">
                <path d="M53.44,17.78A1.51,1.51,0,0,0,52,16.69H12a1.52,1.52,0,0,0-1.5,1.5V45.81a1.5,1.5,0,0,0,1.5,1.5H52a1.5,1.5,0,0,0,1.5-1.5V18.19A1.84,1.84,0,0,0,53.44,17.78Zm-6.25,1.91L32,30.18,16.81,19.69ZM13.5,44.31V21.05L31.15,33.23a1.47,1.47,0,0,0,1.7,0L50.5,21.05V44.31Z" />
              </g>
            </svg>
            <h5>Повідомлення</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="Layer_28" data-name="Layer 28">
                <path d="M32,8.71A23.32,23.32,0,0,0,8.71,32C10,62.9,54,62.89,55.29,32A23.32,23.32,0,0,0,32,8.71Zm0,43.58A20.31,20.31,0,0,1,11.71,32C12.83,5.08,51.18,5.09,52.29,32A20.31,20.31,0,0,1,32,52.29Z" />
                <path d="M39.33,41a9.83,9.83,0,0,1-13.89,0,1.5,1.5,0,0,0-2.12,2.12,12.83,12.83,0,0,0,18.13,0A1.5,1.5,0,0,0,39.33,41Z" />
                <path d="M27.91,27.78A1.5,1.5,0,0,0,30,25.66a8.3,8.3,0,0,0-11.72,0,1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0A5.3,5.3,0,0,1,27.91,27.78Z" />
                <path d="M34,25.66a1.5,1.5,0,0,0,2.12,2.12,5.3,5.3,0,0,1,7.48,0,1.49,1.49,0,0,0,2.12,0,1.51,1.51,0,0,0,0-2.12A8.3,8.3,0,0,0,34,25.66Z" />
              </g>
            </svg>
            <h5>Друзі</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="Layer_27" data-name="Layer 27">
                <path d="M50.94,50.5H12a1.5,1.5,0,0,0,0,3H50.94A1.5,1.5,0,0,0,50.94,50.5Z" />
                <path d="M51.68,12.38h0c-2.83-2.83-7.88-2.39-11.26,1L20.24,33.55a1.47,1.47,0,0,0-.39.67l-3,11.16a1.51,1.51,0,0,0,1.84,1.83l11.15-3a1.4,1.4,0,0,0,.67-.38L47.86,26.46l2.83-2.83C53.75,20.71,54.75,15.4,51.68,12.38Zm-23,29-8.26,2.23,2.23-8.25,16-16,6,6ZM50.52,17.64c-.09,2.18-2.17,4.16-3.72,5.64l-6-6,1.76-1.77C45.67,12.22,51,13.06,50.52,17.64Z" />
              </g>
            </svg>
            <h5>Код</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="Layer_65" data-name="Layer 65">
                <path d="M32,21.54A10.47,10.47,0,0,0,21.54,32c.57,13.88,20.35,13.88,20.92,0A10.47,10.47,0,0,0,32,21.54Zm0,17.92A7.46,7.46,0,0,1,24.54,32c.35-9.88,14.58-9.88,14.92,0A7.46,7.46,0,0,1,32,39.46Z" />
                <path d="M53.94,26.57H50.72a18.83,18.83,0,0,0-1.65-4l2.28-2.28a1.49,1.49,0,0,0,0-2.12l-5.56-5.56a1.49,1.49,0,0,0-2.12,0l-2.28,2.28a18.83,18.83,0,0,0-4-1.65V10.06a1.5,1.5,0,0,0-1.5-1.5H28.07a1.5,1.5,0,0,0-1.5,1.5v3.22a18.83,18.83,0,0,0-4,1.65l-2.28-2.28a1.49,1.49,0,0,0-2.12,0l-5.56,5.56a1.49,1.49,0,0,0,0,2.12l2.28,2.28a18.83,18.83,0,0,0-1.65,4H10.06a1.5,1.5,0,0,0-1.5,1.5v7.86a1.5,1.5,0,0,0,1.5,1.5h3.22a18.83,18.83,0,0,0,1.65,4l-2.28,2.28a1.49,1.49,0,0,0,0,2.12l5.56,5.56a1.49,1.49,0,0,0,2.12,0l2.28-2.28a18.83,18.83,0,0,0,4,1.65v3.22a1.5,1.5,0,0,0,1.5,1.5h7.86a1.5,1.5,0,0,0,1.5-1.5V50.72a18.83,18.83,0,0,0,4-1.65l2.28,2.28a1.49,1.49,0,0,0,2.12,0l5.56-5.56a1.49,1.49,0,0,0,0-2.12l-2.28-2.28a18.83,18.83,0,0,0,1.65-4h3.22a1.5,1.5,0,0,0,1.5-1.5V28.07A1.5,1.5,0,0,0,53.94,26.57Zm-1.5,7.86H49.56l-.13,0a1.51,1.51,0,0,0-1.33,1.16,17.07,17.07,0,0,1-2.28,5.45,1.55,1.55,0,0,0,0,1.16,22.12,22.12,0,0,0,2.36,2.51l-3.44,3.44-2-2a1.53,1.53,0,0,0-1.89-.22,15.85,15.85,0,0,1-5.22,2.17,1.53,1.53,0,0,0-1.18,1.49v2.85H29.57V49.59a1.54,1.54,0,0,0-.91-1.4,17,17,0,0,1-5.49-2.26,1.53,1.53,0,0,0-1.89.22l-2,2-3.44-3.44,2-2a1.54,1.54,0,0,0,.22-1.89,17,17,0,0,1-2.26-5.49,1.51,1.51,0,0,0-1.4-.91H11.56V29.57a25.3,25.3,0,0,0,3.4-.1,1.52,1.52,0,0,0,.93-1.06,16.19,16.19,0,0,1,2.18-5.24,1.54,1.54,0,0,0-.22-1.89l-2-2,3.44-3.44,2,2a1.54,1.54,0,0,0,1.87.21,17,17,0,0,1,5.49-2.26,1.54,1.54,0,0,0,.91-1.4V11.56h4.86v2.85a1.54,1.54,0,0,0,.91,1.4,17,17,0,0,1,5.49,2.26,1.54,1.54,0,0,0,1.87-.21l2-2,3.44,3.44a23,23,0,0,0-2.36,2.51,1.55,1.55,0,0,0,0,1.16,17.07,17.07,0,0,1,2.28,5.45,1.54,1.54,0,0,0,1.46,1.18h2.88Z" />
              </g>
            </svg>
            <h5>Налаштування</h5>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
