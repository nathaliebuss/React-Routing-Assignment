import { NavLink} from 'react-router-dom'
import style from "./enemies.module.css";
import characters from "../../../data/characters";
import CharacterCard from "../../../components/CharacterCard";

const Enemies = () => {
  const enemiesList = characters.filter((character) => character.status === "enemy");

  return (
    <>
      <div className={style.enemyContainer}>
        <h1 className={style.enemyTitle}>Villains of Season 1</h1>
        <div className={style.enemyGrid}>
            {enemiesList.map((enemy) => 
            <NavLink 
            key={enemy.id} 
            to={`/characters/${enemy.id}`} 
            className={style.cardText}> 
            <CharacterCard {...enemy} /></NavLink> )}
        </div>
      </div>
    </>
  );
};

export default Enemies;
