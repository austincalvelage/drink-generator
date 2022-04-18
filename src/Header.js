import React from "react";
import LiquorSelector from "./LiquorSelector"

class Header extends React.Component {
  // CallBack Function to grab the Liqour type from the LiquiorSelector
  getLiquorType = (dataFromChild) => {
   const liquor  = dataFromChild;
   this.props.callbackFromParent(liquor);
  }
    render() {
      return (
        <header className="bg-black/75 w-full mb-10">
          <h1 className="text-white text-3xl my-6 text-center">Find your new Drink!</h1>
          <LiquorSelector callbackFromParent={this.getLiquorType}/>  
        </header>
      );
    }

}

export default Header