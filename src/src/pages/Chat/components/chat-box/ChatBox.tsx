import { Chat } from "../../../../models";
import UserSVG from "../../../../assets/user.svg";

import "./ChatBox.scss";

interface IChatBox {
  chat: Chat;
  handleClick: () => void;
}
const ChatBox = ({ chat, handleClick }: IChatBox) => {
    return (
        <span className="chat-box" onClick={() => handleClick()}>
            <img src={UserSVG} alt="User image"  width={35} className="chat-box__image"/>
            <div className="chat-box__info">
                <div className="chat-box__info__user">
                    <span className="chat-box__info__user__name">{chat.autor}</span>
                    <span className="chat-box__info__user__date">{new Date(chat.timestamp).toLocaleDateString()}</span>
                </div>
                <span className=" chat-box__info__message">
                {typeof chat.mensaje === "string"
                    ? chat.mensaje
                    : chat.mensaje.nombre}
                </span>
            </div>
        </span>
    )
};

export default ChatBox;
