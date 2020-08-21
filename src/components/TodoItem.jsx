import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.content.completed ? 'line-through' : 'none'
        }
    }

    const { id, title } = props.content;
    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    };

    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={props.markComplete(props.content)} /> {' '}
                { title}
                <button style={btnStyle} onClick={props.delTodo(id)}>x</button>
            </p>
        </div>
    )
}

TodoItem.propTypes = {
    content: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem