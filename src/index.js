import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Var from "./components/Var";
import Footer from "./components/Footer";
import "./css/styles.css";
import Weather_app_img from "./img/weather-pic.png";

import audio_app_img from "./img/audio_pic.png";

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <Info />
    <Var
      title="Weather App"
      link="https://samikshyakc1996.github.io/weather-app-project/"
      Imgsrc={Weather_app_img}
      alt="weather-app pic"
      description="This app gives the temperature and weather conditions of any given location."
    />
    <Var
      title="Audio Player App"
      link="https://samikshyakc1996.github.io/audio-player-project/"
      Imgsrc={audio_app_img}
      alt="audio player app pic"
      description="This app displays a playlist of a few songs. You can stream any song from the list."
    />

    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
