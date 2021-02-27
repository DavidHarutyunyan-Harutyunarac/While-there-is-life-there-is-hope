import styles from "../scss/styles.module.scss";
import { Button } from "./Button";

function MainBlock() {
  return (
    <div className={styles.main_block}>
      <h1 className={styles.heading}>Подари мечту</h1>
      <div className={styles.subheading}>
        Самые свежие пионы в Москве <br /> с доставкой на дом
      </div>
      <Button />
    </div>
  );
}

export { MainBlock };
