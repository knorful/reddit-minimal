import { Skeleton } from "@material-ui/lab";
import classes from "./PostListItem.module.css";

export const PostListItemSkeleton = () => {
  return (
    <div className={classes.PostListItemSkeleton}>
      <div className={classes.headerSkeleton}>
        <Skeleton animation="wave" variant="circle" width={40} height={40} />
        <Skeleton animation="wave" variant="text" width={260} />
      </div>
      <Skeleton
        fitContent
        animation="wave"
        variant="rect"
        width={480}
        height={105}
        className={classes.paragraphSkeleton}
      />
    </div>
  );
};