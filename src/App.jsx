import React from 'react';

import Todo from './Todo';

class App extends React.Component {

    render() {

        const todos = [
            {text: 'Learn JavaScript'},
            {text: 'Learn React'}
        ];

        return (
            <div>
                <ul>
                    <Todo todo={todos[0]}/>
                    <Todo todo={todos[1]}/>
                </ul>
            </div>
        );
    }

}

export default App;
