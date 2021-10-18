import React from 'react';
import {Table} from 'react-bootstrap';
import Header from './Header';

   
export default class Home extends React.Component {
    render() {
        return ( 
            <div>
             {/* //Navbar */}
             <Header />
             <br></br>
             <div class ="container" id="userHome">
                 <div class="row">
                 <div class="col-sm-8">

                 <div className="bg-info">
                     <Table className ="text-light">
                         <thead>
                             <tr>
                          <td>Id</td>
                          <td>Issue</td>
                          <td>Created On</td>
                          <td>Developer</td>
                          <td>Status</td>

                             </tr>
                         </thead>

                         <tr>
                         <td>#202103114</td>
                         <td>Damage Product</td>
                         <td>18-03-2021</td>
                         <td>Mr. Sid</td>
                         <td>Active</td> 

                         </tr>

                     </Table>
                 </div>
                 <br></br>
                 <div className = "bg-info">
                     <Table className ="text-light">
                         <thead>
                             <tr>
                                 <td> Id</td>
                                 <td>Issue</td>
                                 <td>Created On</td>
                                 <td>Developer</td>
                                 <td>Status</td>

                             </tr>
                         </thead>

                        <tr>
                            <td> #202103115</td>
                        <td>Damage Product</td>
                        <td>11-03-2021</td>
                        <td>Mr.Tom</td>
                        <td>Active</td>

                        </tr>
                        


                     </Table>
                 </div>
                 </div>   

                 <div class="col-sm-4">
                     <div class="w-100 p-3 card">
                   <div class= "card-body">
                       <div class="card-header">USER 1 
                       </div>
                       <Table id="userDetails">
                           <tr>
                               <td class="text-warning">Total Issues</td>
                               <td class="text-warning">5</td>

                           </tr>

                           <tr>
                               <td class="text-danger">Active Issue</td>
                               <td class= "text-danger">3</td>
                           </tr>
                           <tr>
                               <td class="text-success">Solved Issue</td>
                               <td class="text-success">2</td>

                           </tr>

                       </Table>
                   </div>
                     </div>

                 </div>
            </div>
            </div>
            </div>

            
        )
    }
}