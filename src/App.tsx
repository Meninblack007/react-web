import React from "react";
import "./App.css";
import Card from "./components/Card";

interface CardData {
  title: string;
  color: string;
  shadowColor: string;
}

export default class App extends React.Component {
  data: CardData[] = [
    {
      title: "Follow Me",
      color: "#4DB8FF",
      shadowColor: "#1F90E1"
    },
    {
      title: "Add Image",
      color: "#FE595C",
      shadowColor: "#BA1E1D"
    },
    {
      title: "Location",
      color: "#8E3BFF",
      shadowColor: "#640BDA"
    },
    {
      title: "Add Videos",
      color: "#4DB8FF",
      shadowColor: "#1F90E1"
    }
  ];

  get renderView() {
    return this.data.map((item: CardData) => (
      <Card
        title={item.title}
        color={item.color}
        shadowColor={item.shadowColor}
      />
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="grid">{this.renderView}</div>
      </div>
    );
  }
}
