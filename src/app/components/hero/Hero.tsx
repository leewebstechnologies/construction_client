import Image from "next/image";
import "./hero.scss";
import banner1 from "../../../images/banner-1.jpg";
import banner2 from "../../../images/banner-2.jpg";
import banner3 from "../../../images/banner-3.jpg";

const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Lacrete Concept Construction Company</h5>
              <p>We build top-notch projects</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Lacrete Concept Construction Company</h5>
              <p>We build quality projects for our clients</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Lacrete Concept Construction Company</h5>
              <p>We use high-quality materials</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Hero;
