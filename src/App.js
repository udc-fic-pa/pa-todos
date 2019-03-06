import React from 'react';

import AddTodo from './AddTodo';
import Todos from './Todos';

let nextTodoId = 0;

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {todos: []};

    }

    todo(text) {
        return {id: nextTodoId++, text};
    }

    handleAddTodo(text) {
        this.setState({todos: [this.todo(text), ...this.state.todos]});
    }

    handleToggleCompleted(id) {

        const todos = this.state.todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} :
                todo;
        });

        this.setState({todos});

    }

    render() {

        return (
            <div>
                <AddTodo onAddTodo={text => this.handleAddTodo(text)}/>
                <Todos todos={this.state.todos} 
                    onToggleCompleted={id => this.handleToggleCompleted(id)}/>
            </div>
        );

    }

}

export default App;
