import styles from "../scss/styles.module.scss";

function Button() {
  return (
    <div className={styles.button_parent}>
      <button className={styles.button_inner}>В каталог</button>
    </div>
  );
}

export { Button };
