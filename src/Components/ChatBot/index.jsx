import React, { useState } from 'react';
import style from './chatbot.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faLaughBeam, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function ChatBot() {
    const [isChatBoxVisible, setChatBoxVisible] = useState(false);
    const [messages, setMessages] = useState([
        { name: 'Peter Parker', message: 'Hey, man! What\'s up, Mr Stark? 👋' },
        { name: 'Tony Stark', message: 'Kid, where\'d you come from? 🤔' },
        { name: 'Peter Parker', message: 'Uh, field trip! 🤣' },
        { name: 'Peter Parker', message: 'Uh, what is this guy\'s problem, Mr. Stark? 🤔' },
        { name: 'Tony Stark', message: 'Uh, he\'s from space, he came here to steal a necklace from a wizard.' },
    ]);
    const [input, setInput] = useState('');

    const toggleChatBox = () => setChatBoxVisible(!isChatBoxVisible);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { name: 'User', message: input }]);
            setInput('');
        }
    };

    return (
        <div>
            <div className={cx("chatbot")} onClick={toggleChatBox}>
                <div className={cx("chatbot-icon")}>
                    <img src="/images/chatbot.jpg" alt="chatbot" />
                </div>
            </div>
            {isChatBoxVisible && (
                <div className={cx("center")}>
                    {/* Contacts and Chat UI */}
                    <div className={cx("chat")}>
                        <div className={cx("contact", "bar")}>
                            <div className={cx("pic", "stark")} />
                            <div className={cx("name")}>Tony Stark</div>
                            <div className={cx("seen")}>Today at 12:56</div>
                        </div>
                        <div className={cx("messages")}>
                            {messages.map((message, index) => (
                                <div key={index} className={cx("message", { parker: message.name === 'Peter Parker', stark: message.name === 'Tony Stark' })}>
                                    <div className={cx("time")}>Today at 11:41</div>
                                    <div className={cx("text")}>{message.message}</div>
                                </div>
                            ))}
                        </div>
                        <form className={cx("input")} onSubmit={handleSubmit}>
                            {/* <i className="fas fa-camera" /> */}
                            <FontAwesomeIcon className={cx("fas fa-camera")} icon={faCamera} />
                            <i className="far fa-laugh-beam" />
                            <FontAwesomeIcon className={cx("fas fa-laugh-beam")} icon={faLaughBeam} />
                            <input type="text" placeholder="Type your message here!" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button type="submit"><i className="fas fa-paper-plane" /></button>
                            <FontAwesomeIcon className={cx("fas fa-microphone")} icon={faPaperPlane} />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBot;
