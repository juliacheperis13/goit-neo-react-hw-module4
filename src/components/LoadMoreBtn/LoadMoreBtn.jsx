import styles from "./LoadMoreBtn.module.css";
import clsx from "clsx";

const LoadMoreBtn = ({ loadMoreHandler }) => {
  return (
    <div className={styles.loadMore}>
      <button
        className={clsx('button', styles.loadMoreButton)}
        onClick={() => {
          loadMoreHandler();
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
