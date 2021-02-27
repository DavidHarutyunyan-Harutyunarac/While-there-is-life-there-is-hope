import styles from "../scss/styles.module.scss";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="">
          <Image
            src="/logo.svg"
            height={31}
            width={47}
            quality={90}
            alt="Company Logo"
          />
        </a>
      </div>
      <div className={styles.phone_icon}>
        <a href="tel:89101234567">
          <Image layout="fill" src="/phone.svg" />
        </a>
      </div>
      <div>
        <a className={styles.phone_number} href="tel:89101234567">
          8 (910) 123-45-67
        </a>
      </div>
      <div className={styles.menu_icon}>
        <a href="/">
          <Image src="/burger.svg" height={24} width={24} />
        </a>
      </div>
    </header>
  );
}

export { Header };
