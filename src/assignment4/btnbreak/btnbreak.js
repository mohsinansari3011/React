import React, { Component } from 'react';
import imgbtnbreak from './break.jpg';




class btnbreak extends Component {

constructor(props) {
    super();

    this.onBlub_break = this.onBlub_break.bind(this);
  }

onBlub_break() {
      this.props.blubbreakkare({bulbbreak: false})
  }


render() {
	

    return (
    	<div><img src={imgbtnbreak} onClick={this.onBlub_break} alt="Light OFF" height="200" width="100"/>
		</div>
      
    );
  }


}

export default btnbreak;