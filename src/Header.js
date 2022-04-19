import React from "react";
import LiquorSelector from "./LiquorSelector"

class Header extends React.Component {
  render() {
      return (
        <header className="bg-black/75 w-full mb-10">
          <h1 className="text-white text-3xl my-6 text-center">Find your new Drink!</h1>
          <LiquorSelector/>  
        </header>
      );
    }

}

export default Header