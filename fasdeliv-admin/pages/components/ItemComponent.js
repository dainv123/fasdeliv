import React, { Component } from "react";

class ItemComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card card-item" onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
    );
  }
}

export default ItemComponent;

