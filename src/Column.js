import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

export default class Column extends React.Component {
  render() {
    return <div style={{
      margin: 0,
      border: '1px solid lightgrey',
      borderRadius: 2,
    }}>
      <h3 style={{
        padding: 8,
      }}>{this.props.column.title}</h3>
      <Droppable droppableId={this.props.column.id} >
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              style={{
              padding: 8,
            }}>
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  }
}

