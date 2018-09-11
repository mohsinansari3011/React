import React, { Component } from 'react';
import imgoff from './off.jpg';
import imgon from './on.jpg';
import imgbreak from './break.jpg';




class dbulb extends Component {

constructor(prop){

	super(prop)

	this.state = {

		bulbOn : prop.txtbulbOn,
		bulboff : prop.txtbulboff,
		bulbbreak : prop.txtbulbbreak,
	};

	console.log("constructor");

	this.bulb_off = this.bulb_off.bind(this);
    this.bulb_on = this.bulb_on.bind(this);
    this.bulb_break = this.bulb_break.bind(this);
  
}




bulb_off(){
	return (<div><img src={imgoff} alt="Light OFF" height="400" width="200"/>
		<div className="caption">
		        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
		      </div> </div>
	);
}

bulb_on(){
	return (<div><img src={imgon} alt="Light ON" height="400" width="200"/>;
		<div className="caption">
		        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
		      </div></div>
	);
}

bulb_break(){

	return (<div><img src={imgbreak} alt="Its break" height="400" width="200"/>;
		<div className="caption">
		        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
		      </div></div>
	);
}




render() {
	 
	 const {bulbOn , bulboff , bulbbreak} = this.state;

	 console.log('props', this.props);
	 console.log('state', this.state);
	
	
	
	

	

    return (
    	<div>
		 {bulboff && !bulbOn && bulbbreak && this.bulb_off()}
		 {!bulboff && bulbOn && bulbbreak && this.bulb_off()}
		 
		 {bulboff && !bulbOn && !bulbbreak && this.bulb_off()}
		 {!bulboff && bulbOn && !bulbbreak && this.bulb_on()}
		 {!bulboff && !bulbOn && bulbbreak && this.bulb_break()}
	
		</div>
      
    );
  }


}

export default dbulb;