import React, { Component } from 'react';
import './App.css';

class main extends Component {
	//_const
  	constructor() {
    	super();
	    this.state = {
	      title: "Reataurant Bill Calculator",
	      
	      amount: 0
	    };

	    //Add function
	    this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
  		const target = event.target;
	    const name = target.name;
	    this.setState({
	      [name]: target.value
	    });
  	}

  	handleSubmit(event) {
    	event.preventDefault();

    	
  	}

  	//Render
  	render() {
     	return (
     		<form onSubmit={this.handleSubmit}>
     			<div>
     				<input type="text" name="totalprice" onChange={this.handleChange} placeholder="Total price"/>
     			</div>
     			<div>
     				<input type="text" name="customer" onChange={this.handleChange} placeholder="Customer"/>
     			</div>
     			<div>
     				<input type="text" name="promotion" onChange={this.handleChange} placeholder="Promotion code"/>
     			</div>
     			<div>
     				<input type="submit" value="Submit" />
     			</div>
     			<div id="display">{this.state.amount}</div>
     		</form>
     	);
  	}
}

export default main;