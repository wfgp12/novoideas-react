import { useEffect, useState } from "react";
import UserSVG from "../../../../assets/user.svg";
import LeftArrowSVG from "../../../../assets/left-arrow.svg";
import useForm from "../../../../hooks/useForm";
import { Chat, MensajeClass } from "../../../../models";

import "./ChatContent.scss";

interface IChatContent {
  chatSelected: Chat;
}
const ChatContent = ({ chatSelected }: IChatContent) => {
  useEffect(() => {
    setChatStack([chatSelected.mensaje]);
    return () => {
      setChatStack([]);
    };
  }, [chatSelected]);
  const [chatStack, setChatStack] = useState<(string | MensajeClass)[]>([]);

  const { state, handleChange, resetForm } = useForm({
    chatInput: "",
  });

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && state.chatInput !== "") {
      setChatStack([...chatStack, state.chatInput]);
      resetForm();
    }
  };

  return (
    <>
      <div className="chat-content__header">
        <span className="chat-content__header__go-back">
          <img src={LeftArrowSVG} width={25} alt="leftArrow" />
        </span>
        <img
          src={UserSVG}
          width={35}
          alt="User image"
          className="chat-content__header__avatar"
        />
        <span className="chat-content__header__autor">
          {chatSelected.autor}
        </span>
      </div>
      <div className="chat-content__history">
        {chatStack.map((message, index) => (
          <span key={index} className="chat-content__history__message">
            {typeof message === "string" ? message : <> {message.direccion}</>}
          </span>
        ))}
        <input
          type="text"
          name="chatInput"
          className="chat-content__input"
          placeholder="Escribe un mensaje"
          value={state.chatInput}
          onChange={handleChange}
          required
          onKeyDown={handleSubmit}
        />
      </div>
    </>
  );
};

export default ChatContent;
