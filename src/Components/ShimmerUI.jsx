import styles from "./Shimmer.module.css";

function ShimmerUI() {
  return (
    <>
      <div className={styles.shimmercontainer}>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
        <div className={styles.shimmer}></div>
      </div>
    </>
  );
}

export default ShimmerUI;
