import Link from "next/link";
import styles from "./NavigationBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/pokedex" className={styles.navLink}>
            Pokedex
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/fun" className={styles.navLink}>
            Fun
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
