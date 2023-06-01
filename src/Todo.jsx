import React from 'react';

class Todo extends React.Component {

    render() {

        const todo = this.props.todo;

        return (
            <li>{todo.text}</li>
        );

    }

}

export default Todo;