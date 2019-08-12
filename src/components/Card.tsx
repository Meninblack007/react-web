/**
 * @author Sanyam Jain  <sanyam.53jain@gmail.com>
 */

import * as React from "react";
import '../styles/Card.css'

interface Props {
  title: string;
  color: string;
}

export default class Card extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  static defaultProps: Props = {
    title: 'Follow Me',
    color: '#000000'
  }

  render() {
    return (
      <div className='card-container' style={{backgroundColor: this.props.color}}>
        <div className="title">
        {this.props.title}
        </div>
      </div>
    )
  }
}
