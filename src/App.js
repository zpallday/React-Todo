import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  class App extends React.Component {




constructor(){
  super();
  this.state = {
    todoData: []
  }
}

addItem = item => {
  const newItem = {
    task: item,
    id: Date.now(),
    completed: false,
  }
  this.setState({todoData: [...this.state.todoData, newItem ]})
}



clearCompleted = () => {
  this.setState({
 item: this.state.item.filter(item => !item.completed)
  })
}



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
        <TodoList todoData={this.state.todoData} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
