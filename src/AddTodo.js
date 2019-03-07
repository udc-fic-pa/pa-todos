import React from 'react';

class AddTodo extends React.PureComponent {

    render() {

        let input;

        return (

            <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    this.props.onAddTodo(input.value.trim());
                    input.value = '';
                }}>

                <input type="text" ref={node => input = node}/>
                <button type="submit">Add</button>

            </form>

        );

    }

}

export default AddTodo;