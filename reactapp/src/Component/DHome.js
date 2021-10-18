import React from 'react';
import {Table} from 'react-bootstrap';
import Header from './Header';
export default class DHome extends React.Component {
   
    render() {
        return (
<div>

{/* //Navbar */}
<Header />



<div class="container" id="updateHomeBody">
<div class="col-sm-8">
<Table className="background-color: $gray-600" >
<thead>
<tr>
<td>Id</td>
<td>Issue</td>
<td>Created On</td>
<td>Developer</td>
<td>Status</td>
</tr>
</thead>
<tr >
<td>#202103114</td>
<td>Damage Product</td>
<td>18-03-2021</td>
<td>Mr. XYZ</td>
<td>Active</td>
<td><a className="text-light" href="/edit">Edit</a></td>

</tr>
</Table>
</div>
<div className="container-fluid">
           <div class="row"><div class="col-sm-2"></div>
           <div class="col-sm-6">
               <div class="card">
                 <div class="card-body">
                   <div class="card-header">

                   <select class="form-control form-select-lg mb-3" id="selectStatus" aria-label=".form-select-lg example">
                     <option selected>Select the Status</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>

                 <textarea class="form-control"
                 id="issueDescription" 
                 placeholder="issue Description"></textarea>
   

                 <br></br>
                     <button className="btn btn-primary" id="updatebutton">Update</button>
                </div>

              </div>
            </div>
          </div>
          <div class="col-sm-4"> 
                <div class="w-100 p-3 card">
                 <div class=" card-body">
                   <div class="card-header">Mr. XYZ</div>
                   <Table className="background-color: $gray-600" >
                    <tr>
                    <td class="text-warning">Total Issue</td>
                    <td class="text-warning">104</td>
                    </tr>
                    <tr >
                    <td class="text-danger">Active Issue</td>
                    <td class="text-danger">1</td>
                    </tr>
                    <tr >
                    <td class="text-success">Solved Issue</td>
                    <td class="text-success">103</td>
                    </tr>
                  </Table>
                 </div>
               </div>
             </div>
             
        </div>
 </div>
</div>


</div>         
        )
    }
}
