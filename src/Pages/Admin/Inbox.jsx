import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConversations } from "../../Services/API/Chats";
import { StorageContext } from "../../Contexts/StorageContext";
import Button from "@mui/material/Button";
function Inbox() {
  const [chats, setChats] = useState([]);
  const [deleteIds, setDeleteIds] = useState([]);

  const socket = useContext(StorageContext).socket;

  const handleChecked = (e, idConversation) => {
    const isChecked = e.target.checked;
    if (isChecked === true && deleteIds.includes(idConversation) === false) {
      setDeleteIds((prev) => [...prev, idConversation]);
    } else {
      setDeleteIds((prev) => {
        const filterd = prev.filter((item) => item !== idConversation);
        return filterd;
      });
    }
  };

  useEffect(() => {
    // call api get conversatioins
    getConversations()
      .then((res) => {
        setChats(res.reverse());
      })
      .catch((err) => {
        console.log(err);
      });

    socket.on("newChat", (data) => {
      setChats((prev) => {
        return [
          { socketId: data.socketId, lastMessage: data.message },
          ...prev,
        ];
      });

      socket.on("user message to admin", (data) => {
        const socketId = data.socketId;
        const message = data.message;

        setChats((prev) => {
          const newState = [...prev];
          const indexConv = newState.findIndex(
            (chat) => chat.socketId === socketId
          );

          // thay nội dung tin nhắn cuối cùng hiển thị preview
          if (indexConv !== -1) {
            newState[indexConv].lastMessage = message;
            // đưa đoạn hội thoại lên đầu
            if (indexConv !== 0) {
              const element = newState.splice(indexConv, 1)[0];
              newState.unshift(element);
            }
          }
          return newState;
        });
      });
    });

    return () => {
      socket.off("user message to admin");
      socket.off("newChat");
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Button sx={{ margin: "10px 20px" }} variant="contained">
            Delete
          </Button>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="email-list m-t-15">
                    {chats.map((chat, index) => {
                      return (
                        <div key={index} className="message">
                          <div>
                            <div className="col-mail col-mail-1">
                              <div className="email-checkbox">
                                <input
                                  onChange={(e) => handleChecked(e, chat._id)}
                                  type="checkbox"
                                  id="chk2"
                                />
                                <label
                                  className="toggle"
                                  htmlFor="chk2"
                                ></label>
                              </div>
                              <span className="star-toggle ti-star"></span>
                            </div>
                            <div className="col-mail col-mail-2">
                              <Link
                                to={`/admin/inbox/${chat.socketId}`}
                                className="subject"
                              >
                                {`${chat.socketId}: ${chat.lastMessage}`}
                              </Link>
                              <div className="date">11:49 am</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="row">
                    <div className="col-7">
                      <div className="text-left">1 - 20 of 568</div>
                    </div>
                    <div className="col-5">
                      <div className="btn-group float-right">
                        <button className="btn btn-gradient" type="button">
                          <i className="fa fa-angle-left"></i>
                        </button>
                        <button className="btn btn-dark" type="button">
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
