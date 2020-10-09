import React, { Component } from "react";
import {RegisterTeacher,UpdateTeacher} from './register'
import {TeachersList,TeacherInformation} from './lists'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {addTeacher,getTeachers,updateTeacher, teacherDetail} from '../../actions/ownerActions'
import PropTypes from 'prop-types'
import {ptfNotifications} from '../../notification'
import $ from 'jquery'
import axios from 'axios'
import kR from '../upload.png'
class Teachers extends Component {
  componentDidMount() {
    ptfNotifications()
    this.props.getTeachers()
  }
  state = {
    name:'',
    surname:'',
    clas:'',
    gender:'',
    address:'',
    email:'',
    number:'',
    modal:false,
    up:false,
    info:false,
    image: 'no image'
  }

  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleDepartment=e=>{
    this.setState({department:e.target.value})
  }
  handleSubmit=e=>{
    e.preventDefault()
    const decode = jwt_decode(localStorage.token)
    const teacher = {
      name:this.state.name,
      surname:this.state.surname,
      clas:this.state.clas,
      gender:this.state.gender,
      address:this.state.address,
      email:this.state.email,
      number:this.state.number,
      school_id:decode.school_id
    }
  this.props.addTeacher(teacher)
  this.handleToggle()
  this.props.getTeachers()
  const save = this.props.teachers
    if((save.msg !== '') && (save.error === '')){
      this.setState({
        name:'',
    surname:'',
    clas:'',
    gender:'',
    address:'',
    email:'',
    number:''
      })
    }
  }
  handleRemove=()=>{
    const {teacher} = this.props.teacher
    this.props.deleteTeacher(teacher.teacher_id)
    this.props.getTeachers()
  }
  handleUpdate=e=>{
    e.preventDefault()
    const {teacher} =this.props.teacher
    const decode = jwt_decode(localStorage.token)
    const update = {
      name:this.state.name,
      surname:this.state.surname,
      clas:this.state.clas,
      gender:this.state.gender,
      address:this.state.address,
      email:this.state.email,
      number:this.state.number,
      school_id:decode.school_id
    }
    this.props.updateTeacher(teacher.teacher_id,update)
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
  openTeacherInfo=id=>{
    this.props.teacherDetail(id)
    this.props.getTeachers()
    this.informationModal()
  }
  openUpdateModal=(id)=>{
    axios.get('/owner/teacher/'+id)
    .then(res=>{
      this.setState({
      name:res.data.name,
      surname:res.data.surname,
      clas:res.data.clas,
      gender:res.data.gender,
      address:res.data.address,
      email:res.data.email,
      number:res.data.number})
    })
    this.props.getTeachers()
    this.updateModal()
}
imageUpload=()=>{
  $('#newImage').click()
}
uploadImage=async e =>{
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'jewbreel')
  this.setState({imageLoading:true})
  const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
  {
    method:'POST',
    body:data
  }
  )
  const file = await res.json()
  this.setState({image:file.secure_url})
  this.setState({imageLoading:false})
  console.log(file.secure_url)
}
  render() {
    const {teachers} = this.props.teachers
    const {teacher} =this.props.teacher
    return (
      <div class="main-content">
      <div class="card shadow">
      <div class="card-header py-3">
      <h4 class="m-0 font-weight-bold text-secondary">
       Teacher's List
       </h4>
    </div>
          <br/>
            {
              this.props.teachers.msg ? <div className='alert alert-success alert-dismissible'>
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              {this.props.teachers.msg}</div> : null
            }
            {
              this.props.teachers.error ? <div className='alert alert-danger alert-dismissible'>
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              {this.props.teachers.error}</div> : null
            }
          <hr/>
          <UpdateTeacher 
            submit={this.handleUpdate}
            toggle={this.updateModal} 
            change={this.handleChange} 
            state={this.state} 
            msg={this.props.teachers.msg}
            remove={this.handleRemoval}
            teacher={teacher}
          />
          <TeacherInformation 
            teacher= {teacher}
            toggle={this.informationModal}
            state={this.state}
          />
          <RegisterTeacher
            submit={this.handleSubmit}
            toggle={this.handleToggle}
            change={this.handleChange}
            state={this.state}
            msg={this.props.teachers.msg}
            error={this.props.teachers.error}
            upload={this.uploadImage}
            image={this.imageUpload}
            kR={kR}
          />
          <hr/>
          <TeachersList
            teachers= {teachers}
            loading={this.props.teachers.loading}
            search={this.handleSearch}
            update={this.openUpdateModal}
            info={this.openTeacherInfo}
          />
        </div>
        </div>
       
    );
  }
}
Teachers.propTypes = {
  getTeachers:PropTypes.func.isRequired,
  teachers: PropTypes.object.isRequired,
  teacherDetail: PropTypes.func.isRequired
}
const mapStateToProps= state => {
  return{
    teachers:state.teachers,
    teacher:state.teacher
  }
}
export default connect(mapStateToProps,{addTeacher,getTeachers,updateTeacher, teacherDetail})(Teachers)
