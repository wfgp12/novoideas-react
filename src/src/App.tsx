import { useEffect } from "react";
import { AppRouter } from "./routes";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import localStorageUtility from "./utils/localstorage";

import { User } from "./models";

import "./App.scss";
import { loginService } from "./services/auth.service";
import { loginAction } from "./redux/slices/authSlice";
import { setChats, setLoading } from "./redux/slices/appSlice";
import { Modal } from "@mui/material";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.app.loading);

  useEffect(() => {
    const session = localStorageUtility.getItem<User>("session");
    if (session) {
      loginService(session).then((chats) => {
        if (chats) {
          dispatch(
            loginAction({
              user: session,
              isAuth: true,
            })
          );
          dispatch(setChats(chats));
        }
      }
      ).finally(() => {
        dispatch(setLoading(false));
      });
    }else{
      dispatch(setLoading(false));
    }
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Modal
          open={true}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="LoginPage__loading">Cargando...</div>
        </Modal>
      ) : (
        <AppRouter />
      )}
    </div>
  );
}

export default App;
