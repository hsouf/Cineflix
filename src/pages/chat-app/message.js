import React from 'react';
import './chat.scss';
export class Message extends React.Component {
  render() {
    return (
      <div style={{ padding: '8px' }}>
        <div>
          <b>{this.props.senderName} </b>
        </div>
        <span>{this.props.text}</span>
      </div>
    );
  }
}
