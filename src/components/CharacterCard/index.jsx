import style from "./character-card.module.css";
import { getImageURL } from "../../utils/function";

const CharacterCard = ({ name, alias, image }) => {
  return (
    <div className={style.characterCardContainer}>
      <img className={style.image} src={getImageURL(image)} alt={alias} />
      <h3 className={style.name}>{name}</h3>
      <p className={style.alias}>Alias: {alias}</p>
    </div>
  );
};

export default CharacterCard;
