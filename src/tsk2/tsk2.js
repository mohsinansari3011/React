import React, { Component } from 'react';
import '../App.css';


class Comptk2 extends Component {
  render() {
      return (
       <div>
            <div>
              <div>
                  <div>
                    <h3><b>import Something from 'package':</b></h3>
                    <p>
                      if it hasnt curly braces that mean its the default Component, that mean this statement is importing default imports and default imports doesent need curly braces,
                        it has always one default import....
                    </p>
                  </div>
                  <div >
                    <h3><b>import &#123;Something&#125; from 'package:</b></h3>
                    <p>
                      if you want to import selected modules which is not default you have to use curly braces to specify that this is not default modules..
                    </p>
                  </div>
                </div>
              </div>
        </div>
    );
                        }
                    }

export default Comptk2;
