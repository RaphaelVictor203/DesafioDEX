import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Parse from 'parse';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

class App extends Component {

  componentWillMount(){
    Parse.serverURL = 'http://localhost:1337/parse';
    Parse.initialize('OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga', 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga')  
  }

  render() {
    return (
      //
      <PerfectScrollbar style={{height: '1000vmin'}}>
        <div className="App">
          <Form teste={this.teste}/> 
        </div>
      </PerfectScrollbar>
    );
  }
}

export default App;
