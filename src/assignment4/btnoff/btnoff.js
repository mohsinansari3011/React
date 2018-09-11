import React, { Component } from 'react';
import imgbtnoff from './btoff.png';




class btnoff extends Component {


 constructor(props) {
    super();

    this.onBlub_off = this.onBlub_off.bind(this);
  }

onBlub_off() {
      this.props.bluboffkare({bulbOn: true, bulboff: false})

  }

render() {
	

    return (
    	<div><img src={imgbtnoff}  onClick={this.onBlub_off} alt="Light OFF" height="200" width="100"/>
		</div>
      
    );
  }


}

export default btnoff;