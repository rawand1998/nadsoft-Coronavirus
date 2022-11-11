import React, { useEffect, useState } from "react";
import axios from "axios";
import StatisticsCard from "./Common/StatisticsCard";
import img from '../images/amico.svg'
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
    <div>
        <Header/>
        <div className="global_state">
        <h2>Global Statistic</h2>
     
        <StatisticsCard
          TotalConfirmed={data?.Global?.TotalConfirmed}
          TotalDeaths={data?.Global?.TotalDeaths}
          TotalRecovered={data?.Global?.TotalRecovered}
        />
     
    
      </div>
      <div className="countries">
        <div className="countries_state">
          <h2>Gobal country statics</h2>
          <input
            placeholder="Search Country"
            type="text"
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={onSearch}
          />

          {items
            ? items.map(
                ({
                  ID,
                  Country,
                  TotalConfirmed,
                  TotalDeaths,
                  TotalRecovered,
                }) => (
                  <div className="country_card">
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
            : "countries not found"}
        </div>

        <div className="covImg">
          <img
            src={img}
            alt=""
          />
        </div>
      </div>

    </div>
  )
}

export default Main