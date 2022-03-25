import './App.css';
import { Component } from 'react';
import MainComponents from './component/MainComponents';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'


const store = ConfigureStore()
class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <MainComponents />
          </div>
        </Router>
      </Provider>
    );
  }


}


export default App;
