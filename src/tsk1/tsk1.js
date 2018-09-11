import React, { Component } from 'react';
import '../App.css';



class Comptk extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"}
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
    return (
        <div>
          
            <div>

                
               

               <div className="panel panel-primary">

               
                                 <div className="panel-heading">{name}</div>
                        
                            </div>

                <div className="panel panel-primary">

               
                                 <div className="panel-heading">{obj.name}</div>
                        
                            </div>



                <div className="panel panel-info">

                {data.map((value)=>{
                                return  <div className="panel-heading" key={value}>{value}</div>
                            })}
                            </div>

                <div className="panel panel-info">

                {list.map((value)=>{
                                return  <div className="panel-heading" key={value.name}>{value.name}</div>
                            })}
                            </div>


                    {complex.map((data)=>{
                        return(


                                <div className="panel panel-info" key={data.company}>
                              <div className="panel-heading">{data.company}</div>
                              <div className="panel-body">{data.jobs.map((jobs)=>{
                                            return <td key={jobs}>{jobs}</td>
                                        })}</div>
                            </div>
                            
                        ) 
                    })}
                </div>
            </div>
    );
                        }
                    }

export default Comptk;
