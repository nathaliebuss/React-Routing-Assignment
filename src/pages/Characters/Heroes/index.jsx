import { NavLink } from 'react-router-dom'
import style from "./heroes.module.css";
import characters from "../../../data/characters";
import CharacterCard from "../../../components/CharacterCard";

const Heroes = () => {
    //get the heroes from the data file
  const heroList = characters.filter((character) => character.status === "hero",);

  return (
    <div className={style.heroesContainer}>
      <h1 className={style.heroTitle}>The Heroes and Allies of Season 1</h1>
      <div className={style.heroGrid}>
        {/* map through the heroes to display them*/}
        {heroList.map((hero) => 
        <NavLink 
        key={hero.id}
        to={`/characters/${hero.id}`} 
        className={style.cardText}> <CharacterCard {...hero} /></NavLink> )}
      </div>
    </div>
  );
};

export default Heroes;
