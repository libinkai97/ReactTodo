import React from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends React.Component {
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    _delKeyup(e){
        let { addTodo } =this.props;
        let content =e.target.value.trim();

        if(!content) return;
        if(e.keyCode == 13){
            console.log(content)
            addTodo({content,complete:false});
            e.target.value = "";
        }
    }
    render(){
        return(
            <header className="className">
                <h1>todos</h1>
                <input type="text" placeholder="套你猴子" className="new-todo" 
                        onKeyUp={ e=>this._delKeyup(e)} />
            </header>
        )
    }
}