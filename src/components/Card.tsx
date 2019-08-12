/**
 * @author Sanyam Jain  <sanyam.53jain@gmail.com>
 */

import * as React from "react";
import "../styles/Card.css";

interface Props {
  title: string;
  color: string;
  shadowColor: string;
}

export default class Card extends React.Component<Props> {
  static defaultProps: Props = {
    title: "Follow Me",
    color: "#000000",
    shadowColor: "#BA1E1D"
  };

  render() {
    return (
      <div
        className="card-container"
        style={{
          backgroundColor: this.props.color,
          boxShadow: `0px 2px ${this.props.shadowColor}`
        }}
      >
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}
