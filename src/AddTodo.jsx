import React from 'react';

const AddTodo = ({onAddTodo}) => {

    let input;

    console.log("*** AddTodo");

    return (

        <form onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                onAddTodo(input.value.trim());
                input.value = '';
            }}>

            <input type="text" ref={node => input = node}/>
            <button type="submit">Add</button>

        </form>

    );

}

export default React.memo(AddTodo);