import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import RestCountriesContext from "../context/RestCountriesContext";
import "../styles/details.css";
import { BiArrowBack } from "react-icons/bi";

const Details = () => {
  const { state } = useLocation();
  let languages = [];
  let currency = [];
  console.log(state);
  for (let curr in state.languages) {
    languages.push(curr);
  }
  for (let curr in state.currencies) {
    currency.push(curr);
  }

  const navigate = useNavigate();
  const { mode } = useContext(RestCountriesContext);
  return (
    <div className={mode ? "details_body_light" : "details_body_dark"}>
      <div
        onClick={() => navigate("/")}
        className={mode ? "details_region_light" : "details_region_dark"}
      >
        <BiArrowBack
          style={{ color: mode ? "black" : "white", paddingRight: "10px" }}
        />
        <p
          className={
            mode ? "details_filter_text_light" : "details_filter_text_dark"
          }
        >
          Back
        </p>
      </div>
      <div className="details_main_body">
        <div className={mode ? "details_image_light" : "details_image_dark"}>
          <img src={state.flags.png} alt="flag" className="details_flags" />
        </div>
        <div className="details_country">
          <h2
            className={
              mode ? "details_text_country_light" : "details_text_country_dark"
            }
          >
            {state.name.common}
          </h2>
          <div className="details_main_details">
            <div>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Native Name :
                <span
                  className={
                    mode
                      ? "details_under_others_light"
                      : "details_under_others_dark"
                  }
                >
                  {state.name.common}
                </span>
              </p>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Population :
                <span
                  className={
                    mode
                      ? "details_under_others_light"
                      : "details_under_others_dark"
                  }
                >
                  {state.population}
                </span>
              </p>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Region :
                <span
                  className={
                    mode
                      ? "details_under_others_light"
                      : "details_under_others_dark"
                  }
                >
                  {state.region}
                </span>
              </p>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Sub Region :
                <span
                  className={
                    mode
                      ? "details_under_others_light"
                      : "details_under_others_dark"
                  }
                >
                  {state.subregion}
                </span>
              </p>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Capital :
                <span
                  className={
                    mode
                      ? "details_under_others_light"
                      : "details_under_others_dark"
                  }
                >
                  {state.capital}
                </span>
              </p>
            </div>
            <div>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Top Levele Domain :{" "}
                <span
                  className={
                    mode
                      ? "details_under_others_light"
                      : "details_under_others_dark"
                  }
                >
                  {state.tld}
                </span>
              </p>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Currencies :{" "}
                <span
                  className={
                    mode
                      ? "details_under_others_light"
                      : "details_under_others_dark"
                  }
                >
                  {currency.map((item, index) => {
                    return (
                      <span
                        className={
                          mode
                            ? "details_under_others_light"
                            : "details_under_others_dark"
                        }
                      >
                        {state.currencies[item].name},
                      </span>
                    );
                  })}
                </span>
              </p>
              <p
                className={
                  mode ? "details_others_light" : "details_others_dark"
                }
              >
                Languages :{" "}
                {languages.map((item, index) => {
                  return (
                    <span
                      className={
                        mode
                          ? "details_under_others_light"
                          : "details_under_others_dark"
                      }
                    >
                      {state.languages[item]},
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="details_border">
            <p
              className={mode ? "details_others_light" : "details_others_dark"}
            >
              Border Countries :
            </p>
            <div className="details_border_country">
              {state?.borders?.map((item, index) => {
                return (
                  <div
                    className={
                      mode
                        ? "details_border_countries_light"
                        : "details_border_countries_dark"
                    }
                  >
                    <p
                      className={
                        mode
                          ? "details_others_count_light"
                          : "details_others_count_dark"
                      }
                    >
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
