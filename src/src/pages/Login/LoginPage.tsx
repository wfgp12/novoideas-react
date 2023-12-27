// Actions
import { loginAction } from "../../redux/slices/authSlice";
import { setChats, setLoading } from "../../redux/slices/appSlice";

// Libraries
import React from "react";

// Models
import { User } from "../../models/user";

// hooks
import { useAppDispatch } from "../../redux/store/hooks";
import useForm from "../../hooks/useForm";

// Styles
import "./LoginPage.scss";

// Services
import { loginService } from "../../services/auth.service";

// Utils
import localStorageUtility from "../../utils/localstorage";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const { state, handleChange } = useForm<User>({
    user: "",
    pass: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const chats = await loginService(state);
      if (chats) {
        localStorageUtility.setItem("session", state);
        dispatch(
          loginAction({
            user: state,
            isAuth: true,
          })
        );
        dispatch(setChats(chats));
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="LoginPage">
      <div  className="LoginPage__title">
        <h1>INICIO DE SESIÓN</h1>
      </div>
      <form id="loginForm" className="LoginPage__form" onSubmit={handleSubmit}>
        <div className="LoginPage__form__field">
          <label className="LoginPage__form__label">Usuario :</label>
          <input
            type="email"
            name="user"
            className="LoginPage__form__input"
            value={state.user}
            onChange={handleChange}
            required
          />
        </div>
        <div className="LoginPage__form__field">
          <label className="LoginPage__form__label">password: </label>
          <input
            type="password"
            name="pass"
            className="LoginPage__form__input"
            value={state.pass}
            onChange={handleChange}
            required
          />
        </div>
        <button className="LoginPage__form__button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
