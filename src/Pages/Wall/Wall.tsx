import React, {
  ChangeEventHandler,
  MouseEventHandler,
  ReactElement,
  useState,
} from "react";
import "./Wall.scss";

function Wall(): ReactElement {
  const [isActive, setIsActive] = useState(false);
  const [posts, setPosts] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur cupiditate deleniti labore libero minima minus nihil quae. Ad doloribus facere illum in molestiae molestias mollitia, qui quod recusandae similique.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur cupiditate deleniti labore libero minima minus nihil quae. Ad doloribus facere illum in molestiae molestias mollitia, qui quod recusandae similique.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur cupiditate deleniti labore libero minima minus nihil quae. Ad doloribus facere illum in molestiae molestias mollitia, qui quod recusandae similique.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur cupiditate deleniti labore libero minima minus nihil quae. Ad doloribus facere illum in molestiae molestias mollitia, qui quod recusandae similique.",
  ]);
  const [postText, setPostText] = useState("");

  const onFocusInputHandler = (e: any): void => {
    if (isActive) {
      e.target.style.height = `inherit`;
    }
    setIsActive((current: boolean) => !current);
  };

  const handleKeyDown: ChangeEventHandler = (event) => {
    if (event.target instanceof HTMLTextAreaElement) {
      const target: HTMLTextAreaElement = event.target;
      setPostText(target.value);
      target.style.height = "inherit";
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  const sendMessageHandler: MouseEventHandler = (event) => {
    if (postText.trim() !== "") {
      setPosts((current: string[]) => [postText, ...current]);
      setPostText("");
    }
  };

  return (
    <div className="center-section wall">
      <div className={isActive ? "create-post open" : "create-post"}>
        <div className="create-post__top">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile_image"
          />
          <div className="create-post__profile">
            <h5>MyProfile</h5>
            <p>Online</p>
          </div>
          <textarea
            value={postText}
            onFocus={onFocusInputHandler}
            onBlur={onFocusInputHandler}
            onChange={handleKeyDown}
            placeholder="Share something..."
          ></textarea>
          <button onClick={sendMessageHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="Layer_95" data-name="Layer 95">
                <path d="M53.06,10.94a1.5,1.5,0,0,0-1.53-.36l-40,13.33a1.51,1.51,0,0,0-.06,2.83l18.7,7.09,7.09,18.7a1.51,1.51,0,0,0,1.44,1,1.49,1.49,0,0,0,1.39-1l13.33-40A1.5,1.5,0,0,0,53.06,10.94ZM38.58,47.53,33.08,33l4.72-4.72a1.5,1.5,0,0,0-2.12-2.12L31,30.92l-14.49-5.5L49.63,14.37Z" />
                <path d="M20.22,35.48a1.5,1.5,0,0,0-2.12-2.12l-4.48,4.48a1.51,1.51,0,0,0,0,2.12,1.49,1.49,0,0,0,2.12,0Z" />
                <path d="M23.88,40.12a1.49,1.49,0,0,0-2.12,0L16.08,45.8a1.5,1.5,0,0,0,2.12,2.12l5.68-5.68A1.49,1.49,0,0,0,23.88,40.12Z" />
                <path d="M28.52,43.78,24,48.26a1.5,1.5,0,0,0,2.12,2.12l4.48-4.48A1.5,1.5,0,0,0,28.52,43.78Z" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="posts">
        {posts.map((post: string, i: number) => (
          <p key={i}>{post}</p>
        ))}
      </div>
    </div>
  );
}

export default Wall;
