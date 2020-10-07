import React, { Component } from "react";
import {RegisterStudent,UpdateStudent} from './register'
import {StudentsList,StudentInformation} from './lists'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import {connect} from 'react-redux'
import {addStudent,
   getClassBill,
  addStudentBill,
  updateStudent,
   studentDetail,
   deleteStudent,
   studentBillDetail,
   updateStudentBill,
   deleteStudentBill
} from '../../actions/ownerActions'
import { getStudents } from "../../actions/ownerActions";
import PropTypes from 'prop-types'
import {ptfNotifications} from '../../notification'
import $ from 'jquery'
class Students extends Component {
  state = {
    name:'',
    surname:'',
    clas:'',
    department:'',
    gender:'',
    religion:'',
    date:'',
    sog:'',
    lga:'',
    address:'',
    pname:'',
    psurname:'',
    email:'',
    number:'',
    paddress:'',
    msg:'',
    amountPaid:0,
    modal:false,
    up:false,
    info:false,
    classChange:false
  }
  componentDidMount() {
    ptfNotifications()
    this.props.getStudents();
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleDepartment=e=>{
    this.setState({department:e.target.value})
  }
  handleClass=e=>{
    this.setState({clas:e.target.value})
    this.props.getStudents()
    this.props.getClassBill(e.target.value)
  }
  handleSubmit=e=>{
    e.preventDefault()
    const decode = jwt_decode(localStorage.token)
    const {classBill} = this.props.classBill
    const student = {
      name:this.state.name,
      surname:this.state.surname,
      clas:this.state.clas,
      department:this.state.department,
      gender:this.state.gender,
      religion:this.state.religion,
      date:this.state.date,
      sog:this.state.sog,
      lga:this.state.lga,
      address:this.state.address,
      pname:this.state.pname,
      psurname:this.state.psurname,
      email:this.state.email,
      number:this.state.number,
      paddress:this.state.paddress,
      school_id:decode.school_id,
      amountPaid:this.state.amountPaid,
      feeStatus:(this.state.amountPaid===classBill.fees)?'paid':'debtor',
      fees:classBill.fees,
      paidAmount: this.state.amountPaid
    }
    this.props.addStudent(student)
    this.handleToggle()
  }
  
  handleToggle=()=>{
    this.setState({modal:!this.state.modal})
  }
  updateModal=()=>{
    this.setState({up:!this.state.up})
  }
  informationModal=()=>{
    this.setState({info:!this.state.info})
  }
  handleSearch=()=>{
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase()
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
      })
  }
  openStudentInfo=id=>{
    this.props.studentDetail(id)
    this.props.getStudents()
    this.informationModal()
  }
  openUpdateModal=(id)=>{
    axios.get('/owner/student/'+id)
        .then(res=>{
          this.setState({
            name:res.data.name,
            surname:res.data.surname,
            clas:res.data.clas,
            department:res.data.department,
            gender:res.data.gender,
            religion:res.data.religion,
            date:res.data.date,
            sog:res.data.sog,
            lga:res.data.lga,
            address:res.data.address,
            pname:res.data.pname,
            psurname:res.data.psurname,
            email:res.data.email,
            number:res.data.number,
            paddress:res.data.paddress
          })
        })
    this.props.studentDetail(id)
    this.props.studentBillDetail(id)
    const {student} = this.props.student
    this.props.getStudents();
    this.updateModal()
  }
  handleRemoval=()=>{
    const {student} = this.props.student
    this.props.deleteStudentBill(student.student_id)
    this.props.deleteStudent(student.student_id)
    this.props.getStudents()
  }
  handlePromotion=e=>{
    this.setState({clas:e.target.value})
    this.props.getClassBill(e.target.value)
    const {debtor} = this.props.debtor
    if(debtor.clas===e.target.value){
      this.setState({classChange:false})
    }else{
      this.setState({classChange:true})
    }
    this.props.getStudents()
  }

  handleUpdate=e=>{
    e.preventDefault()
    const {debtor} = this.props.debtor
    const {classBill} = this.props.classBill
    const {student} = this.props.student
    const decode = jwt_decode(localStorage.token)
    const update = {
      name:this.state.name,
      surname:this.state.surname,
      clas:this.state.clas,
      department:this.state.department,
      gender:this.state.gender,
      religion:this.state.religion,
      date:this.state.date,
      sog:this.state.sog,
      lga:this.state.lga,
      address:this.state.address,
      pname:this.state.pname,
      psurname:this.state.psurname,
      email:this.state.email,
      number:this.state.number,
      paddress:this.state.paddress,
      school_id:decode.school_id
    }
    this.props.updateStudent(student.student_id,update)
    const fees = (debtor.fees===classBill.fees)?(debtor.fees):(classBill.fees)
    const amountPaid = (debtor.fees===classBill.fees)?(debtor.amountPaid):(this.state.amountPaid)
    const studentBill = {
      clas:this.state.clas,
      amountPaid,
      fees,
      status:(amountPaid===fees)?'paid':'debtor',
      name:this.state.name,
      surname:this.state.surname
    }
    if(this.state.amountPaid > 0){
    this.props.updateStudentBill(student.student_id, studentBill)
  }
    this.props.getStudents()
  }

  render() {
    const { students } = this.props.students;
    const {student} = this.props.student
    return (
      <div class="main-content">
      <div class="card shadow">
      <div class="card-header py-3">
            <h4 class="m-0 font-weight-bold text-secondary">Student's List</h4>
          </div>
          <br/><hr/>
          <UpdateStudent 
            submit={this.handleUpdate}
            toggle={this.updateModal} 
            clas={this.handlePromotion} 
            change={this.handleChange} 
            department={this.handleDepartment} 
            state={this.state} 
            msg={this.props.students.msg}
            remove={this.handleRemoval}
          />
          <StudentInformation 
            student= {student}
            toggle={this.informationModal}
            state={this.state}
          />
          <RegisterStudent
            submit={this.handleSubmit}
            toggle={this.handleToggle}
            clas={this.handleClass}
            change={this.handleChange}
            department={this.handleDepartment}
            state={this.state}
            msg={this.props.students.msg}
          />
          <hr/>
          <StudentsList
            students= {students}
            loading={this.props.students.loading}
            search={this.handleSearch}
            update={this.openUpdateModal}
            info={this.openStudentInfo}
          />
        </div>
        </div>
       
    );
  }
}
Students.propTypes = {
  students:PropTypes.object.isRequired,
  getClassBill:PropTypes.func.isRequired,
  classBill:PropTypes.object.isRequired,
  percentage:PropTypes.object.isRequired,
  studentDetail:PropTypes.func.isRequired,
  studentBillDetail:PropTypes.func.isRequired,
  debtor:PropTypes.object.isRequired
}
const mapStateToProps= state => {
    return{
      students:state.students,
      classBill:state.classBill,
      student:state.student,
      debtor:state.debtor
    }
};
export default connect(mapStateToProps,{addStudent,
  addStudentBill,
  getStudents,
  updateStudent,
   studentDetail,
  deleteStudent,
   studentBillDetail,
   getClassBill,
  updateStudentBill,
   deleteStudentBill})(Students)


