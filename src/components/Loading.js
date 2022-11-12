import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loader}>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
