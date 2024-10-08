import React, { useState, useEffect, useRef } from "react";
import style from "./ChatBox.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faLaughBeam,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { StorageContext } from "../../../Contexts/StorageContext";
import { useParams } from "react-router-dom";
import { getMessages } from "../../../Services/API/Chats";

const cx = classNames.bind(style);

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const storageContext = useContext(StorageContext);
  const socket = storageContext.socket;
  const messagesEndRef = useRef(null); // Tham chiếu tới phần tử cuối cùng trong danh sách tin nhắn
  const inputFileRef = useRef();

  const { id } = useParams();

  const [input, setInput] = useState("");

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  };
  const sendMessage = (message) => {
    if (message !== "") {
      socket.emit("admin message to server", {
        message: message,
        socketId: id,
      });
    }
  };

  useEffect(() => {
    getMessages(id)
      .then((res) => {
        setMessages(res.messages.reverse());
      })
      .catch((err) => {
        console.log(err);
      });

    socket.on("user message to admin", (data) => {
      if (data.socketId === id) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { name: "user", message: data.message },
        ]);
      }
    });

    return () => {
      socket.off("user message to admin");
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Luôn cuộn xuống khi có tin nhắn mới được thêm vào

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { isAdmin: true, message: input }]);
      scrollToBottom();
      setInput("");
      sendMessage(input);
    }
  };

  return (
    <div>
      {
        <div className={cx("center")} id="chatbox">
          <div className={cx("chat")}>
            <div className={cx("messages")}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cx("message", {
                    parker: message.isAdmin,
                  })}
                >
                  <div className={cx("time")}>Today at 11:41</div>
                  <div className={cx("text")}>
                    <p>{message.message}</p>
                  </div>
                  {message.image && (
                    <div className={cx("image-message")}>
                      <img src={message.image} alt="" />
                    </div>
                  )}
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
      }

      <input
        style={{ display: "none" }}
        max={5}
        accept=".jpg, .jpeg, .png"
        onChange={(e) => {
          if (
            e.target.files.length > 0 &&
            e.target.files[0].type.includes("image")
          ) {
            const file = e.target.files[0];
            const fileURL = URL.createObjectURL(file);

            setMessages((prev) => {
              return [
                ...prev,
                {
                  name: "Peter Parker",
                  image: fileURL,
                },
              ];
            });
          }
        }}
        ref={inputFileRef}
        type="file"
        className="disappear"
      />
    </div>
  );
}
export default ChatBox;
