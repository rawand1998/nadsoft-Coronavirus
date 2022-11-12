import React, { useEffect, useState } from "react";
import axios from "axios";
import StatisticsCard from "./Common/StatisticsCard";
import user from "../images/user.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Error from "./Common/Error";
import Header from "./Header";
function Main() {
  const [data, setData] = useState("");
  const [countries, setCountries] = useState();
  const [search, setSearch] = useState();
  const [error, setError] = useState("");
  const getData = async () => {
    try {
      await axios.get("https://api.covid19api.com/summary").then((res) => {
        setData(res.data);
      });
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onSearch = () => {
    const filter = data?.Countries?.filter(({ Country }) =>
      Country.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filter);
    setCountries(filter);
  };
  let items = countries || data?.Countries;
  console.log(countries);
  return (
    <div className="main">
      {error ? (
        <Error errorMsg={error} />
      ) : (
        <div className="main_contents">
          <Header/>
       
          <div className="stats">
            <div className="images_block"></div>
            <div className="statistics">
              <div className="global_total_status">
                <h2>Global Statistic</h2>
                <div className="total_statistic">
                  <StatisticsCard
                    TotalConfirmed={data?.Global?.TotalConfirmed}
                    TotalDeaths={data?.Global?.TotalDeaths}
                    TotalRecovered={data?.Global?.TotalRecovered}
                  />
                </div>
              </div>
              <div className="country_status">
                <h2>Global Country Statistics</h2>
                <input
                  placeholder="Search Country"
                  type="text"
                  value={search || ""}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyUp={onSearch}
                />

                {items ? (
                  items.map(
                    ({
                      ID,
                      Country,
                      TotalConfirmed,
                      TotalDeaths,
                      TotalRecovered,
                    }) => (
                      <div className="country_cards">
                        <StatisticsCard
                          key={ID}
                          Country={Country}
                          TotalConfirmed={TotalConfirmed}
                          TotalDeaths={TotalDeaths}
                          TotalRecovered={TotalRecovered}
                        />
                      </div>
                    )
                  )
                ) : (
                  <p className="error">countries not found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
