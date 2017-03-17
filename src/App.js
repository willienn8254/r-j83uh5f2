import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){

	super();
	this.state={contador: 0}


}
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.actualizar.bind(this)}></textarea>
        <div className="counter">{this.state.contador}</div>
      </div>
    );
  }


  actualizar(event){

  		this.setState({

  			contador: event.target.value.length
  		})

  }
}

export default App;
