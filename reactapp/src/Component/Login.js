import React from 'react';
export default class Login extends React.Component {
   
    render() {
        return (
<div>

{/* //Navbar */}
<nav class="navbar navbar-light bg-warning">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Grievance Cell</span>
  </div>
</nav> 
<br></br><br></br><center><h2>Login</h2></center><br></br><br></br>

{/* form */}
<div className="container">      
 <form>

  <div class="row mb-2">
    <label for="inputEmail3" 
    class="col-sm-2 col-form-label"></label>

    <div class="col-sm-10">
      <input type="email" 
      class="form-control" 
      id="email"
      placeholder="Enter Email"
      bg-white></input>
    </div>
 </div>

  <div class="row mb-2">
    <label for="inputPassword3" 
    class="col-sm-2 col-form-label"></label>

    <div class="col-sm-10">
      <input type="password"
       class="form-control" 
       id="password"
       placeholder="Enter Password"></input>
    </div>
  
  </div>
  <center>
 New user?<a href="/"> SignUp</a>
 <br></br>
<button type="submit" 
class="btn btn-primary"><a className="text-light" href="/dhome"> Login in</a></button>
</center>
</form>

  </div>

</div>         
        )
    }
}
