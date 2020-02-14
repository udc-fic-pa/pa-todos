import React, {useState} from 'react';

import AddTodo from './AddTodo';
import Todos from './Todos';
import Filter from './Filter';
import * as filterTypes from './filterTypes';

let nextTodoId = 0;

const App = () => {

    const [todos, setTodos] = useState([]);
    const [filterType, setFilterType] = useState(filterTypes.ALL);

    const todo = text => {
        return {id: nextTodoId++, text, completed: false}
    }

    const visibleTodos = () => {
        
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

    const handleAddTodo = text  => setTodos([todo(text), ...todos]);

    const handleToggleCompleted = id => {

        const newTodos = todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} :
                todo;
        });

        setTodos(newTodos);

    }

    const handleFilterClick = filterType => setFilterType(filterType);

    return (
        <div>
            <AddTodo onAddTodo={handleAddTodo}/>
            <Todos todos={visibleTodos()} 
                onToggleCompleted={handleToggleCompleted}/>
            <Filter filterType={filterType} onFilterClick={handleFilterClick}/>
        </div>
    );

}

export default App;
