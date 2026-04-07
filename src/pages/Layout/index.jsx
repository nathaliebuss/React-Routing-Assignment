import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={style.layoutContainer}>
        <Navbar />

        <main className={style.mainContent}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
