import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class Task extends React.Component {
  render() {
    return <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={{
              border: '1px solid lightgrey',
              padding: 8,
              marginBottom: 8,
              borderRadius: 2,
          }}>
            {this.props.task.content}
          </div>
        );
      }}
    </Draggable>
  }
}
