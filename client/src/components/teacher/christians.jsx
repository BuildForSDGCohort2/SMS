import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ptfNotifications} from '../../notification'
import {getChristians} from '../../actions/teacherActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component';
class Christians extends Component {

  componentDidMount() {
    ptfNotifications()
    this.props.getChristians()
  }
  render(){
    const {students} = this.props.students
    const data = students.map(student=>{
      return(
        {
          name:(<div className='dropdown'>
              <Link type='button' className='text-secondary nav-link dropdown-toggle' id='navbardrop' to='#' data-toggle='dropdown'>  {student.name}</Link>
              <div className='dropdown-menu'>
              <Link className='text-secondary dropdown-item' to={'/student/'+student.student_id}> view Child's Info</Link>
              <Link to={'/result/'+student.student_id} className='text-secondary dropdown-item'>Edit/Add Student's Result</Link>
              <Link to={'/1stterm/'+student.student_id} className='text-secondary dropdown-item'>1st Term Result</Link>
              <Link to={'/2ndterm/'+student.student_id} className='text-secondary dropdown-item'>2nd Term Result</Link>
              <Link to={'/3rdterm/'+student.student_id} className='text-secondary dropdown-item'>3rd Term Result</Link>
              </div>
          </div>),
          surname:student.surname,
          clas:student.clas,
          gender:student.gender,
          age:student.age
        }
      )
    })
    const columns = [
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
        filterable:true
      },
      {
        name: 'Surname',
        selector: 'surname',
        sortable: true,
        right: true,
        filterable:true
      },
      {
        name: 'Class',
        selector: 'clas',
        sortable: true,
        right: true,
      },
      {
        name: 'Gender',
        selector: 'gender',
        sortable: true,
        right: true,
      },
      {
        name: 'Age',
        selector: 'age',
        sortable: true,
        right: true,
      }
    ]
    const studentsList = (this.props.students.loading===false)?((students.length) ? (
            students.map(student => {
                return (
                  <tr className='odd' key={student._id}>
                  <td>
                  <div className='dropdown'>
                      <Link className='text-secondary nav-link dropdown-toggle' id='navbardrop' to='#' data-toggle='dropdown'>  {student.name}</Link>
                      <div className='dropdown-menu'>
                      <Link className='text-secondary dropdown-item' to={'/student/'+student.student_id}> view Child's Info</Link>
                      <Link to={'/editstudent/'+student.student_id} className='text-secondary dropdown-item'>Edit Student's Info</Link>
                      </div>
                  </div>
                  </td>
                  <td>{student.surname}</td>
                  <td>{student.clas}</td>
                  <td>{student.gender}</td>
                  <td className='sorting_1'>{student.age}</td>

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
      <DataTable
        title="Christians"
        columns={columns}
        data={data}
        fixedHeader={true}
        pagination={true}
        responsive={true}
        striped={true}
        highlightOnHover={true}
        id='myTable'
      />
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
  }
}

Christians.propTypes = {
  getChristians:PropTypes.func.isRequired,
  students:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    students:state.students
  }
};
export default connect(mapStateToProps,{getChristians})(Christians)
