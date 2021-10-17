import React, { useEffect, useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Hyderabad");

  useEffect(() => {
    const fetchAPI = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=861e70eb0a9e99bec5006e56a5e5d615`;
      const response = await fetch(URL);

      const resJSON = await response.json();
      console.log(resJSON);
      setCity(resJSON.main);
    };
    fetchAPI();
  }, [search]);
  return (
    <div className="div1">
      <h3>
        JK's Weather App
        <input
          type="text"
          value={search}
          placeholder="Search City.."
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </h3>

      {!city ? (
        <h2>No Data Found !!</h2>
      ) : (
        <div>
          <hr className="hr-line"></hr>
          <card className="city-class">
            <h2 className="city-name">{search}</h2>
          </card>

          <div className="temp-card">
            <h2>
              {city.temp} <sup>o</sup>Cel
            </h2>
            <h4>
              Min : {city.temp_min} <sup>o</sup>Cel || Max : {city.temp_max}{" "}
              <sup>o</sup>
              Cel
            </h4>
            <h4>
              Humidity : {city.humidity} <sup>o</sup>Cel || Pressure :
              {city.pressure} <sup>o</sup>
              Cel
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
