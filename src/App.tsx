import React from "react";
import "./App.css";
import Card from "./components/Card";

interface CardData {
  title: string;
  colorStyle: string;
}

export default class App extends React.Component {
  data: CardData[] = [
    {
      title: "Follow Me",
      colorStyle: "card-container-doger-blue"
    },
    {
      title: "Add Image",
      colorStyle: "card-container-carnation"
    },
    {
      title: "Location",
      colorStyle: "card-container-electric-violet"
    },
    {
      title: "Add Videos",
      colorStyle: "card-container-doger-blue"
    }
  ];

  get renderView() {
    return this.data.map((item: CardData) => (
      <Card title={item.title} colorStyle={item.colorStyle} />
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
