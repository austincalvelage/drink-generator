import React from 'react';
import './App.css';
import Header from './Header'
import DrinkCard from './DrinkCard'

class App extends React.Component {
    // CallBack Function to grab the Liqour type from the from Header
    // Stores returned value into liqourType State so It can be passed down as a prop to DrinkCard Component
    constructor(props) {
      super(props);
      this.state = {
        liquorType: null,
      };
    }
      getLiquorType = (dataFromChild) => {
        this.setState({ liquorType: dataFromChild }, () => console.log(this.state.liquorType));
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
