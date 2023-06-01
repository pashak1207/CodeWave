import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./Main.scss";

function Main(e: any): React.ReactElement {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [inputFile, setInputFile] = useState<object | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const url = "http://localhost:3000/messages";
  const ulWithMessages: any = useRef<HTMLDivElement>(null);

  interface IMessage {
    id: number;
    message: string;
  }

  useEffect(() => {
    getMessages();
  }, []);

  function fileMessageHandler(e: any) {
    setInputFile(e.target.files[0]);
  }

  async function sendMessage(e: any) {
    e.preventDefault();
    await sendMessagePost(inputMessage);
    await getMessages();
    setInputMessage("");
    setTimeout(() => {
      ulWithMessages.current.scrollTop = ulWithMessages.current.scrollHeight;
    }, 0);
  }

  const getMessages = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessagePost = async (message: string) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
    } catch (error) {
      console.error("Error send: ", error);
    }
  };

  const deleteMessage = async (messageId: number) => {
    try {
      await fetch(url + "/" + messageId, {
        method: "DELETE",
      });

      await getMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <main>
      <div className="chat">
        <div ref={ulWithMessages} className="chat__text">
          <ul>
            {messages.map((item: IMessage) => (
              <li key={item.id}>
                {item.message}{" "}
                <button onClick={() => deleteMessage(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
                      stroke="#6C7275"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <form className="chat__input" onSubmit={sendMessage}>
          <label className="chat__addMedia">
            <input type="file" multiple={false} onChange={fileMessageHandler} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g filter="url(#filter0_i_255_22606)">
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="url(#paint0_linear_255_22606)"
                />
                <path
                  d="M12 8V16"
                  stroke="#F3F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 12L16 12"
                  stroke="#F3F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_255_22606"
                  x="0"
                  y="-1"
                  width="24"
                  height="25"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.363104 0 0 0 0 0.401094 0 0 0 0 0.420088 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_255_22606"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_255_22606"
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7F8689" />
                  <stop offset="1" stopColor="#6C7275" />
                </linearGradient>
              </defs>
            </svg>
          </label>
          <input
            placeholder="Type for message"
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="chat__voice">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M1 8L1 12M5.5 4L5.5 16M10 1V19M14.5 4V16M19 8V12"
                stroke="#6C7275"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
