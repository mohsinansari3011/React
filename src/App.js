import React, { Component } from 'react';
import './App.css';
// import Comptk from './tsk1/tsk1';
// import Comptk2 from './tsk2/tsk2';
// import Comptk3 from './tsk3/tsk3';
// import Comptk4 from './tsk4/tsk4';
//import Comptk5 from './tsk5/tsk5';
import Compdbulb from './assignment4/dbulb/dbulb';
import Compbton from './assignment4/btnon/btnon';
import Compbtoff from './assignment4/btnoff/btnoff';
import Compbtbreak from './assignment4/btnbreak/btnbreak';

class App extends Component {


constructor(prop){

	super(prop)


	this.state = {

		bulbOn : true,
		bulboff : false,
		bulbbreak : true,
	};

	this.onBlub = this.onBlub.bind(this);
	this.onBlubbreak = this.onBlubbreak.bind(this);
}




onBlub(value) {
    console.log('onBlubButton Click ==>?', value.bulbOn);
    this.setState({bulbOn: value.bulbOn,bulboff: value.bulboff});
  }
onBlubbreak(value) {
    console.log('onBlubbreak ==>?', value.bulbbreak);
    this.setState({bulbbreak: value.bulbbreak});
  }



  render() {

  	const {bulbOn , bulboff , bulbbreak} = this.state;
// console.log('state == >', this.state);
// console.log('bulbOn == >', this.state.bulbOn);


    return (

    	<div>
    	 <h2>Image Gallery</h2>
		<div className="row">
		<div className="col-md-4">
		  <div className="thumbnail">

		  		{<Compdbulb txtbulbOn={this.state.bulbOn} txtbulboff={this.state.bulboff} txtbulbbreak={this.state.bulbbreak} />}
		    	
		  </div>
		</div>


		<div className="col-md-2">
		  <div className="thumbnail">
		     {bulbOn && <Compbton    blubonkare={this.onBlub} />}
		     {bulboff && <Compbtoff  bluboffkare={this.onBlub} />}	 	  
		     	  
		  </div>
		</div>




<div className="col-md-2">
		  <div className="thumbnail">
		  {bulbbreak && <Compbtbreak blubbreakkare={this.onBlubbreak} />}	 
		     	 
		  </div>
		</div>


		</div>

		</div>

     
     
     

   
    

    );
  }

}


export default App;
