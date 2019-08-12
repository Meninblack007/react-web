import React from "react";
import "./App.css";
import Card from "./components/Card";

interface CardData {
  title: string;
  color: string;
}

export default class App extends React.Component {

  data: CardData[] = [{
    title: 'Follow Me',
    color: '#4DB8FF'
  },{
    title: 'Add Image',
    color: '#FE595C'
  },{
    title: 'Location',
    color: '#8E3BFF'
  },{
    title: 'Add Videos',
    color: '#4DB8FF'
  }]

  get renderView() {
    return this.data.map((item: CardData) => {
      return <Card title={item.title} color={item.color} />
    })
  }

  render() {
    return (
      <div className="container">
        <div className='grid'>
        {this.renderView}
        </div>
      </div>
    );
  }
}
