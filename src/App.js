import React from 'react';
import './App.css';
import Header from './Header'
import DrinkCard from './DrinkCard'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        liquorType: null,
      };
    }
     render() {
      return (
        <div className="bg-hero bg-cover h-screen flex flex-col items-center">
        <Header callbackFromParent={this.getLiquorType}/>
        <div className="flex justify-center">
          <DrinkCard liquor = {this.state.liquorType}/>
        </div>
        </div>
      )
    }

}

export default App;
