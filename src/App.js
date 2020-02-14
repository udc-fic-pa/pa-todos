import React, {useState} from 'react';

import AddTodo from './AddTodo';
import Todos from './Todos';

let nextTodoId = 0;

const App = () => {

    const [todos, setTodos] = useState([]);

    const todo = text => {
        return {id: nextTodoId++, text};
    }

    const handleAddTodo = text => setTodos([todo(text), ...todos]);

    return (
        <div>
            <AddTodo onAddTodo={handleAddTodo}/>
            <Todos todos={todos}/>
        </div>
    );

}

export default App;
