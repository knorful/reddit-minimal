import { Skeleton } from "@material-ui/lab";
import classes from "./PostListItem.module.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const PostListItemSkeleton = () => {
  const matches = useMediaQuery("(min-width:600px)");

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
