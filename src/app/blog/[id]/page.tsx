import Image from "next/image";
import styles from "./page.module.css";
import avatar from "../../../images/avatar.png";
import banner from "../../../images/banner-1.jpg";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Causes of building collapse</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            voluptatem fuga eius voluptatum nesciunt veritatis, dolores officia
            exercitationem necessitatibus harum doloremque labore impedit natus
            aliquid sunt, maiores cupiditate nam quis.
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="avatar"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Abdul Azeez Akinola</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={banner} fill={true} alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vel soluta
          autem aperiam, reiciendis odit inventore deserunt ducimus obcaecati,
          rem placeat, nam libero tempore eligendi eveniet tenetur assumenda
          temporibus explicabo?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vel soluta
          autem aperiam, reiciendis odit inventore deserunt ducimus obcaecati,
          rem placeat, nam libero tempore eligendi eveniet tenetur assumenda
          temporibus explicabo?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vel soluta
          autem aperiam, reiciendis odit inventore deserunt ducimus obcaecati,
          rem placeat, nam libero tempore eligendi eveniet tenetur assumenda
          temporibus explicabo?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vel soluta
          autem aperiam, reiciendis odit inventore deserunt ducimus obcaecati,
          rem placeat, nam libero tempore eligendi eveniet tenetur assumenda
          temporibus explicabo?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vel soluta
          autem aperiam, reiciendis odit inventore deserunt ducimus obcaecati,
          rem placeat, nam libero tempore eligendi eveniet tenetur assumenda
          temporibus explicabo?
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vel soluta
          autem aperiam, reiciendis odit inventore deserunt ducimus obcaecati,
          rem placeat, nam libero tempore eligendi eveniet tenetur assumenda
          temporibus explicabo?
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};
export default Post;
