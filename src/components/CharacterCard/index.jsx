import style from "./character-card.module.css";
import { getImageURL } from "../../utils/function";

const CharacterCard = ({ name, alias, image }) => {
  return (
    <div className={style.characterCardContainer}>
      <img className={style.image} src={getImageURL(image)} alt={alias} />
      <div className={style.cardText}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.alias}>Alias: {alias}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
