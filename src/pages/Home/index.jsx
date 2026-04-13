import style from "./home.module.css";
import bannerImg from "../../assets/Images/banner.png";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.bannerContainer}>
        <img src={bannerImg} alt="Invincible Banner" className={style.banner} />
        <div className={style.textOverlay}>
          <h1 className={style.title}>Welcome to the Invincible Website!</h1>
        </div>
      </div>

      <div className={style.heroContent}>
        <p className={style.description}>
          Think you know the Guardians of the Globe? Explore the world of Mark
          Grayson and his friends (and the foes).
        </p>
        <p className={style.description}>
          <strong>Navigate your way through the navbar to start!</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
