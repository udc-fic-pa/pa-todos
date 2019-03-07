import React from 'react';

class Todo extends React.PureComponent {

    render() {

        const todo = this.props.todo;
    
        return (
            <li className={todo.completed ? 'completed' : ''} 
                onClick={() => this.props.onToggleCompleted(todo.id)}>{todo.text}</li>
        );

    }

}

export default Todo;