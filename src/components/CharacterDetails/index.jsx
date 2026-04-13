import style from "./character-details.module.css";
import { getImageURL } from "../../utils/function";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../data/characters";

const CharacterDetail = () => {
  const { id } = useParams();   // display the right path in the searchbar, taken from app.jsx routes
  const character = getCharacterById(id);   // it fetches the info from my data file where the info about the character is stored

  return (
    <>
      <div className={style.characterDetailContainer}>
        <h1 className={style.name}>{character.name}</h1>
        <img
          className={style.img}
          src={getImageURL(character.image)}
          alt={character.name}
        />
        <p className={style.charDescription}>{character.description}</p>
        <h3 className={style.powersTitle}>Powers:</h3>
        <p className={style.powers}>
          {character.powers.map((power, index) => (
            <li key={index} className={style.powerItem}>
              {" "}
              {power}{" "}
            </li>
          ))}
        </p>
      </div>
    </>
  );
};

export default CharacterDetail;
