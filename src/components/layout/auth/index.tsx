import { CircularProgress } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hook";
import { getUser } from "store/reducers/user/action-auth";

export const AuthLayout = () => {
  const { user, isLoading } = useAppSelector((state) => state.userReducer);
  const [isPageStarting, setIsPageStarting] = useState(true);
  const dispatch = useAppDispatch();

  //проверка авторизации
  useLayoutEffect(() => {
    if (!user) {
      (async () => {
        await dispatch(getUser());
        setIsPageStarting(false);
      })();
    } else {
      setIsPageStarting(false);
    }
  }, [user, dispatch]);

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && user && !isPageStarting && <Outlet />}
      {!user && !isPageStarting && <Navigate to="/sign-in" />}
    </>
  );
};
