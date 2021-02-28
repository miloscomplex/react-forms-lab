import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charactersLeft: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      charactersLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong><span> Characters Remaining {this.state.charactersLeft}</span>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
