import style from "./allChar.module.css";
import Characters from "../../../data/characters";
import CharacterCard from "../../../components/CharacterCard";
import { NavLink } from "react-router-dom";

const AllCharacters = () => {
  const fullCharList = Characters;

  return (
    <div className={style.allCharContainer}>
      <h1 className={style.allCharTitle}>Season 1 Characters</h1>
      <div className={style.allCharGrid}>
        {fullCharList.map((allChar) => (
          <NavLink
            key={allChar.id}
            to={`/characters/${allChar.id}`}
             className={style.cardText} ><CharacterCard {...allChar} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllCharacters;
