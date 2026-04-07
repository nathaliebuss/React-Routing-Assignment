import style from "./characters.module.css";
import { Outlet, Link } from "react-router-dom";


const CharactersPage = () => { 
  
  return (
    <>
      <div className={style.characterContainer}>
      {/* <nav className={style.characterPageNav}>
        <Link to="all-characters">All</Link>
        <Link to="heroes">Heroes</Link>
        <Link to="enemies">Enemies</Link>
      </nav> */}
      {/* This Outlet renders Heroes, Enemies, or AllCharacters */}
      <Outlet />
      </div>
    </>
  );
};

export default CharactersPage;
