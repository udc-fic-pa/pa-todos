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

    render() {

        return (
            <div>
                <AddTodo onAddTodo={(text) => this.handleAddTodo(text)}/>
                <Todos todos={this.state.todos}/>
            </div>
        );

    }

}

export default App;
