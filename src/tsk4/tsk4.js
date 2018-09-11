import React, { Component } from 'react';
import '../App.css';



class Comptk extends Component {

constructor() {
    super();
    let myReact = this.state = {
      name: "Hello World"
    }
  }

    changeCurrentState() {
     if (this.state.name == "Hello World") {
        this.setState({name: "Hello Pakistan"});
     }
     if (this.state.name == "Hello Pakistan") {
        this.setState({name: "Hello World"});
     }
  }


  render() {

    return (
    

          <div className="panel panel-primary">

               
             <div className="panel-heading">This is Assignment no 2---- React </div>
             <p> {this.state.name}</p>
         <button class="btn btn2" onClick={() => this.changeCurrentState()}>Action!!</button>

         <br/>
         1 `in` on click handler has another 'function' it will pass the `function` only and the varible `in` it!! 
         <br/>
         2 by using this function execute immediatelty when you open the application in your browser and the return value of this is not a function!!
         <br/>

         3 this is the bound function to the class and it becomes the class method that why you access with this, you have to bind with the customer!!


        </div>

       
        
            

       


    );
                        }
                    }

export default Comptk;
