import "../styles/home.css";
import React, { useContext, useEffect, useState } from "react";
import RestCountriesContext from "../context/RestCountriesContext";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router";
import axios from "axios";
const Home = () => {
  const { mode } = useContext(RestCountriesContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios.get(`https://restcountries.com/v3.1/all/`);
        setData(res.data);
      } catch (error) {}
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getCountriesBySearch = async () => {
      try {
        if (search.length !== 0) {
          const res = await axios.get(
            `https://restcountries.com/v3.1/name/${search}`
          );
          setData(res.data);
        }
        if (search.length === 0) {
          const getCountries = async () => {
            try {
              const res = await axios.get(
                `https://restcountries.com/v3.1/all/`
              );
              setData(res.data);
            } catch (error) {}
          };
          getCountries();
        }
      } catch (error) {}
    };
    getCountriesBySearch();
  }, [search]);
  useEffect(() => {
    const getCountriesBySearch = async () => {
      try {
        if (filter.length !== 0) {
          const res = await axios.get(
            `https://restcountries.com/v3.1/region/${filter}`
          );
          setData(res.data);
        }
        if (filter.length === 0) {
          const getCountries = async () => {
            try {
              const res = await axios.get(
                `https://restcountries.com/v3.1/all/`
              );
              setData(res.data);
            } catch (error) {}
          };
          getCountries();
        }
      } catch (error) {}
    };
    getCountriesBySearch();
  }, [filter]);

  return (
    <>
      <div className={mode ? "home_body_light" : "home_body_dark"}>
        <div className="home_filters">
          <div className="home_input">
            <input
              type="text"
              className={mode ? "home_search_dark" : "home_search_light"}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a country..."
            />
          </div>
          <div className="home_region_right">
            <div
              className={mode ? "home_region_light" : "home_region_dark"}
              onClick={() => setShowFilter(!showFilter)}
            >
              <p
                className={
                  mode ? "home_filter_text_light" : "home_filter_text_dark"
                }
              >
                Filter by Region
              </p>
              {showFilter ? (
                <IoMdArrowDropdown
                  style={{ color: mode ? "black" : "white", fontSize: "18px" }}
                />
              ) : (
                <IoMdArrowDropright
                  style={{ color: mode ? "black" : "white", fontSize: "18px" }}
                />
              )}
            </div>
            {showFilter && (
              <div
                className={
                  mode
                    ? "home_region_filters_light"
                    : "home_region_filters_dark"
                }
              >
                {["Africa", "America", "Asia", "Europe", "Oceania"].map(
                  (item, index) => {
                    return (
                      <p
                        key={index}
                        onClick={() => {
                          setShowFilter(false);
                          setFilter(item);
                        }}
                        className={
                          mode
                            ? "home_filter_text_light"
                            : "home_filter_text_dark"
                        }
                      >
                        {item}
                      </p>
                    );
                  }
                )}
                <p
                  onClick={() => {
                    setShowFilter(false);
                    setFilter("");
                  }}
                  className={
                    mode ? "home_filter_text_light" : "home_filter_text_dark"
                  }
                >
                  Clear
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="home_main_body">
          {data ? (
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    mode ? "home_main_cards_light" : "home_main_cards_dark"
                  }
                  onClick={() => {
                    navigate(`/country/${item.name.common.toLowerCase()}`, {
                      state: item,
                    });
                  }}
                >
                  <div className="home_main_image">
                    <img
                      src={item.flags.png}
                      alt="flags"
                      className="home_flags"
                    />
                  </div>
                  <h2
                    className={
                      mode
                        ? "home_main_country_light"
                        : "home_main_country_dark"
                    }
                  >
                    {item.name.common}
                  </h2>
                  <p
                    className={
                      mode
                        ? "home_main_details_light"
                        : "home_main_details_light"
                    }
                  >
                    Population :
                    <span
                      className={
                        mode
                          ? "home_main_subdetails_light"
                          : "home_main_subdetails_light"
                      }
                    >
                      {item.population}
                    </span>
                  </p>
                  <p
                    className={
                      mode
                        ? "home_main_details_light"
                        : "home_main_details_light"
                    }
                  >
                    Region :
                    <span
                      className={
                        mode
                          ? "home_main_subdetails_light"
                          : "home_main_subdetails_light"
                      }
                    >
                      {item.region}
                    </span>
                  </p>
                  <p
                    className={
                      mode
                        ? "home_main_details_light"
                        : "home_main_details_light"
                    }
                  >
                    Capital :
                    <span
                      className={
                        mode
                          ? "home_main_subdetails_light"
                          : "home_main_subdetails_light"
                      }
                    >
                      {item.capital}
                    </span>
                  </p>
                </div>
              );
            })
          ) : (
            <div style={{ height: "100vh" }}></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
