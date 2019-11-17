import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Modal from 'react-modal';
import './App.css';
import AreaList from "./components/AreaList";
import Map from './components/Map';

Modal.setAppElement('#root');

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="search-bar">
            {/*Search Bar*/}
          </div>

          <div className="main">
            <Map/>
            <AreaList/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
