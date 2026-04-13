import style from "./characters.module.css";
import { Outlet } from "react-router-dom";


const CharactersPage = () => { 
  
  return (
    <>
      <div className={style.characterContainer}>
      {/* This Outlet renders Heroes, Enemies, or AllCharacters */}
      <Outlet />
      </div>
    </>
  );
};

export default CharactersPage;
