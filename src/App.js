import React, {Component} from 'react';
import './App.css';
import Home from './home.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component{
  render(){
    return (
      <div>
        <Home  />
      </div>
    )
  }
}

export class home extends Component  {
  //initialize state
  constructor(props){
    super(props);
    this.state = { response: [] }
    this.onSort = this.onSort.bind(this)
    this.currentSort = "desc"
  }

onSort(event, sortKey){
    const response = this.state.response;
    const currentSort = this.state.currentSort
    if (currentSort === "asc"){
      response.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      this.setState({response, currentSort : "desc"})
    } else {
      response.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      this.setState({response, currentSort : "asc"})
    }
    
  }


  render(){  
    return (
    <BrowserRouter>
      <Switch>
         <Route path = '/' component={Home} />
      </Switch>
    </BrowserRouter>
        
    )
  }
}

export default App;
