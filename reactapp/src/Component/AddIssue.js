import React from 'react';
export default class AddIssue extends React.Component {
   
    render() {
        return (
<div>

{/* //Navbar */}
<nav class="navbar navbar-light bg-warning">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Grievance Cell</span>
  </div>
</nav> 
<br></br><br></br><center><h2>Add Issue</h2></center><br></br><br></br>

<div class="container" id="addHomeBody">
<form>
  <div class="row mb-3">
    <label class="col-sm-2 col-form-label">Name of Issue</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="name"></input>
    </div>
  </div>

  <div class="row mb-3">
    <label class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <input type="description" class="form-control" id="description"></input>
    </div>
  </div>

  <div class="row mb-3">
    <label class="col-sm-2 col-form-label">Image Url</label>
    <div class="col-sm-10">
      <input type="name" class="form-control" id="imageUrl"></input>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col-sm-10">
    <img src="..." 
    class="img-fluid" 
    alt="image Preview"
    id="imagePreview"></img>
    </div>
  </div>


  <center><button type="submit" 
  class="btn btn-primary"
  id="submitButton">Submit
  </button></center>
</form>
</div>

</div>         
        )
    }
}
