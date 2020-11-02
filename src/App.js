import React from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

import "./css/todo-mvc.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { content: "全国超过3亿人存在睡眠障碍沸485万", complete: false },
        { content: "韩国前总统李明博终审获刑17年468万", complete: false },
        { content: "克龙宣布法国将再次封国436万", complete: true },
        { content: "抚顺6岁被虐女童父亲望严惩前妻新420万", complete: false },
        { content: "甘肃载30人大巴坠入农家院406万", complete: true },
        { content: "新疆新增确诊病例23例391万", complete: false }
      ],
      visibility:"all"
    }
  }
  //添加todo
  _addTodo(todo){
    let { todos } = this.state;
    todos.push(todo)
    this.setState({
      todos
    })
  }
  //删除todo
  _deleteTodo(todo){
    let { todos } = this.state;
    let index = todos.findIndex(t=>t==todo)
    todos.splice(index,1);
    this.setState({
      todos
    })
  }
  //切换单个todo状态
  _toggleTodo(todo){
    let { todos } = this.state;
    let index = todos.findIndex(t=>t==todo)
    todos[index].complete = !todos[index].complete;
    this.setState({
      todos
    })
  }
  //批量单个todo状态
  _toggleAll(done){
    let { todos } = this.state;
    todos.forEach(todo=>todo.complete = done)
    this.setState({
      todos
    })
  }
  //判断全选是否被选中
  _allChecked(){
    let { todos } = this.state;
    return todos.every(todo=>todo.complete)
  }
  //统计没有完成的todo
  _leftTodo(){
    let { todos } = this.state;
    return todos.filter(todo=> !todo.complete).length;
  }
  //根据todos 和 visibility过滤出要显示的todos
  _filterTodos(){
    let { todos,visibility } = this.state;
    switch (visibility) {
      case "all":
        return todos;
      case "active":
        return todos.filter(todo => !todo.complete);
      case "completed":
        return todos.filter(todo => todo.complete);
    }
  }
  //修改visibility状态
  _setVisibility(filter){
    this.setState({ visibility:filter })
  }
  //
  _finishedTodos(){
    let { todos } = this.state;
    return todos.filter(todo=>todo.complete).length;
  }
  //
  _clearCompleted(){
    let { todos } = this.state;
    let newTodos = todos.filter(todo=>!todo.complete)
    this.setState({ todos:newTodos })
  }
  render() {
    let { todos,visibility } = this.state;
    return (
      <section className="todoapp">
        <AddTodo addTodo={ (e)=>this._addTodo(e) }/>
        <TodoList todos={ this._filterTodos() } 
                  deleteTodo={ e=>this._deleteTodo(e) } 
                  toggleTodo={ e=>this._toggleTodo(e) }
                  toggleAll={ e=>this._toggleAll(e) } 
                  allChecked={ this._allChecked() } />
        <Footer leftTodo={this._leftTodo()}
                visibility={ visibility } 
                setVisibility={ e=> this._setVisibility(e) }
                finishedTodos={ this._finishedTodos() }
                clearCompleted={ e=>this._clearCompleted(e)} />
      </section>
    )
  }
}

export default App;
