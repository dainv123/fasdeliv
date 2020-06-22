import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable, resetServerContext  } from "react-beautiful-dnd";
import { convertKeyToLabel, reorder, getItemStyle, getListStyle } from "./../utility";
import config from "./../config";
import { NEW_ACTION, REDO, UNDO } from "./../constants"

class DetailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: props.employee.orders || Object.keys(props.employee),
      employee: props.employee,
      history: {
        data: [
          {
            orders: props.employee.orders || Object.keys(props.employee),
            employee: props.employee,
          }
        ],
        current: 0
      }
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  UNSAFE_componentWillMount () {
    resetServerContext();
  }

  undoAction() {
    this.setActionHistory(UNDO);
  }

  redoAction() {
    this.setActionHistory(REDO);
  }

  setActionHistory(actionType, actionData) {
    let history = this.state.history;
    const { current, data } = { ...history };

    switch (actionType) {
      case REDO:
        this.setState({ 
          orders: data[current + 1].orders,
          employee: data[current + 1].employee,
          history: { 
            data, current: current + 1 
          }
        });

        break;
      
      case UNDO:
        this.setState({ 
          orders: data[current - 1].orders,
          employee: data[current - 1].employee,
          history: { 
            data, current: current - 1 
          }
        });

        break;

      case NEW_ACTION:
        const dataModified = [...data].filter((item, index) => index <= current);
        
        dataModified.push(actionData);

        this.setState({
          orders: actionData.orders,
          employee: actionData.employee,
          history: { 
            data: dataModified, current: current + 1 
          }
        });
        break;
    }
  }

  setEmployeeInfo(event, key) {
    const value = event.target.value;
    const employeeCache = {};

    employeeCache[key] = value;

    this.setActionHistory(NEW_ACTION, {
      orders: this.state.orders,
      employee: {
        ...this.state.employee,
        ...employeeCache
      }
    });
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const orders = reorder(
      this.state.orders,
      result.source.index,
      result.destination.index
    );

    const employee = { 
      ...this.state.employee, 
      orders 
    };

    this.setActionHistory(NEW_ACTION, {
      orders,
      employee
    });
  }

  render() {
    return (
      <div className="card card-detail">
        <h3>{config.detailTitle} &rarr;</h3>

        {
          this.state.employee.id
            ? <p>{config.detailDescriptionSelected}: <b>{this.state.employee.id}</b></p>
            : <p>{config.detailDescription}</p>
        }
        
        {
          !!this.state.orders.length &&
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle()}
                  >
                    {
                      this.state.orders.map((itemKey, index) => (
                        <Draggable key={itemKey} draggableId={itemKey} index={index}>
                          {(provided, snapshot) => (
                            <div
                              className="dragdrop-item"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <span>{ convertKeyToLabel(itemKey) }: </span>
                              <input 
                                disabled={itemKey === "id"}
                                type="text" 
                                className="form-control"
                                value={this.state.employee[itemKey]} 
                                onChange={(e) => this.setEmployeeInfo(e, itemKey)}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))
                    }
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <div className="text-right">
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => this.undoAction()}
                  disabled={!this.state.history.current}
                >
                  {config.undoButton}
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => this.redoAction()}
                  disabled={this.state.history.current + 1 >= this.state.history.data.length}
                >
                  {config.redoButton}
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => this.props.onSaveEmployee(this.state.employee)}
                >
                  {config.saveButton}
                </button>
              </div>
            </DragDropContext>
        }
      </div>
    );
  }
}

export default DetailComponent;

