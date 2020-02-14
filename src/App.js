import React, {useState} from 'react';

import AddTodo from './AddTodo';
import Todos from './Todos';

let nextTodoId = 0;

const App = () => {

    const [todos, setTodos] = useState([]);

    const todo = text => {
        return {id: nextTodoId++, text, completed: false};
    }

    const handleAddTodo = text => setTodos([todo(text), ...todos]);

    const handleToggleCompleted = id => {

        const newTodos = todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} :
                todo;
        });

        setTodos(newTodos);

    }

    return (
        <div>
            <AddTodo onAddTodo={handleAddTodo}/>
            <Todos todos={todos} onToggleCompleted={handleToggleCompleted}/>
        </div>
    );

}

export default App;
