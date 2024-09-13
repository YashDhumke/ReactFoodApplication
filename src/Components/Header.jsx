import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.headercontainer}>
      <header className={styles.heading}>
        <h2>Welcome to the Food Application ! 🍔</h2>
      </header>
    </div>
  );
}

export default Header;
