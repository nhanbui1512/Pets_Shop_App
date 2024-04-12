import React, { useState, useEffect, useCallback, useRef } from "react";
import style from "./chatbot.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faLaughBeam,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);

function ChatBot() {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [messages, setMessages] = useState([
    { name: "Peter Parker", message: "Hey, man! What's up, Mr Stark? 👋" },
    { name: "Tony Stark", message: "Kid, where'd you come from? 🤔" },
    { name: "Peter Parker", message: "Uh, field trip! 🤣" },
    {
      name: "Peter Parker",
      message: "Uh, what is this guy's problem, Mr. Stark? 🤔",
    },
    {
      name: "Tony Stark",
      message:
        "Uh, he's from space, he came here to steal a necklace from a wizard.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // Tham chiếu tới phần tử cuối cùng trong danh sách tin nhắn

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Luôn cuộn xuống khi có tin nhắn mới được thêm vào

  const toggleChatBox = useCallback((event) => {
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
    setChatBoxVisible((vis) => !vis);
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      if (event.target.id === "chatbot-icon" || !isChatBoxVisible) {
        return;
      }
      if (!document.getElementById("chatbox").contains(event.target)) {
        setChatBoxVisible(false);
      }
    },
    [isChatBoxVisible]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { name: "Peter Parker", message: input }]);
      scrollToBottom();
      setInput("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className={cx("chatbot")} onClick={toggleChatBox}>
        <div className={cx("chatbot-icon")}>
          <img src="/images/chatbot.jpg" alt="chatbot" />
        </div>
      </div>
      {isChatBoxVisible && (
        <div className={cx("center")} id="chatbox">
          <div className={cx("chat")}>
            <div className={cx("messages")}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cx("message", {
                    parker: message.name === "Peter Parker",
                    stark: message.name === "Tony Stark",
                  })}
                >
                  <div className={cx("time")}>Today at 11:41</div>
                  <div className={cx("text")}>{message.message}</div>
                </div>
              ))}
              {/* Tham chiếu tới phần tử cuối cùng để cuộn xuống */}
              <div ref={messagesEndRef} />
            </div>
            <form className={cx("input")} onSubmit={handleSubmit}>
              <FontAwesomeIcon
                className={cx("fas fa-camera")}
                icon={faCamera}
              />
              <FontAwesomeIcon
                className={cx("fas fa-laugh-beam")}
                icon={faLaughBeam}
              />
              <input
                type="text"
                placeholder="Type your message here!"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">
                <i className="fas fa-paper-plane" />
              </button>
              <FontAwesomeIcon
                className={cx("fas fa-microphone")}
                icon={faPaperPlane}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
