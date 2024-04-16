import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hook";
import { UserCredentials } from "models/user";
import { loginUser } from "store/reducers/user/action-auth";
import styles from "./styles.module.scss";
import { Card } from "@mui/material";
import { CustomButton } from "components/ui/custom-button";
import { CustomInput } from "components/ui/custom-input";

export const Authorization = () => {
  const navigate = useNavigate();

  const { user, error } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<UserCredentials["username"]>("user");
  const [password, setPassword] = useState<UserCredentials["password"]>("pass");

  const usernameChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    []
  );

  const passwordChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

  }, [user, navigate]);

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <h2>Авторизация</h2>
        <form onSubmit={loginHandler}>
          <CustomInput
            error={Boolean(error)}
            label="Логин"
            onChange={usernameChangeHandler}
            value={username}
            required
            placeholder="Введите логин"
          />
          <CustomInput
            error={Boolean(error)}
            label="Пароль"
            onChange={passwordChangeHandler}
            value={password}
            required
            type="password"
            placeholder="Введите пароль"
            helperText={error}
          />
          <CustomButton type="submit" variant="contained">Войти</CustomButton>
        </form>
      </Card>
    </div>
  );
};
