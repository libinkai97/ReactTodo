import React from 'react';
import PropTypes from "prop-types";
import Todo from '../Todo/Todo';

export default class TodoList extends React.Component {
    static propTypes = {
        todos:PropTypes.array.isRequired,
        deleteTodo:PropTypes.func.isRequired,
        toggleTodo:PropTypes.func.isRequired,
        toggleAll:PropTypes.func.isRequired,
        allChecked:PropTypes.func.isRequired,
    }
    render(){
        let { todos,deleteTodo,toggleTodo,toggleAll,allChecked } = this.props
        return(
            <section className="main">
                <input type="checkbox" className="toggle-all"
                       checked={allChecked}
                       readOnly
                       onClick={ e=>toggleAll(e.target.checked)} />
                <ul className="todo-list">
                    {todos.map((todo,index)=>(
                        <Todo todo={todo} key={index} 
                              deleteTodo={deleteTodo}
                              toggleTodo={toggleTodo} ></Todo>
                    ))}
                </ul>
            </section>
        )
    }
}