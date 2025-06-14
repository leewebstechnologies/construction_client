import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import banner from "../../images/banner-3.jpg";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.imageContainer}>
          <Image
            src={banner}
            alt="banner"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>

      <Link className={styles.container} href="/blog/testId">
        <div className={styles.imageContainer}>
          <Image
            src={banner}
            alt="banner"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>

      <Link className={styles.container} href="/blog/testId">
        <div className={styles.imageContainer}>
          <Image
            src={banner}
            alt="banner"
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      
    </div>
  );
};
export default Blog;
