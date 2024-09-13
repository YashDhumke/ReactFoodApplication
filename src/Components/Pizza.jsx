import styles from "./Pizza.module.css";
import { Link } from "react-router-dom";

function Pizza({ item }) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.heading}>
          <h1>{item.title}</h1>
        </div>
        <div className={styles.img}>
          <img src={item.image} alt="" />
        </div>
        <div className={styles.btn}>
          <button>
            <Link to={`/${item.id}`}>View More</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pizza;
