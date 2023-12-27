import "./ChatPages.scss";
import { useAppSelector } from "../../redux/store/hooks";
import { useState } from "react";
import { Chat } from "../../models";
import { ChatBox, ChatContent } from "./components";


const ChatPage = () => {
  const chats = useAppSelector((state) => state.app.chats);
  const [chatSelected, setChatSelected] = useState<Chat | null>(null);

  return (
    <div className="chat-page">
      <div className="chat-page__menu">
        {chats.map((chat, index) => (
          <ChatBox
            key={index}
            chat={chat}
            handleClick={() => setChatSelected(chat)}
          />
        ))}
      </div>
      <div className="chat-page__chat">
        {chatSelected !== null ? <ChatContent chatSelected={chatSelected}/> : null}
      </div>
    </div>
  );
};

export default ChatPage;
