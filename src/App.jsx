import Todos from './Todos';

const App = () => {

    const todos = [
        {id: 1, text: 'Learn React'},
        {id: 2, text: 'Learn JavaScript'}];

    return (
        <div>
            <Todos todos={todos}/>
        </div>
    );    

}

export default App;
