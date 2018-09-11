import React, { Component } from 'react';
import '../App.css';
import swal from 'sweetalert';


class LoginPage extends Component {

 constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      logged: false,
      addForm:false,
      editForm:false,


      name:'',
      lname:'',
      email:'',
      salary:'',
      update:false,
      Emplist:[], 
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    
   //return views
   // this.LoginPage = this.LoginPage.bind(this);
   this.addObject = this.addObject.bind(this);
   this.changeCurrentName = this.changeCurrentName.bind(this);
   this.changeCurrentlName = this.changeCurrentlName.bind(this);
   this.changeCurrentEmail = this.changeCurrentEmail.bind(this);
   this.changeCurrentSalary = this.changeCurrentSalary.bind(this);
   this.changeEditForm = this.changeEditForm.bind(this);
   this.logout = this.logout.bind(this);
  }



    changeCurrentName(e) {
     this.setState({ name : e.target.value })
  }
      changeCurrentlName(e) {
     this.setState({ lname : e.target.value })
  }

    changeCurrentEmail(e) {
     this.setState({ email : e.target.value })
  }

    changeCurrentSalary(e) {
     this.setState({ salary : e.target.value })
  }


changeEditForm() {

    console.log('changeEditForm');
     this.setState({addForm:false});
     this.setState({editForm:true});

     
  }


logout() {

    console.log('Logout');
     this.setState({addForm:false});
     this.setState({editForm:false});
     this.setState({logged:false});

     
  }



remove(index){

const {Emplist} = this.state;

Emplist.splice(index, 1);



  this.setState({ 
    Emplist
    //currentIndex : index 
  })
}

addObject(){

const {Emplist, name , lname , email, salary } =  this.state;
var d = new Date();
const obj = {name,lname,email,salary,update:false,date: d.toString()};
//console.log(Emplist);
Emplist.push(obj);
this.setState({addForm:false});
this.setState({Emplist});

//console.log(obj);


}


LoginPage(){
return(

    <div className="Login">
        <form onSubmit={this.handleSubmit}>

    <div className="form-group">
    <label>User Name:</label>
    <input type="text" onChange={this.handleUserChange} className="form-control"/>
    </div>

    <div className="form-group">
    <label>Password:</label>
    <input type="password" onChange={this.handlePassChange} className="form-control"/>
    </div>
<div className="form-group">
          <input className="form-control" type="submit" value="Log In" data-test="submit" />
          </div>
        </form>
      </div>
      )
}



renderbutton(){

    return (

 
<div className="menu pmd-floating-action"  role="navigation"> 
   
  <a href="javascript:void(0);" onClick={this.logout}  className="pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" 
    data-title="Logout"> 
    <span className="pmd-floating-hidden"></span> 
    <i className="fa fa-sign-out"></i> 
  </a> 
  <a href="javascript:void(0);" onClick={() => this.setState({addForm:false})} 
  className="pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" 
  data-title="Show Employees"> 
    <span className="pmd-floating-hidden"></span> 
    <i className="fa fa-user"></i>
  </a> 
  <a href="javascript:void(0);" onClick={() => this.setState({addForm:true})} 
  className="pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" 
  data-title="Add Employee"> 
    <span className="pmd-floating-hidden"></span> 
    <i className="fa fa-plus"></i> 
  </a> 
  <a className="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-primary" 
    data-title="Menu" href="javascript:void(0);"> 
    <span className="pmd-floating-hidden"></span>
    <i className="fa fa-bars"></i> 
  </a> 
</div>


        )
}
renderTable(){

    const {Emplist} = this.state;
    console.log(Emplist);
  return ( <div> <h1> Show Employees!! </h1>
  
  <br/>
   <table className="table">
    <thead>
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Time</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

    {Emplist.map((item,index) =>{   return <tr> <td>{item.name}</td> <td>{item.lname}</td>
                <td>{item.email}</td> <td>{item.salary}</td> <td>{item.date}</td>
                <td>  <button className="form-control" onClick={this.changeEditForm} >Edit</button> </td>
                 <td>  <button className="form-control" onClick={(this.remove.bind(this,index))}>Delete</button> </td>
      </tr> })}
      
    </tbody>
  </table>
  
    <ul> 



</ul>
  

  {this.renderbutton()}
   </div>
   )
  
}



renderEditEmployee(){




  return  ( <div><h1>Edit Employee!!! </h1>

   


    <div className="form-group">
    <label>First Name:</label>
    <input type="text" value={this.state.name} onChange={this.changeCurrentName} className="form-control"/>
    </div>
  <div className="form-group">
    <label>Last Name:</label>
    <input type="text" value={this.state.lname} onChange={this.changeCurrentlName} className="form-control"/>
  </div>
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" value={this.state.email} onChange={this.changeCurrentEmail} className="form-control"/>
    </div>
  <div className="form-group">
    <label>Salary:</label>
    <input type="number" value={this.state.salary} onChange={this.changeCurrentSalary}  className="form-control"/>
  </div>
  
  <button type="submit" onClick={this.addObject} className="btn btn-default">Update</button>


  {this.renderbutton()}

  </div>
  )
}


renderEmployee(){




  return  ( <div> <h1>Add Employee!!! </h1>

   


    <div className="form-group">
    <label>First Name:</label>
    <input type="text" onChange={this.changeCurrentName} className="form-control"/>
    </div>
  <div className="form-group">
    <label>Last Name:</label>
    <input type="text" onChange={this.changeCurrentlName} className="form-control"/>
  </div>
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" onChange={this.changeCurrentEmail} className="form-control"/>
    </div>
  <div className="form-group">
    <label>Salary:</label>
    <input type="number" onChange={this.changeCurrentSalary}  className="form-control"/>
  </div>
  
  <button type="submit" onClick={this.addObject} className="btn btn-default">Submit</button>


  {this.renderbutton()}

  </div>
  )
}



  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return swal("Bad job!", "Username required!");
    }

    if (!this.state.password) {
      return swal("Bad job!", "Password required!");
    }



if (this.state.username == "admin@domain.com" && this.state.password  == "admin") {

    this.setState({logged: true});


swal("Good job!", "Login Successfully!!!!", "success");


    
    
  

}
else{
    return swal("Bad job!", "Username/Password Mismatch!");
}
    //return 


  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }






render() {

    const {logged , addForm , editForm} = this.state;

    return (

        <div>
           {!logged && this.LoginPage()}
           {logged && !addForm && !editForm && this.renderTable()}
           {logged && addForm && !editForm && this.renderEmployee()}
           {logged && !addForm && editForm && this.renderEditEmployee()}
        </div>
      
    );
  }
}

export default LoginPage;
