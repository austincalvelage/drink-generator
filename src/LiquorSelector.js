import React from "react";

class LiquorSelector extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: undefined};
    this.handleChange  =  this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.callbackFromParent(this.state.value);
    }
  render() {
    return (
    <form className="mb-6 flex justify-center  items-center gap-2" onSubmit={this.handleSubmit}>
      <select className="px-6 py-2 rounded-lg" defaultValue='' value={this.state.value} onChange={this.handleChange}>
        <option disabled value=''>Please choose a liquor</option>
        <option value='whiskey'>Whiskey</option>
        <option value='vodka'>Vodka</option>
        <option value='gin'>Gin</option>
        <option value='scotch'>Scotch</option>
      </select>
      <button type='submit' className="px-2 py-1 rounded-md bg-white">Pour it Up</button>
    </form>
    )
  }
}

export default  LiquorSelector;