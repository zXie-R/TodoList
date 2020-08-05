import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function AddTodo(props) {
    const [title, setTitle] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={onSubmit} style={{ display: 'flex'}}>
            <input 
                type="text" 
                name="title" 
                placeholder="Add Todo ..." 
                style={{ flex: '10', padding: "5px" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex: 1}}
            />
        </form>
    )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}
