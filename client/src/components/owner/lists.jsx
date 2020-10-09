import React from "react";
import {Link} from 'react-router-dom'
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap'
import kR from '../../unnamed.jpg'
export const TeachersList=({teachers,loading,search,update,info})=> {
    return(
    <div class="card-body">
      <div class="table-responsive">
        <div class="row">
        <div class="col-sm-12">
            <input class="form-control" onChange={search} id="myInput" type="text" placeholder="Search.."/>
  <br/>
      <table class="table table-bordered" id='myTable2'>
      <thead>
        <tr>
          <th onclick='sortTable(0)'>Name<i onclick='sortTable()' className='fa text-dark fa-fw fa-angle-down'/></th>
          <th onclick='sortTable(1)'>Surname</th>
          <th onclick='sortTable(2)'>Class</th>
          <th onclick='sortTable(3)'>Gender</th>
        </tr>
      </thead>
      <tbody id='myTable'>
        {(loading===false)?((teachers.length) ? (
            teachers.map(teacher => {
                return (
                  <tr className='odd' key={teacher.id}>
                  <td>
                  <div className='dropdown'>
                      <Link className='text-secondary nav-link dropdown-toggle' id='navbardrop' to='#' data-toggle='dropdown'>  {teacher.name}</Link>
                      <div className='dropdown-menu'>
                      <Link className='text-secondary dropdown-item' onClick={()=>info(teacher.teacher_id)}> view Teacher's Info</Link>
                      <Link onClick={()=>update(teacher.teacher_id)} className='text-secondary dropdown-item'>Edit Teacher's Info</Link>
                      </div>
                  </div>
                  </td>
                  <td>{teacher.surname}</td>
                  <td>{teacher.clas}</td>
                  <td>{teacher.gender}</td>

                  </tr>
                )
            })
        ) : (
                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>
            )):(<div className="spinner-border spinner-border-lg"></div>)}
      </tbody>
    </table>
            </div>
        </div>
        </div>
    </div>
    )
  }
  export const teacherStudentsList=({students,loading,search,info})=>{
    return (
          <div class="card-body">
            <div class="table-responsive">
              <div class="row">
              <div class="col-sm-12">
            <input class="form-control" onChange={search} id="myInput" type="text" placeholder="Search.."/>
  <br/>
      <table class="table table-bordered" id='myTable2'>
      <thead>
        <tr>
          <th onclick='sortTable(0)'>Name<i onclick='sortTable()' className='fa text-dark fa-fw fa-angle-down'/></th>
          <th onclick='sortTable(1)'>Surname</th>
          <th onclick='sortTable(2)'>Class</th>
          <th onclick='sortTable(3)'>Gender</th>
          <th onclick='sortTable(4)'>Age</th>
          <th onclick='sortTable(5)'>Religion</th>
        </tr>
      </thead>
      <tbody id='myTable'>
        {
        students.length ? (
          students.map((student) => {
            return (
              <tr className="odd" key={student._id}>
                <td>
                  <div className="dropdown">
                    <Link
                      className="text-secondary nav-link dropdown-toggle"
                      id="navbardrop"
                      to="#"
                      data-toggle="dropdown"
                    >
                      {" "}
                      {student.name}
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="text-secondary dropdown-item"
                        onClick={()=>info(student.student_id)}
                      >
                        {" "}
                        view Child's Info
                      </Link>
                      <Link to={'/1stterm/'+student.student_id} className='text-secondary dropdown-item'>1st Term Result</Link>
                      <Link to={'/2ndterm/'+student.student_id} className='text-secondary dropdown-item'>2nd Term Result</Link>
                      <Link to={'/3rdterm/'+student.student_id} className='text-secondary dropdown-item'>3rd Term Result</Link>
                    </div>
                  </div>
                </td>
                <td>{student.surname}</td>
                  <td>{student.clas}</td>
                  <td>{student.gender}</td>
                  <td className='sorting_1'>{student.age}</td>
                  <td>{student.religion}</td>
              </tr>
            );
          })
        ) : (
          <tr class="odd">
            <td valign="top" colspan="6" class="dataTables_empty">
              No data available in table
            </td>
          </tr>
    )}
      </tbody>
    </table>
                </div>
              </div>
            </div>
          </div>
    );
  }  
export const StudentsList=({students,loading,search,update,info})=>{
    return (
        <>

          <div class="card-body">
            <div class="table-responsive">
              <div class="row">
              <div class="col-sm-12">
            <input class="form-control" onChange={search} id="myInput" type="text" placeholder="Search.."/>
  <br/>
      <table class="table table-bordered" id='myTable2'>
      <thead>
        <tr>
          <th onclick='sortTable(0)'>Name<i onclick='sortTable()' className='fa text-dark fa-fw fa-angle-down'/></th>
          <th onclick='sortTable(1)'>Surname</th>
          <th onclick='sortTable(2)'>Class</th>
          <th onclick='sortTable(3)'>Gender</th>
          <th onclick='sortTable(4)'>Age</th>
          <th onclick='sortTable(5)'>Religion</th>
        </tr>
      </thead>
      <tbody id='myTable'>
        {loading === false ? (
        students.length ? (
          students.map((student) => {
            return (
              <tr className="odd" key={student._id}>
                <td>
                  <div className="dropdown">
                    <Link
                      className="text-secondary nav-link dropdown-toggle"
                      id="navbardrop"
                      to="#"
                      data-toggle="dropdown"
                    >
                      {" "}
                      {student.name}
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        className="text-secondary dropdown-item"
                        onClick={()=>info(student.student_id)}
                      >
                        {" "}
                        view Child's Info
                      </Link>
                      <Link
                        onClick={()=>update(student.student_id)}
                        className="text-secondary dropdown-item"
                      >
                        Edit Student's Info
                      </Link>
                      <Link
                        to={"/1stterm/" + student.student_id}
                        className="text-secondary dropdown-item"
                      >
                        1st Term Result
                      </Link>
                      <Link
                        to={"/2ndterm/" + student.student_id}
                        className="text-secondary dropdown-item"
                      >
                        2nd Term Result
                      </Link>
                      <Link
                        to={"/3rdterm/" + student.student_id}
                        className="text-secondary dropdown-item"
                      >
                        3rd Term Result
                      </Link>
                      <Link
                        to={"/receipt/" + student.student_id}
                        className="text-secondary dropdown-item"
                      >
                        Receipts
                      </Link>
                    </div>
                  </div>
                </td>
                <td>{student.surname}</td>
                <td>{student.clas}</td>
                <td>{student.gender}</td>
                <td className="sorting_1">{student.age}</td>
                <td>{student.religion}</td>
              </tr>
            );
          })
        ) : (
          <tr class="odd">
            <td valign="top" colspan="6" class="dataTables_empty">
              No data available in table
            </td>
          </tr>
        )
      ) : (
        <div className="spinner-border spinner-border-lg"></div>
      )}
      </tbody>
    </table>
                </div>
              </div>
            </div>
          </div>
        </>
    );
  }
export const StudentInformation=({student,toggle,state})=>{
  return(
    <Modal animation={true} size='lg' isOpen={state.info} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register a new student</ModalHeader>
        <ModalBody>
    <div class='container-fluid'>
      <div class="col">
                              <aside class="profile-nav alt">
                                  <section class="card">
                                      <div class="card-header user-header alt bg-dark">
                                          <div class="media">
                                                  <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={state.image}/>
                                              <div class="media-body">
                                                  <h2 class="text-light display-6">{student.surname+' '+student.name}</h2>
                                                  <p class="text-light">{student.clas}</p>
                                              </div>
                                          </div>
                                      </div>


                                      <ul class="list-group list-group-flush">
                                        {
                                          (student.department)?(
                                            <li class="list-group-item">
                                            <div className='row'>
                                            <div className='col'>Department:</div>
                                            <div className='col'>{student.department}</div>
                                            </div>
                                            </li>
                                          ):(
                                            <React.Fragment></React.Fragment>
                                          )
                                        }
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Student's Identification Number:</div>
                                            <div className='col'>{student.student_id}</div>
                                          </div>
                                        </li>
                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{student.gender}</div>
                                            </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Religion:</div>
                                            <div className='col'>{student.religion}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Date Of Birth:</div>
                                            <div className='col'>{student.date}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>State Of Origin:</div>
                                            <div className='col'>{student.sog}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Local Government Area:</div>
                                            <div className='col'>{student.lga}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{student.address}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Name:</div>
                                            <div className='col'>{student.pname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Surname:</div>
                                            <div className='col'>{student.psurname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{student.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{student.number}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Address:</div>
                                            <div className='col'>{student.paddress}</div>
                                          </div>
                                          </li>
                                      </ul>
                                      
                                  </section>
                              </aside>
                          </div>
      </div>
      </ModalBody>
      </Modal>
  )
}
export const TeacherInformation=({teacher,toggle,state})=>{
  return(
    <Modal animation={true} size='lg' isOpen={state.info} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register a new student</ModalHeader>
        <ModalBody>
    <div class='container-fluid'>
      <div class="col">
                              <aside class="profile-nav alt">
                              <section class="card">
                                      <div class="card-header user-header alt bg-dark">
                                          <div class="media">
                                                  <img class="align-self-center rounded-circle mr-3" style={{width:'85px', height:'85px'}} alt="" src={teacher.image}/>
                                              <div class="media-body">
                                                  <h2 class="text-light display-6">{teacher.surname+' '+teacher.name}</h2>
                                                  <p class="text-light">{teacher.clas}</p>
                                              </div>
                                          </div>
                                      </div>


                                      <ul class="list-group list-group-flush">

                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Teacher's Identification Number:</div>
                                            <div className='col'>{teacher.teacher_id}</div>
                                          </div>
                                        </li>
                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{teacher.gender}</div>
                                            </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{teacher.address}</div>
                                          </div>
                                          </li>


                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{teacher.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{teacher.number}</div>
                                          </div>
                                          </li>

                                      </ul>
                                      
                                  </section>
                              </aside>
                          </div>
      </div>
      </ModalBody>
      </Modal>
  )
}