import Link from "next/link";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/portfolio/completed">
          <span>Completed Projects</span>
        </Link>
        <Link className={styles.item} href="/portfolio/ongoing">
          <span>Ongoing Projects</span>
        </Link>
        <Link className={styles.item} href="/portfolio/designs">
          <span>Ongoing Projects</span>
        </Link>
      </div>
    </div>
  );
}
export default Portfolio