import React from 'react';

import AddTodo from './AddTodo';
import Todos from './Todos';
import Filter from './Filter';
import * as filterTypes from './filterTypes';

let nextTodoId = 0;

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {todos: [], filterType: filterTypes.ALL};

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);

    }

    todo(text) {
        return {id: nextTodoId++, text};
    }

    visibleTodos(todos, filterType) {
        
        switch(filterType) {
            case filterTypes.ALL:
                return todos;
            case filterTypes.ACTIVE:
                return todos.filter(todo => !todo.completed);
            case filterTypes.COMPLETED:
                return todos.filter(todo => todo.completed);
            default:
                throw new Error(`Unknown filter type ${filterType}`);
        }

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

    handleFilterClick(filterType) {
        this.setState({filterType});
    }

    render() {

        return (
            <div>
                <AddTodo onAddTodo={this.handleAddTodo}/>
                <Todos todos={this.visibleTodos(this.state.todos, this.state.filterType)} 
                    onToggleCompleted={this.handleToggleCompleted}/>
                <Filter filterType={this.state.filterType} 
                    onFilterClick={this.handleFilterClick}/>
            </div>
        );

    }

}

export default App;
