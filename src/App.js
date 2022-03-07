import './App.css';
import { Component } from 'react';
import MainComponents from './component/MainComponents';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
        <Router>
          <div>
            <MainComponents />
          </div>
        </Router>
    );
  }


}


export default App;
