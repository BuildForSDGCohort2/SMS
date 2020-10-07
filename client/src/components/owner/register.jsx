import React from 'react'
import {AllClasses,States} from '../../classes'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap'
  export const UpdateBill=({submit,toggle,change,state,remove})=>{
      return(
        <Modal size='lg' isOpen={state.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}/>
        <ModalBody>
        <form onSubmit={submit}>
                                <h4>Update Bill</h4>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="selectSm" class=" form-control-label">Class</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input disabled value={state.clas} type="text" id="text-input" name="clas" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">School Fees</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={change} value={state.fees} type="number" id="text-input" name="fees" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Uniform Fee</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={change} value={state.uniform} type="number" id="text-input" name="uniform" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">No. Of Exercise Books</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={change} value={state.exerciseBooks} type="number" id="text-input" name="exerciseBooks" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Price Per Exercise Book</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={change} value={state.pricePerBook} type="number" id="text-input" name="pricePerBook" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">No. Of Text Books</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={change} value={state.textBooks} type="number" id="text-input" name="textBooks" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Total Text Book Price</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={change} value={state.totalTextBookPrice} type="number" id="text-input" name="totalTextBookPrice" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                    <div className='row'>
                                      <div className='col'>
                                      <input class="btn btn-outline-primary btn-block" type="submit" value='Update'/>
                                      </div>
                                      <div className='col'>
                                      <input onClick={remove} class="btn btn-outline-danger btn-block" type="button" value='Delete'/>
                                      </div>
                                    </div>
                                </form>
        </ModalBody>
          </Modal>
      )
  }
  export const UpdateTeacher=({submit,toggle,change,state,msg,remove,teacher})=>{
      return(
          <Modal size='lg' isOpen={state.up} toggle={toggle}>
              <ModalHeader toggle={toggle}>Update Teacher's Info</ModalHeader>
              <ModalBody>
              {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
                  <form onSubmit={submit} class="form-horizontal">
                                   <div class="card-body card-block">

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} value={state.name} type="text" id="text-input" name="name" placeholder="Enter Child's Name" class="form-control-sm form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} value={state.surname} type="text" id="text-input" name="surname" placeholder="Enter Child's Surname" class="form-control-sm form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="selectSm" class=" form-control-label">Class</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <AllClasses value={state.clas} clas={change}/>
                                               </div>
                                           </div>


                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label class=" form-control-label">Gender</label>
                                               </div>
                                               <div class="col col-md-9">
                                               {
                                                 (teacher.gender==='male')?(
                                                   <div class="form-check">

                                                   <div class="radio">
                                                   <label for="radio1" class="form-check-label ">
                                                   <input onChange={change}  type="radio" id="radio1" name="gender" value="Male" checked class="form-check-input"/> Male
                                                   </label>
                                                   </div>
                                                   <div class="radio">
                                                   <label for="radio2" class="form-check-label ">
                                                   <input onChange={change} type="radio" id="radio2" name="gender" value="Female" class="form-check-input"/> Female
                                                   </label>
                                                   </div>

                                                   </div>
                                                 ):(
                                                   <div class="form-check">

                                                   <div class="radio">
                                                   <label for="radio1" class="form-check-label ">
                                                   <input onChange={change} type="radio" id="radio1" name="gender" value="Male" class="form-check-input"/> Male
                                                   </label>
                                                   </div>
                                                   <div class="radio">
                                                   <label for="radio2" class="form-check-label ">
                                                   <input onChange={change}  type="radio" id="radio2" name="gender" value="Female" checked class="form-check-input"/> Female
                                                   </label>
                                                   </div>

                                                   </div>
                                                 )
                                               }
                                               </div>
                                           </div>

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} value={state.address} placeholder='Enter Home Address' type="text" id="text-input" name="address" class="form-control-sm form-control"/>
                                               </div>
                                           </div>

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Email Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} value={state.email} placeholder="Enter Email" type="text" id="text-input" name="email" class="form-control-sm form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Mobile Number</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} value={state.number} placeholder="Enter Mobile Number" type="number" id="text-input" name="number" class="form-control-sm form-control"/>
                                               </div>
                                           </div>


                                           </div>
                                   <div class="card-footer">
                                   <div className='row'>
                                     <div className='col'>
                                     <button type="submit" class="btn btn-outline-primary btn-sm btn-block">
                                         <i class="fa fa-dot-circle-o"></i> Submit
                                     </button>
                                     </div>
                                     <div className='col'>
                                     <button onClick={remove} type="button" class="btn btn-outline-danger btn-sm btn-block">
                                         <i class="fa fa-times-circle"></i> Delete
                                     </button>
                                     </div>
                                   </div>

                                   </div>
                                   </form>
                  {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
              </ModalBody>
          </Modal>
      )
  }
  export const UpdateStudent=({submit,toggle,clas,change,department,state,msg,remove})=>{
      return(
        <Modal size='lg' isOpen={state.up} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Student's Info</ModalHeader>
        <ModalBody>
                  {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
                  <div class="card">
                                   <div class="card-header">
                                       <strong>Student's</strong> Registeration Form
                                   </div>
                                   <form onSubmit={submit} class="form-horizontal">
                                   <div class="card-body card-block">

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.name} onChange={change} type="text" id="text-input" name="name" placeholder="Enter Child's Name" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.surname} onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Child's Surname" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="selectSm" class=" form-control-label">Class</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <AllClasses value={state.clas} clas={clas}/>
                                               </div>
                                           </div>
                                           {
                                             (state.clas==='Sss1'||state.clas==='Sss2'||state.clas==='Sss3')?(
                                               <div class="row form-group">
                                                   <div class="col col-md-3">
                                                       <label for="selectSm" class=" form-control-label">Department</label>
                                                   </div>
                                                   <div class="col-12 col-md-9">
                                                       <select value={state.department} onChange={department} name="department" id="SelectLm" class=" form-control">
                                                           <option>Please select</option>
                                                           <option>Science</option>
                                                           <option>Commercial</option>
                                                           <option>Art</option>
                                                       </select>
                                                   </div>
                                               </div>
                                             ):(
                                               <div></div>
                                             )
                                           }
                                           {
                                             (state.classChange===false)?(<div></div>):(
                                               <div>
                                               <div className='alert alert-info'>{state.name}'s class has Changed <br/>
                                                Please Input the amount paid before or after resuming into {state.clas}
                                               </div>
                                               <div class="row form-group">
                                                   <div class="col col-md-3">
                                                       <label for="text-input" class=" form-control-label">School Fee Paid (#)</label>
                                                   </div>
                                                   <div class="col-12 col-md-9">
                                                       <input onChange={change} placeholder='Amount Paid During Registration' type="number" id="text-input" name="amountPaid" class="form-control"/>
                                                   </div>
                                               </div>
                                               </div>
                                             )
                                           }
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">State Of Origin</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <select value={state.sog} onChange={change} name='sog' className='form-control'>
                                                       {
                                                           States.map(state=>{
                                                               return(
                                                                   <option>{state.name}</option>
                                                               )
                                                           })
                                                       }
                                                   </select>
                                                   {/* <input value={state.sog} onChange={change} placeholder='Enter State Of Origin' type="text" id="text-input" name="sog" class=" form-control"/> */}
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Local Government Area</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.lga} onChange={change} placeholder='Enter Local Government Area' type="text" id="text-input" name="lga" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.address} onChange={change} placeholder='Enter Home Address' type="text" id="text-input" name="address" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.pname} onChange={change} placeholder="Enter Guardian's Name" type="text" id="text-input" name="pname" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.psurname} onChange={change} placeholder="Enter Guardian's Surname" type="text" id="text-input" name="psurname" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Email Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.email} onChange={change} placeholder="Enter Guardian's Email" type="text" id="text-input" name="email" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Mobile Number</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.number} onChange={change} placeholder="Enter Mobile Number" type="number" id="text-input" name="number" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input value={state.paddress} onChange={change} placeholder="Enter Guardian's Address" type="text" id="text-input" name="paddress" class=" form-control"/>
                                               </div>
                                           </div>

                                           </div>
                                   <div class="card-footer">
                                   <div className='row'>
                                     <div className='col'>
                                     <button type="submit" class="btn btn-outline-primary btn-sm btn-block">
                                         <i class="fa fa-dot-circle-o"></i> Submit
                                     </button>
                                     </div>
                                     <div className='col'>
                                     <button onClick={remove} type="button" class="btn btn-outline-danger btn-sm btn-block">
                                         <i class="fa fa-times-circle"></i> Delete
                                     </button>
                                     </div>
                                   </div>

                                       {
                                         (msg)?(
                                           <div class='alert alert-success'>{msg}</div>
                                         ):(
                                           <div></div>
                                         )

                                       }
                                   </div>
                                   </form>
                               </div>
                                </ModalBody>
      </Modal>
      )
  }
export const RegisterStudent=({submit,toggle,clas,change,department,state,msg})=> {
  
    return(
            
      <div class="row">
                  <div class="col-lg-9 mx-auto">
                  <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={toggle}
          block
        >
          Add Student
        </Button>
        
        <Modal size='lg' isOpen={state.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register a new student</ModalHeader>
        <ModalBody>
                  {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
                  <div class="card">
                                   <div class="card-header">
                                       <strong>Student's</strong> Registeration Form
                                   </div>
                                   <form onSubmit={submit} class="form-horizontal">
                                   <div class="card-body card-block">

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} type="text" id="text-input" name="name" placeholder="Enter Child's Name" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Child's Surname" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Date Of Birth</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} type="date" id="text-input" name="date" class=" form-control"/>
                                               </div>
                                           </div>


                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="selectSm" class=" form-control-label">Class</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                               <AllClasses clas={clas}/>
                                               </div>
                                           </div>
                                           {
                                             (state.clas==='Sss1'||state.clas==='Sss2'||state.clas==='Sss3')?(
                                               <div class="row form-group">
                                                   <div class="col col-md-3">
                                                       <label for="selectSm" class=" form-control-label">Department</label>
                                                   </div>
                                                   <div class="col-12 col-md-9">
                                                       <select onChange={department} name="department" id="SelectLm" class=" form-control">
                                                           <option>Please select</option>
                                                           <option>Science</option>
                                                           <option>Commercial</option>
                                                           <option>Art</option>
                                                       </select>
                                                   </div>
                                               </div>
                                             ):(
                                               <div></div>
                                             )
                                           }

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label class=" form-control-label">Gender</label>
                                               </div>
                                               <div class="col col-md-9">
                                                   <div class="form-check">
                                                       <div class="radio">
                                                           <label for="radio1" class="form-check-label ">
                                                               <input onChange={change} type="radio" id="radio1" name="gender" value="Male" class="form-check-input"/> Male
                                                           </label>
                                                       </div>
                                                       <div class="radio">
                                                           <label for="radio2" class="form-check-label ">
                                                               <input onChange={change} type="radio" id="radio2" name="gender" value="Female" class="form-check-input"/> Female
                                                           </label>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label class=" form-control-label">Religion</label>
                                               </div>
                                               <div class="col col-md-9">
                                                   <div class="form-check">
                                                       <div class="radio">
                                                           <label for="radio1" class="form-check-label ">
                                                               <input onChange={change} type="radio" id="radio1" name="religion" value="Islam" class="form-check-input"/> Islam
                                                           </label>
                                                       </div>
                                                       <div class="radio">
                                                           <label for="radio2" class="form-check-label ">
                                                               <input onChange={change} type="radio" id="radio2" name="religion" value="Christianity" class="form-check-input"/> Christianity
                                                           </label>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">State Of Origin</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                               <select onChange={change} name='sog' className='form-control'>
                                                                   <option>Select State</option>
                                                       {
                                                           States.map(state=>{
                                                               return(
                                                                   <>
                                                                   <option>{state.name}</option>
                                                                   </>
                                                               )
                                                           })
                                                       }
                                                   </select>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Local Government Area</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder='Enter Local Government Area' type="text" id="text-input" name="lga" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder='Enter Home Address' type="text" id="text-input" name="address" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">School Fee Paid (#)</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder='Amount Paid During Registration' type="number" id="text-input" name="amountPaid" class="form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder="Enter Guardian's Name" type="text" id="text-input" name="pname" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder="Enter Guardian's Surname" type="text" id="text-input" name="psurname" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Email Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder="Enter Guardian's Email" type="text" id="text-input" name="email" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Mobile Number</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder="Enter Mobile Number" type="number" id="text-input" name="number" class=" form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Guardian's Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder="Enter Guardian's Address" type="text" id="text-input" name="paddress" class=" form-control"/>
                                               </div>
                                           </div>

                                           </div>
                                   <div class="card-footer">
                                       <button type="submit" class="btn btn-primary btn-sm btn-block">
                                           <i class="fa fa-dot-circle-o"></i> Submit
                                       </button>
                                       {
                                         (msg)?(
                                           <div class='alert alert-success'>{msg}</div>
                                         ):(
                                           <div></div>
                                         )

                                       }
                                   </div>
                                   </form>
                               </div>
                                </ModalBody>
      </Modal>
                               </div>
                               </div>
    )
  }
  export const UploadNotice=({submit,toggle,change,state})=>{
      return(
    <div class="row">
    <div class="col-lg-9 mx-auto">
    <Button
color="dark"
style={{ marginBottom: '2rem' }}
onClick={toggle}
block
>
Add News/Notice
</Button>

<Modal size='lg' isOpen={state.modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Add a new Notice</ModalHeader>
<ModalBody>
{
                              (state.msg)?(
                                <div className='alert alert-success'>{state.msg}</div>
                              ):(
                                <div></div>
                              )
                          }
<form onSubmit={submit}>
                                <div class="form-group">
                                    <div class="input-group mb-3">
                                        <input onChange={change} type="text" id="text-input" name="title" placeholder="Enter News Title" class="form-control-sm form-control"/>
                                    </div>
                                    <textarea onChange={change} name="content" id="textarea-input" rows="9" placeholder="Content..." class="form-control-sm form-control"></textarea>
                                </div>
                                <input class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" value='Upload'/>
                            </form>
                            {
                              (state.msg)?(
                                <div className='alert alert-success'>{state.msg}</div>
                              ):(
                                <div></div>
                              )
                          }
</ModalBody>
  </Modal>
                           </div>
  </div>
      )
  }
  export const RegisterTeacher=({submit,toggle,change,state,msg,error})=>{
    return(
        <div class="row">
        <div class="col-lg-9 mx-auto">
        <Button
color="dark"
style={{ marginBottom: '2rem' }}
onClick={toggle}
block
>
Add Teacher
</Button>

<Modal size='lg' isOpen={state.modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Register a new student</ModalHeader>
<ModalBody>
                  {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
                  {
                    (error)?(
                      <div class='alert alert-danger'>{error}</div>
                    ):(
                      <div></div>
                    )

                  }
                                   <div class="card-header">
                                       <strong>Teacher's</strong> Registeration Form
                                   </div>
                                   <form onSubmit={submit} class="form-horizontal">
                                   <div class="card-body card-block">

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Name</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} type="text" id="text-input" name="name" placeholder="Enter Teacher's Name" class="form-control-sm form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Surname</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} type="text" id="text-input" name="surname" placeholder="Enter Teacher's Surname" class="form-control-sm form-control"/>
                                               </div>
                                           </div>


                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="selectSm" class=" form-control-label">Class</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                               <AllClasses clas={change}/>
                                               </div>
                                           </div>

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label class=" form-control-label">Gender</label>
                                               </div>
                                               <div class="col col-md-9">
                                                   <div class="form-check">
                                                       <div class="radio">
                                                           <label for="radio1" class="form-check-label ">
                                                               <input onChange={change} type="radio" id="radio1" name="gender" value="Male" class="form-check-input"/> Male
                                                           </label>
                                                       </div>
                                                       <div class="radio">
                                                           <label for="radio2" class="form-check-label ">
                                                               <input onChange={change} type="radio" id="radio2" name="gender" value="Female" class="form-check-input"/> Female
                                                           </label>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>


                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder='Enter Address' type="text" id="text-input" name="address" class="form-control-sm form-control"/>
                                               </div>
                                           </div>

                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Email Address</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder='Enter Email' type="text" id="text-input" name="email" class="form-control-sm form-control"/>
                                               </div>
                                           </div>
                                           <div class="row form-group">
                                               <div class="col col-md-3">
                                                   <label for="text-input" class=" form-control-label">Mobile Number</label>
                                               </div>
                                               <div class="col-12 col-md-9">
                                                   <input onChange={change} placeholder='Enter Mobile Number' type="number" id="text-input" name="number" class="form-control-sm form-control"/>
                                               </div>
                                           </div>
                                           </div>
                                   <div class="card-footer">
                                       <button type="submit" class="btn btn-primary btn-sm btn-block">
                                           <i class="fa fa-dot-circle-o"></i> Submit
                                       </button>
                                   </div>
                                   </form>
                                   {
                    (msg)?(
                      <div class='alert alert-success'>{msg}</div>
                    ):(
                      <div></div>
                    )

                  }
                  {
                    (error)?(
                      <div class='alert alert-danger'>{error}</div>
                    ):(
                      <div></div>
                    )

                  }
                               </ModalBody>
      </Modal>
                               </div>
      </div>
    )
  }
