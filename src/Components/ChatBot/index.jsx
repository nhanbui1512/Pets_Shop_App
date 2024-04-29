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
import { Button, Dialog, Fab, Paper, TextField } from "@mui/material";
import Typewriter from "typewriter-effect";

const cx = classNames.bind(style);

function ChatBot() {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [answerOptions, setAnswerOptions] = useState(
    scripQuestions.answerOptions
  );
  const [messages, setMessages] = useState([
    {
      name: "Tony Stark",
      message: "Tìm kiếm và gợi ý bằng hình ảnh ?",
    },
  ]);

  const messagesEndRef = useRef(null); // Tham chiếu tới phần tử cuối cùng trong danh sách tin nhắn
  const inputFileRef = useRef();

  const [input, setInput] = useState("");
  const [urlPredict, setUrlPredict] = useState("");

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
      // if (!document.getElementById("chatbox").contains(event.target)) {
      //   setChatBoxVisible(false);
      // }
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
      <Dialog open={openDialog}>
        <Paper sx={{ padding: 2 }} elevation={20}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 300,
            }}
          >
            <TextField
              value={urlPredict}
              onChange={(e) => {
                setUrlPredict(e.target.value);
              }}
              sx={{
                width: "100%",
              }}
              className={cx("text-input")}
              variant="outlined"
              inputProps={{
                style: {
                  padding: "20px 16px",
                },
              }}
            />
          </div>

          <Button
            onClick={() => {
              setOpenDialog(false);
            }}
            variant="text"
          >
            Close
          </Button>
          <Button
            onClick={() => {
              setMessages((prev) => {
                return [
                  ...prev,
                  {
                    name: "Peter Parker",
                    message: `Liên kết ảnh : ${urlPredict}`,
                    image: urlPredict,
                  },
                ];
              });
              setOpenDialog(false);
              setAnswerOptions([]);
              setUrlPredict("");
              setChatBoxVisible(true);
            }}
            variant="text"
          >
            Send
          </Button>
        </Paper>
      </Dialog>
      <div className={cx("chatbot")} onClick={toggleChatBox}>
        <div className={cx("chatbot-icon")}>
          <img src="/images/chatbot.jpg" alt="chatbot" />
        </div>
      </div>
      {
        <div
          className={cx("center", { visible: !isChatBoxVisible })}
          id="chatbox"
        >
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
                  <div className={cx("text")}>
                    {message.name === "Tony Stark" ? (
                      <Typewriter
                        options={{
                          strings: message.message,
                          autoStart: true,
                          delay: 50,
                          cursor: "",
                        }}
                      />
                    ) : (
                      <p>{message.message}</p>
                    )}
                  </div>
                  {message.image && (
                    <div className={cx("image-message")}>
                      <img src={message.image} alt="" />
                    </div>
                  )}
                </div>
              ))}

              {answerOptions.map((answ, index) => {
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
                      if (answ.onClick) {
                        answ.onClick(inputFileRef);
                      }
                      if (answ.openDialog) {
                        setOpenDialog(true);
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
            setAnswerOptions([]);
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

export default ChatBot;
