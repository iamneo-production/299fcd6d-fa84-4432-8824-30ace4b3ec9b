import React from 'react';
 import {Table} from 'react-bootstrap';
export default class Header extends React.Component {
    
    render() {
        return (
<div>

{/* //Navbar */}
<nav class="navbar navbar-light bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand text-light">Grievance Cell</a>
    <form class="d-flex">
        <div class="form-control bg-warning"><a class="text-light" href="/home"> Home</a></div> 
         <div class="form-control bg-warning"><a class="text-light" href="/addIssue"> Add+</a></div> 
         <div class="form-control bg-warning"><a class="text-light" href="#"> Logout</a></div>
    </form>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" id="activeButton" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">|</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="solvedButton">Solved</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>  
        )
    }
}
