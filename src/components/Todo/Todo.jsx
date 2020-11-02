import React from 'react';
import PropTypes from "prop-types";

export default class Todo extends React.Component {
    static propTypes = {
        todo:PropTypes.object.isRequired,
        deleteTodo:PropTypes.func.isRequired,
        toggleTodo:PropTypes.func.isRequired,
    }
    render(){
        let { todo,deleteTodo,toggleTodo } = this.props
        return(
            <li className={todo.complete ? "todo completed":"todo"}>
                <div className="view">
                    <input type="checkbox" className="toggle" 
                           checked={todo.complete}
                           readOnly
                           onClick={()=>toggleTodo(todo)} />
                    <label>{todo.content}</label>
                    <button className="destroy" onClick={ e=>deleteTodo(todo) } ></button>
                </div>
                <input type="text" className="edit" style={{display:"none"}} />
            </li>
        )
    }
}