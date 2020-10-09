import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ptfNotifications} from '../../notification'
import {getStudents} from '../../actions/teacherActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class Students extends Component {
  componentDidMount() {
    ptfNotifications()
    this.props.getStudents()
  }
  render(){
    const {students} = this.props.students
    
    const studentsList = (this.props.students.loading===false)?((students.length) ? (
            students.map(student => {
                return (
                  <tr className='odd' key={student._id}>
                  <td>
                  <div className='dropdown'>
                      <Link type='button' className='text-secondary nav-link dropdown-toggle'  to='#' data-toggle='dropdown'>  {student.name}</Link>
                      <div className='dropdown-menu'>
                      <Link className='text-secondary dropdown-item' to={'/student/'+student.student_id}> view Child's Info</Link>
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
                )
            })
        ) : (
                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>
            )):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
            <div class="card shadow">
    <div class="card-body">
      <div class="table-responsive">

        <div class="row">
          <div class="col-sm-12">
            <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
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
        {studentsList}
      </tbody>
    </table>

            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
  }
}

Students.propTypes = {
  getStudents:PropTypes.func.isRequired,
  students:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    students:state.students
  }
};
export default connect(mapStateToProps,{getStudents})(Students)
