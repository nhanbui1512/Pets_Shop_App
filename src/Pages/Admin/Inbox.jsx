import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConversations } from "../../Services/API/Chats";
import { StorageContext } from "../../Contexts/StorageContext";

function Inbox() {
  const [chats, setChats] = useState([]);
  const socket = useContext(StorageContext).socket;

  useEffect(() => {
    // call api get conversatioins
    getConversations()
      .then((res) => {
        setChats(res);
      })
      .catch((err) => {
        console.log(err);
      });

    socket.on("newChat", (data) => {
      console.log(data);
      setChats((prev) => {
        return [{ socketId: data.socketId, messages: [] }, ...prev];
      });
    });

    return () => {
      socket.off("newChat");
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
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
                                <input type="checkbox" id="chk2" />
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
                                Content Message Oldes
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
