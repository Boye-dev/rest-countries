import React, { useContext } from "react";
import "../styles/navbar.css";
import { MdNightlightRound, MdOutlineNightlight } from "react-icons/md";
import RestCountriesContext from "../context/RestCountriesContext";
const Navbar = () => {
  const { setMode, mode } = useContext(RestCountriesContext);
  return (
    <>
      <nav className={mode ? "navbar_body_light" : "navbar_body_dark"}>
        <p className={mode ? "navbar_text_light" : "navbar_text_dark"}>
          Where In The World?
        </p>
        <div className="navbar_mode" onClick={() => setMode(!mode)}>
          {mode ? (
            <MdOutlineNightlight style={{ fontSize: "20px" }} />
          ) : (
            <MdNightlightRound
              style={{
                fontSize: "20px",
                color: "hsl(0, 0%, 100%)",
              }}
            />
          )}
          <p className={mode ? "navbar_text_light" : "navbar_text_dark"}>
            {mode ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
