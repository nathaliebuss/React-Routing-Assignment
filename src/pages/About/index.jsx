import style from "./about.module.css";
import banner from "../../assets/Images/banner.png"; 

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.bannerContainer}>
        <img
          src={banner}
          alt="Invincible Show Banner"
          className={style.banner}
        />
        <div className={style.bannerOverlay}>
          <h1 className={style.title}>About the Show</h1>
        </div>
      </div>

      <div className={style.synopsisSection}>
        <h2 className={style.subtitle}>Everything is Going to Change</h2>
        <p className={style.text}>
          Based on the groundbreaking comic book by Robert Kirkman, Cory Walker,
          and Ryan Ottley,
          <strong> Invincible</strong> is an adult animated superhero show that
          revolves around 17-year-old Mark Grayson. He's just like every other
          guy his age — except his father is the most powerful superhero on the
          planet, Omni-Man.
        </p>

        <p className={style.text}>
          But the show gets pretty dark as Mark learns that being a "hero" isn't
          just about winning fights—it's about figuring out who you can actually
          trust when the world starts falling apart. As he continues to develop powers of
          his own, he discovers that his father's legacy may not be as heroic as
          it seems. Season 1 takes us through a brutal, emotional journey of
          self-discovery, betrayals, and world-shattering fights that redefine
          what it means to be a hero.
        </p>

        <blockquote className={style.quote}>
          "When I Was A Kid, I Always Wanted To Be My Dad. What If That Happens?
          What If I Become Him And I Don't Even Know It?" -Mark Grayson, Season
          1.
        </blockquote>
      </div>
    </div>
  );
};

export default About;
