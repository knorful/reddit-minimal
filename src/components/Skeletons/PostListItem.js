import { Skeleton } from "@material-ui/lab";
import classes from "./PostListItem.module.css";

export const PostListItemSkeleton = () => {
  return (
    <div className={classes.PostListItemSkeleton}>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </div>
  );
};
