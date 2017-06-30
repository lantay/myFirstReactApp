import React from 'react'
import ReactDOM from 'react-dom'

var dummyData=["todo1", "todo2", "todo3"];

class InputLine extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){

  }
}
class Todo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    return(<li><button>x</button>{this.props.task}</li>)
  }
}

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
    return(

      <ul>
        {dummyData.map((todo)=>
          <Todo task={todo}/>)
        }


      </ul>

    )
  }
}
ReactDOM.render(<TodoList />,
   document.getElementById('root'));
