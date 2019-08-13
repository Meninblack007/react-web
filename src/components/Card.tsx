/**
 * @author Sanyam Jain  <sanyam.53jain@gmail.com>
 */

import * as React from "react";
import "../styles/Card.css";

interface Props {
  title: string;
  colorStyle: string;
}

export default class Card extends React.Component<Props> {
  static defaultProps: Props = {
    title: "Follow Me",
    colorStyle: "card-container-doger-blue"
  };

  render() {
    const { colorStyle, title } = this.props;

    return (
      <div className={`card-container ${colorStyle}`}>
        <div className="title">{title}</div>
      </div>
    );
  }
}
