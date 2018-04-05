import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'node-fetch';
import './style/style.css';

import CamperList from './components/tableHolder';
import Header from './components/header';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      campers: [],
      sortByTitle: 'Past 30 days',
      sortBy: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    }
    this.camperGrab(this.state.sortBy);
  }
  //method for grabbing api data from free code camp
  camperGrab(url){
    Fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
        campers: data
      }));
  }
  render(){
    const urlUpdate = (url, title) => {
      this.camperGrab(url)
      this.setState({sortByTitle: title})
    }
    return (
      <div>
        <div className="container">
          <div className="header">
            <Header
              updateDisplay=
              {
                (sortByTitle, selectedDisplay) => this.setState({
                  sortByTitle: sortByTitle})
              }
              displayChanger={urlUpdate}
              url={this.state.sortBy}
            />
          </div>
          <div>
          <CamperList
            camperlist={this.state.campers}
            sortByTitle={this.state.sortByTitle}
          />
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
