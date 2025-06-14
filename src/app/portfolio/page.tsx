import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        <div className={styles.items}>
          <Link className={styles.item} href="/portfolio/Completed-Projects">
            <span className={styles.title}>Completed Projects</span>
          </Link>
          <Link className={styles.item} href="/portfolio/Ongoing-Projects">
            <span className={styles.title}>Ongoing Projects</span>
          </Link>
          <Link className={styles.item} href="/portfolio/Designs">
            <span className={styles.title}>Designs</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Portfolio;

