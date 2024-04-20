import React, { useState, useEffect, useCallback, useRef } from "react";
import style from "./chatbot.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faLaughBeam,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import scripQuestions from "./data";
import { Fab } from "@mui/material";

const cx = classNames.bind(style);

function ChatBot() {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      name: "Tony Stark",
      message: "Tìm kiếm chó mèo bằng hình ảnh ?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // Tham chiếu tới phần tử cuối cùng trong danh sách tin nhắn

  const [awnswerOption, setAnswerOptions] = useState(
    scripQuestions.answerOptions
  );

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isChatBoxVisible]); // Luôn cuộn xuống khi có tin nhắn mới được thêm vào

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

              {awnswerOption.map((answ, index) => {
                return (
                  <Fab
                    sx={{
                      mb: 1,
                      ml: 2,
                    }}
                    onClick={() => {
                      if (answ.childrens) {
                        setMessages((prev) => {
                          return [
                            ...prev,
                            {
                              name: "Peter Parker",
                              message: answ.answersValue,
                            },
                            {
                              name: "Tony Stark",
                              message: answ.childrens.autoBot,
                            },
                          ];
                        });
                        setAnswerOptions(answ.childrens.answerOptions);
                      }
                    }}
                    key={index}
                    variant="extended"
                    size="small"
                    color="primary"
                  >
                    {answ.answersValue}
                  </Fab>
                );
              })}
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
