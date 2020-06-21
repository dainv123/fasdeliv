import React, { Component } from "react";

import config from "./../config";
import ItemComponent from './ItemComponent';

class ListComponent extends Component {
  constructor(props) { super(props); }

  render() {
    return (
      <div className="card card-list">
        <h3>{config.listTitle} &rarr;</h3>
        {
          this.props.employeeList.map((item, index) => 
            <ItemComponent 
              key={item.id} 
              value={item.employee_name} 
              onClick={() => this.props.setEmployeeCurrent(item.id)}
            >
            </ItemComponent>
          )
        }
      </div>
    );
  }
}

export default ListComponent;

