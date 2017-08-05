import React, { Component } from 'react';
import './App.css';

class main extends Component {
	//_const
  	constructor() {
    	super();
	    this.state = {
	      title: "Reataurant Bill Calculator",
        subtotal: 0,
        customer: 0,
        promotion: '',
	      amount: 0
	    };

	    //Add function
	    this.handleChange = this.handleChange.bind( this )
    	this.handleSubmit = this.handleSubmit.bind( this )
      this.setVal = this.setVal.bind( this )
      this.calculate = this.calculate.bind( this )
      this.checkPromo = this.checkPromo.bind( this )
      this.getDiscount = this.getDiscount.bind( this )
      this.luckyOne = this.luckyOne.bind( this )
      this.luckyTwo = this.luckyTwo.bind( this )
      this.fourPayThree = this.fourPayThree.bind( this )
  	}

  	handleChange( event ) {
  		const target = event.target;
	    const name = target.name;
	    this.setState({
	      [name]: target.value
	    });
  	}

  	handleSubmit( event ) {
    	event.preventDefault();
      this.setVal( event );
      this.setState( { amount: this.state.totalprice } )

      //Calculate
      this.calculate()
  	}

    setVal( event ){
      const target = event.target;
	    const name = target.name;
      this.setState({
	      [name]: target.value
	    });
      console.log( this.state );
    }

    calculate( ){
      var _promotioncode = this.state.promotion
      if( this.state.subtotal > 1000 ){

      }
      this.checkPromo( _promotioncode.toUpperCase() );
    }

    checkPromo( code ){
      // Check empty
      if( code === '')
        return false

      if( code === 'LUCKY ONE' ){
        this.luckyOne()
      }else if( code === 'LUCKY TWO' ){
        this.luckyTwo()
      }else if( code === '4PAY3' ){
        this.fourPayThree()
      }

    }

    luckyOne(){
      console.log('LUCKY ONE')
    }

    luckyTwo(){
      console.log('LUCKY TWO')
    }

    fourPayThree(){
      console.log('4PAY3')
      if( this.state.customer >= 4 ){

      }else{
        return 0
      }

    }


    getDiscount( total, discount){
      return ( total * discount ) / 100
    }
  	//Render
  	render() {
     	return (
     		<form onSubmit={this.handleSubmit}>
     			<div>
     				<input type="number" name="subtotal" onChange={this.handleChange} placeholder="Total price"/>
     			</div>
     			<div>
     				<input type="number" name="customer" onChange={this.handleChange} placeholder="Customer"/>
     			</div>
     			<div>
     				<input type="text" name="promotion" onChange={this.handleChange} placeholder="Promotion code"/>
     			</div>
     			<div>
     				<input type="submit" value="Calculate" />
     			</div>
     			<div id="display">Sub total: {this.state.subtotal}</div>
          <div id="display">Grand total: {this.state.amount}</div>
     		</form>
     	);
  	}
}

export default main;
