import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUserData, selectUserData } from "../../features/user/userSlice";

export const User = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const selectedUserData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(loadUserData(user));
  }, [dispatch, user]);

  console.log("user data", selectedUserData);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};
