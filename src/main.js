import React, { Component } from 'react';
import './App.css';

class main extends Component {
	//_const
  	constructor() {
    	super();
	    this.state = {
	      title: "Reataurant Bill Calculator",
        priceperone: 459,
        subtotal: 0,
        customer: 0,
        discount: 0,
        promotion: '',
	      amount: 0
	    };

	    //Add function
	    this.handleChange = this.handleChange.bind( this )
    	this.handleSubmit = this.handleSubmit.bind( this )
      this.setVal = this.setVal.bind( this )
      this.calculate = this.calculate.bind( this )
      this.usePromo = this.usePromo.bind( this )
      this.getDiscount = this.getDiscount.bind( this )
      this.luckyOne = this.luckyOne.bind( this )
      this.luckyTwo = this.luckyTwo.bind( this )
      this.fourPayThree = this.fourPayThree.bind( this )
      this.setAmount = this.setAmount.bind( this )
      this.setDefaulPrice = this.setDefaulPrice.bind( this )
      this.defaultPro = this.defaultPro.bind( this )
      this.clearVal = this.clearVal.bind( this )
  	}

  	handleChange( event ) {
  		const target = event.target;
	    const name = target.name;
	    this.setState({
	      [name]: target.value
	    });

      // Default price
      if( name === 'customer' ){
        console.log( 'Customer: ' +target.value )
        this.setDefaulPrice( target.value )
      }


  	}

  	handleSubmit( event ) {
    	event.preventDefault();
      this.setVal( event );
      this.setState( { amount: this.state.subtotal } )
      this.clearVal()
      //Calculate
      this.calculate()
  	}

    clearVal(){
      this.setState({
        discount: 0,
	      amount: 0,
        code: undefined
      })
    }

    setDefaulPrice( customer ){
      const _price = this.state.priceperone
      console.log('customer: '+customer + ' price: '+_price)

      if( customer > 0 ){
        this.setState({
          subtotal: customer * _price
        });
      }else {
        this.setState({
          subtotal: 0
        });
      }

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
      const _promotioncode = this.state.promotion
      const _subtotal = this.state.subtotal
      this.defaultPro( 0 )
      // The bill over 6000
      if( _subtotal >= 6000 ){

        //this.setState( { discount: this.getDiscount( _subtotal, 25) } )
        this.defaultPro( 25 )
      }

      if( _subtotal >= 1000 && this.state.promotion === '' ){
        this.defaultPro( 15 )
        //this.luckyOne()
      }

      this.usePromo( _promotioncode.toUpperCase() );
    }

    usePromo( code ){
      console.log('checkPromo' + code)
      // Check empty
      if( code === '')
        return false

      if( code === 'LUCKY ONE' ){
        console.log('LUCKY ONE')
        this.setState({
          code: code,
          code_type: '15%'
        })
        this.luckyOne()
      }else if( code === 'LUCKY TWO' ){
        // Must 2 customer
        if( this.state.customer == 2){
          console.log('LUCKY TWO')
          this.setState({
            code: code,
            code_type: '20%'
          })
          this.luckyTwo()
        }
      }else if( code === '4PAY3' ){
        this.setState({
          code: code
        })
        this.fourPayThree()
      }

    }

    luckyOne(){
      console.log('LUCKY ONE')
      const _subtotal = this.state.subtotal
      this.setState({
        discount: this.getDiscount( _subtotal, 15)
      })
      this.setAmount( _subtotal, this.getDiscount( _subtotal, 15))
    }

    // Use for only 2 customer
    luckyTwo(){
      console.log('LUCKY TWO')
      const _subtotal = this.state.subtotal
      this.setState( { discount: this.getDiscount( _subtotal, 20) } )
      this.setAmount( _subtotal, this.getDiscount( _subtotal, 20))
    }

    fourPayThree(){
      const _subtotal = this.state.subtotal
      const _customer = this.state.customer

      if( _customer >= 4 ){
        const tmp = _customer / 4
        const discount = Math.floor(tmp) * this.state.priceperone
        console.log('4PAY3')
        this.setState( { discount: discount } )
        this.setAmount(_subtotal, discount )
      }

    }

    defaultPro( discount ){
      const _subtotal = this.state.subtotal
      this.setState({
        discount: this.getDiscount( _subtotal, discount)
      })
      this.setAmount( _subtotal, this.getDiscount( _subtotal, discount))
    }

    getDiscount( total, discount){
      return ( total * discount ) / 100
    }

    setAmount( total, discount){
      this.setState({
        amount: total - discount
      })
    }
  	//Render
    // Template
  	render() {
     	return (
        <div className="row app-controll">
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body">
             		<form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Customers</label>
                      <input type="number" name="customer" id="customer" className="form-control" onChange={this.handleChange} value={this.state.customer} placeholder="Customer"/>
                  </div>
             			<div className="form-group">
                    <label>Total price</label>
             				<input type="number" name="subtotal" className="form-control" onChange={this.handleChange} value={this.state.subtotal} placeholder="Total price"/>
             			</div>
             			<div className="form-group">
                    <label>Promotion code</label>
             				<input type="text" name="promotion" className="form-control" onChange={this.handleChange} placeholder="Promotion code"/>
             			</div>
             			<div className="form-group">
             				<input type="submit" value="Calculate" className="btn btn-success" />
             			</div>
             		</form>
              </div>
            </div>
          </div>
          <div  className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body">
                <h2>BILL</h2>
                <h3>Customers: <span className="right">{this.state.customer} ฿</span></h3>
                  <h3>Sub total: <span className="right">{this.state.subtotal} ฿</span></h3>
                  {this.state.code!== undefined ? (<h3>Code: <span className="right">({this.state.code_type}) {this.state.code}</span></h3>) : ('')}
                  {this.state.discount ? (<h3>Discount: <span className="right">{this.state.discount} ฿</span></h3>) : ('')}
                  <h3>Grand total: <span className="right">{this.state.amount} ฿</span></h3>
              </div>
            </div>
          </div>
        </div>
     	);
  	}
}

export default main;
