import React from 'react';

import Todos from './Todos';

class App extends React.Component {

    render() {

        const todos = [
            {id: 1, text: 'Learn JavaScript'},
            {id: 2, text: 'Learn React'}];

        return (
            <div>
                <Todos todos={todos}/>
            </div>
        );
    }

}

export default App;
