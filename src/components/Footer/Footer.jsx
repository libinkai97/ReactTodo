import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
    static propTypes = {
        leftTodo:PropTypes.number.isRequired,
        setVisibility:PropTypes.func.isRequired,
        visibility:PropTypes.string.isRequired,
        finishedTodos:PropTypes.number.isRequired,
        clearCompleted:PropTypes.func.isRequired,
    }
    render(){
        let { leftTodo,setVisibility,visibility,finishedTodos,clearCompleted } = this.props;
        return(
            <footer className="footer">
                <span className="todo-count"><strong>{leftTodo}</strong> items left</span>
                <ul className="filters">
                    <li><a href="javascript:;" onClick={ e=>setVisibility("all") } className={visibility == "all"? "selected": ""}>all</a></li>
                    <li><a href="javascript:;" onClick={ e=>setVisibility("active")} className={visibility == "active"? "selected": ""}>active</a></li>
                    <li><a href="javascript:;" onClick={ e=>setVisibility("completed")} className={visibility == "completed"? "selected": ""}>completed</a></li>
                </ul>
                {finishedTodos >0? 
                    <button className="clear-completed" onClick={e=>clearCompleted(e)}>clear completed</button> 
                    :null}
            </footer>
        )
    }
}