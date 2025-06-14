import Image from "next/image";
import styles from "./page.module.css";
// import one from "../../../images/1.png";
import { categoryData } from "@/app/data";

interface CategoryProps {
  params: Record<string, string>;
}

const Category = async ({ params }: CategoryProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {categoryData.map((index) => (
        <div key={index.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{index.title}</h1>
            <p className={styles.desc}>{index.desc}</p>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={index.image}
              alt="portfolio"
            />
          </div>
        </div>
      ))}

      {/* <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={one} alt="portfolio" />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={one} alt="portfolio" />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={one} alt="portfolio" />
        </div>
      </div> */}
    </div>
  );
};
export default Category;
