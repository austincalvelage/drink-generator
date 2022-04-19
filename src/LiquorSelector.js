import React from "react";

class LiquorSelector extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      drinks: undefined,
    };
  }

  handleChange = (event)  => {
    this.setState({value: event.target.value});
  }

  componentDidUpdate(prevState) { 
    if (prevState.value !== this.state.value) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.value}`)
        .then(response => response.json())
        .then(data => this.setState({drinks: data.drinks}))
        .catch(error => console.log(error))
      }
    }

  render() {
    return (
    <form className="mb-6 flex justify-center  items-center gap-2" onChange={this.handleChange}>
      <select className="px-6 py-2 rounded-lg" defaultValue='' value={this.state.value} onChange={this.handleChange}>
        <option disabled value=''>Please choose a liquor</option>
        <option value='whiskey'>Whiskey</option>
        <option value='vodka'>Vodka</option>
        <option value='gin'>Gin</option>
        <option value='scotch'>Scotch</option>
        <option value='bourbon'>Bourbon</option>
        <option value='rum'>Rum</option>
      </select>
    </form>
    )
  }
}

export default  LiquorSelector;