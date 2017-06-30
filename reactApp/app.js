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
    return(
      <div>
        <form>
            <input
              type="text"
              placeholder="Message Here"
              // onChange={(e) => this.handleMessageChange(e)}
              // value={this.state.message}
            />
            <input
              type="submit"
              value="Send"
            />
        </form>
      </div>
    )
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
class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
      return(
        <div>
          <InputLine />
          <TodoList />
        </div>
      )
  }
}
ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
