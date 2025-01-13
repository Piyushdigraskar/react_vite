import { Component } from 'react'
//import MyComponent from './components/myComponent'
//import MyPureComponent from './components/myPureComponent';
import './App.css'
import { connect } from 'react-redux';


class App extends Component{
  render(){
    return(
      <div className='App'>
        <div>age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>age up</button>
        <button onClick={this.props.onAgeDown}>age Down</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    age:state.age
  }
}

const dispatchToProps = (dispatch)=>{
  return {
    onAgeUp: (()=> dispatch({type:"AGE_UP"})),
    onAgeDown: (()=> dispatch({type:"AGE_DOWN"}))
  }
}

export default connect(mapStateToProps, dispatchToProps)(App);
