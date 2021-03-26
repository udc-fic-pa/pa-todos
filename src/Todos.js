import Todo from './Todo';

const Todos = ({todos, onToggleCompleted}) => (
    <ul>
        {todos.map(todo => 
            <Todo key={todo.id} todo={todo}
                onToggleCompleted={onToggleCompleted}/>)
        }
    </ul>
);

export default Todos;
