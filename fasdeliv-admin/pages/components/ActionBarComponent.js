import config from "./../config";
import React, { Component } from "react";

class ActionBarComponent extends Component {
  constructor(props) { 
    super(props); 

    this.state = { 
      showInput: false 
    }
  }

  toggleFileInput() {
    this.setState({ 
      showInput: !this.state.showInput 
    });
  }

  render() {
    return (
      <div className="card-action-bar">
        <input 
          type="file" 
          className={ this.state.showInput ? "show" : "" } 
          onChange={(e) => this.props.importEmployeeData(e)} 
        />
        <button type="button" className="btn btn-primary" onClick={() => this.toggleFileInput()}>
        { this.state.showInput ? config.hideImportButton : config.importButton }
        </button>
        <button type="button" className="btn btn-primary" onClick={() => this.props.exportEmployeeData()}>
          {config.exportButton}
        </button>
      </div>
    );
  }
}

export default ActionBarComponent;

