import React from 'react';
import { Message } from './message';
import './chat.scss';
import plane from './paper-plane.png';
export class MessagesPanel extends React.Component {
  state = {
    input_value: '',
    messages: [
      { senderName: 'soufiane', id: 'hj', text: 'helloo' },
      { senderName: 'Ismail', id: 'hj', text: 'Yoo' },
    ],
  };
  send = () => {
    if (this.state.input_value && this.state.input_value != '') {
      //this.props.onSendMessage(this.props.channel.id, this.state.input_value);
      this.setState({ input_value: '' });
    }
    alert('hello');
  };

  handleInput = (e) => {
    this.setState({ input_value: e.target.value });
  };

  render() {
    let list = (
      <div className="no-content-message">There is no messages to show</div>
    );
    if (this.state.messages) {
      list = this.state.messages.map((m) => (
        <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />
      ));
    }
    return (
      <div className="messages-panel" style={{ width: '28%', height: '100vh' }}>
        <div className="meesages-list">{list}</div>

        <div className="messages-input">
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.input_value}
          />{' '}
          <img
            src={plane}
            style={{ padding: '5px', width: '38px', height: '38px' }}
            onClick={this.send}
          />{' '}
        </div>
      </div>
    );
  }
}
