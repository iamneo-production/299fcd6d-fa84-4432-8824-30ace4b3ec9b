import React from 'react';
export default class Signup extends React.Component {
   
    render() {
        return (
<div>

{/* //Navbar */}
<nav class="navbar navbar-light bg-warning">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Grievance Cell</span>
  </div>
</nav> 
<br></br><br></br><center><h2>Sign Up</h2></center><br></br><br></br>

{/* form */}
<div className="container">      
 <form>

  <div class="row mb-2">
    <label class="col-sm-2 col-form-label"></label>

    <div class="col-sm-10">
      <input type="email" 
      class="form-control" 
      id="email"
      placeholder="Enter Email"></input>
    </div>
 </div>

  <div class="row mb-2">
    <label  
    class="col-sm-2 col-form-label"></label>

    <div class="col-sm-10">
      <input type="username"
       class="form-control" 
       id="username"
       placeholder="Enter username"></input>
    </div>
  </div>

  <div class="row mb-2">
    <label  
    class="col-sm-2 col-form-label"></label>

    <div class="col-sm-10">
      <input type="number" 
      class="form-control" 
      id="mobileNumber"
      placeholder="Enter Mobile Number"
      bg-white></input>
    </div>
 </div>

 <div class="row mb-2">
    <label  
    class="col-sm-2 col-form-label"></label>

    <div class="col-sm-10">
      <input type="passsword" 
      class="form-control" 
      id="passsword"
      placeholder="Enter Passsword"
      bg-white></input>
    </div>
 </div>

 <div class="row mb-2">
    <label  
    class="col-sm-2 col-form-label"></label>

    <div class="col-sm-10">
      <input type="password" 
      class="form-control" 
      id="password"
      placeholder="Confirm password"
      bg-white></input>
    </div>
 </div>
 <center>
 Already a user?<a href="/login"> Login</a>

  <br></br><br></br>

<button type="submit" 
class="btn btn-primary"
id="submitbutton"><a className="text-light" href="/dhome">Submit</a></button>
</center>
</form>

  </div>

</div>         


        )
    }
}
