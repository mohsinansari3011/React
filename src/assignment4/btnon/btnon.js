import React, { Component } from 'react';
import imgbtnon from './bton.jpg';




class btnon extends Component {
 constructor(props) {
    super();

    this.onBlub_on = this.onBlub_on.bind(this);
  }

onBlub_on() {
      this.props.blubonkare({bulbOn: false, bulboff: true})

  }

  onBlub_on1() {
      this.props.blubonkare({bulbOn: false, bulboff: true})

  }

render() {
    return (
    	<div><img src={imgbtnon} onClick={this.onBlub_on} alt="Light OFF" height="200" width="100"/>
		</div>
      
    );
  }


}

export default btnon;