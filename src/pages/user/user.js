import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUserData, selectUserData } from "../../features/user/userSlice";
import { PostListItem } from "../../components/PostListItem/PostListItem";

export const User = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const selectedUserData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(loadUserData(user));
  }, [dispatch, user]);

  const approvedUserData = selectedUserData.filter(
    (post) => post.data.thumbnail
  );

  return (
    <div>
      {approvedUserData ? (
        approvedUserData.map((userData) => <PostListItem post={userData} />)
      ) : (
        <h1>Not yet!!</h1>
      )}
    </div>
  );
};
