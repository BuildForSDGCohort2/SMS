import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ptfNotifications} from '../../notification'
import {getStudents} from '../../actions/teacherActions'
import {connect} from 'react-redux'
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom'
class Results extends Component {
  componentDidMount() {
    ptfNotifications()
    this.props.getStudents()
  }
  render(){
    const {students} = this.props.students
    const data = students.map(student=>{
      return(
        {
          name:student.name

,
          first:(<Link to={'/1stterm/'+student.student_id} className='text-secondary dropdown-item'>1st Term Result</Link>),
          second:(<Link to={'/2ndterm/'+student.student_id} className='text-secondary dropdown-item'>2nd Term Result</Link>),
          third:(<Link to={'/3rdterm/'+student.student_id} className='text-secondary dropdown-item'>3rd Term Result</Link>)
})
    })
    const columns = [
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
        filterable:true,
        colspan: 2,
        width:'30%'
      },
      {
        name: 'First Term',
        selector: 'first',
        sortable: true,
        filterable:true
      },
      {
        name: 'Second Term',
        selector: 'second',
        sortable: true,
      },
      {
        name: 'Third Term',
        selector: 'third',
        sortable: true,
      }
    ];

    return(
            <div class="main-content">
            <div class="card shadow">
    <div class="card-body">
      <div class="table-responsive">

        <div class="row">
          <div class="col-sm-12">

      <DataTable
        title="Students"
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

Results.propTypes = {
  getStudents:PropTypes.func.isRequired,
  students:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    students:state.students
  }
};
export default connect(mapStateToProps,{getStudents})(Results)
