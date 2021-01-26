import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

import Card from "./Card";

var url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=miami&appid=85f48bfed6f16f0b4ac5840f56199b17`;

var url1 = `https://swapi.dev/api/`;

const App = () => {
  const [weather, setWeather] = useState({
    temp1: "", //We will use 6,12,18,24,32
    temp2: "",
    temp3: "",
    temp4: "",
    temp5: "",
    date1: "",
    date2: "",
    date3: "",
    date4: "",
    date5: "",
    day1: "",
    day2: "",
    day3: "",
    day4: "",
    day5: ""
  });

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("Response: ", res.data);
        setWeather({
          temp1: res.data.list[6].main.temp,
          date1: res.data.list[6].dt_txt,
          day1: "Monday"
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="App">
      <p>{weather.temp1}</p>
      <p>{weather.date1.slice(0, 10)}</p>
      <p>{weather.day1}</p>
    </div>
  );
};

export default App;
