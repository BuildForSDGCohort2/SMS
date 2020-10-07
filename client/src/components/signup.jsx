import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {studentAccount} from '../actions/parentActions'
import {teacherAccount} from '../actions/teacherActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import kR from './upload.png'
import $ from 'jquery'
class SignUp extends Component {
  state={
    email:'',
    type:'owner',
    surname:'',
    student_id:'',
    password:'',
    reg:false,
    msg:'',
    error:'',
    status:'',
    clas:'',
    teacher_id:'',
    name:'',
    image:'no image'
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleClass=e=>{
    this.props.teacherAccount(e.target.value)
    this.setState({clas:e.target.value,reg:true})
    const {teacher} = this.props.teacher
    console.log(teacher)
  }
  handleSubmit=(e)=>{
      e.preventDefault()
      const {teacher} = this.props.teacher
      const {student} = this.props.student
      console.log(teacher.teacher_id, this.state.teacher_id)
      const user = this.state.type==='teacher' ?(
      this.state.teacher_id===teacher.teacher_id ?
      {password:this.state.password}
      :
       this.setState({msg:"teacher doesn't exist check ur id and try again"}))
      :
      this.state.type==='guardian' ?(
      this.state.surname===student.surname ?
      {password:this.state.password}
      :
      this.setState({msg:"Surnames do not match"})
      ):
      this.state.type==='owner' ?
      {
         name:this.state.name,
         email:this.state.email,
         password:this.state.password
      }
      :
      null

      if(this.state.type==='teacher'){
      axios.post(('/teacher/signup/'+teacher.teacher_id),user)
       .then(res=>{
      if(res.data.error){
        this.setState({status:res.data.error})
      } else{
        this.props.history.push('/')
      }
      })
      }
      else if(this.state.type==='guardian'){
      axios.post(('/parent/signup/'+student.student_id),user)
       .then(res=>{this.setState({status:res.data})})
      this.props.history.push('/')
     }else if(this.state.type==='owner'){
      axios.post('/owner/signup',user)
       .then(res=>{this.setState({status:res.data})})
      this.props.history.push('/')
    }
  }
  handleId=e=>{
    this.props.studentAccount(e.target.value)
    this.setState({student_id:e.target.value})
  }
  checkId=e=>{
    const {student} = this.props.student
    e.preventDefault()
    if(student!==null){
    student.student_id!==this.state.student_id ? this.setState({reg:false, error:'No Student With that ID or the account has been registered'}) : this.setState({reg:true})}
    else if(this.state.student_id===''){
      this.setState({reg:false,error:"Input the Child's ID to continue registration"})
    }
    console.log((this.state.student_id).length)
  }
  owner=e=>{
    this.setState({error:'',reg:false,type:'owner'})
  }
  teacher=e=>{
    this.setState({error:'',reg:false,type:'teacher'})
  }
  guardian=e=>{
    this.setState({error:'',reg:false,type:'guardian'})
  }
  uploadFile=()=>{
  $('#newImage').click()
}
uploadImage=async e =>{
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'jewbreel')
  this.setState({loading:true})
  const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
  {
    method:'POST',
    body:data
  }
  )
  const file = await res.json()
  this.setState({image:file.secure_url,name:file.secure_url})
  this.setState({loading:false})
  console.log(file.secure_url)
}
  render(){
    return(
      <div class="row mt-5">
      <div class="col-md-6 mx-auto">
      <div class="card container">
      <div className='card-body'>
      <h1 class="text-center mb-3"><i class="fas fa-user-plus"></i> Register</h1>
      </div>
      {
      (this.state.status!=='')?(
        <div className='alert alert-danger'>{this.state.status}</div>
      ):(<div></div>)
      }
      {
      (this.state.error!=='')?(
        <div className='alert alert-danger'>{this.state.error}</div>
      ):(<div></div>)
      }

      {
        this.state.type==='owner' ?
        <form noValidate onSubmit={this.handleSubmit}>
        {
        (this.state.image==='no image')?(
          <div className='form-group'>
          <img id="image" alt='' src={kR} style={{borderRadius:"50%",width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.uploadFile}/>
          <p className='text-center'>Click to Add School Logo</p>
          <input onChange={this.uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img id="image" alt='' src={this.state.image} style={{borderRadius:"50%",width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.uploadFile}/>
          <input onChange={this.uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        )
      }
        <div class="form-group">
        <label for="name">School Name</label>
        <input class="form-control"
         id="name"
          type="text"
           name="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChange}/>
      </div>
        <div class="form-group">
        <label for="email">School's Email</label>
        <input class="form-control"
         id="email"
          type="email"
           name="email"
            placeholder="Enter Email"
            onChange={this.handleChange}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
         id="password"
          type="password"
           name="password"
            placeholder="Create Password"
            onChange={this.handleChange}/>
      </div>
          <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
        </form>
        :
        this.state.type==='teacher' ?
        <form noValidate onSubmit={this.handleSubmit}>
        <div
         class="row form-group">
            <div class="col col-md-3">
                <label for="selectSm" class=" form-control-label">Class</label>
            </div>
            <div class="col-12 col-md-9">
                <select name="clas" onChange={this.handleClass} id="SelectLm" class=" form-control">
                    <option>Please select</option>
                    <option>Creche</option>
                    <option>KG1</option>
                    <option>KG2</option>
                    <option>NUR1</option>
                    <option>NUR2</option>
                    <option>Basic1</option>
                    <option>Basic2</option>
                    <option>Basic3</option>
                    <option>Basic4</option>
                    <option>Basic5</option>
                    <option>Jss1</option>
                    <option>Jss2</option>
                    <option>Jss3</option>
                    <option>Sss1</option>
                    <option>Sss2</option>
                    <option>Sss3</option>
                </select>
            </div>
        </div>
        {
          (this.state.reg===true)?(
            <div>
            {
              (this.state.msg==='')?(<div></div>):(
                <div className='alert alert-danger'>{this.state.msg}</div>
              )
            }
            <div class="form-group">
            <label for="email">Your ID</label>
            <input class="form-control"
            id="email"
            type="email"
            name="teacher_id"
            placeholder="Enter Teacher's ID"
            onChange={this.handleChange}/>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control"
            id="password"
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={this.handleChange}/>
            </div>
            <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
            </div>
          ):(
            <div></div>
          )
        }
        </form>
        :
        <form noValidate onSubmit={this.handleSubmit}>
        <div
         class="row form-group">
        {
          this.state.status===''?<div></div>:<div className='alert alert-info'>{this.state.status}</div>
        }
            <div class="col col-md-3">
                <label for="selectSm" class=" form-control-label">Child's Id</label>
            </div>
            <div class=" col col-md-7">
                <input value={this.state.student_id} name="student_id" onChange={this.handleId} type='text' className='form-control'/>
            </div>
            <div class='col col-md-2'><button type="button" className='btn btn-outline-primary btn-block' onClick={this.checkId}>Next</button></div>
        </div>
        {
          (this.state.reg===true)?(
            <div>
            {
              (this.state.msg==='')?(<div></div>):(
                <div className='alert alert-danger'>{this.state.msg}</div>
              )
            }
            <div class="form-group">
            <label for="surname">Child's Surname</label>
            <input class="form-control"
            id="surname"
            type="surname"
            name="surname"
            placeholder="Enter Child's Surname"
            onChange={this.handleChange}/>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control"
            id="password"
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={this.handleChange}/>
            </div>
            <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
            </div>
          ):(
            (this.state.student_id==='')?(
              <div className='alert alert-info'>Input The Child's ID to continue with the registration</div>
            ):(this.state.error!==''?
            <div className='alert alert-info'>{this.state.error}</div>:<div></div>)
          )
        }
        </form>
      }
      <div className='row mt-3'>
        {
          this.state.type==='owner' ?
          <React.Fragment>
          <div className='col'><button onClick={this.teacher} type="button" className='btn btn-block btn-outline-primary'>Teacher</button></div>
          <div className='col'><button onClick={this.guardian} type="button" className='btn btn-block btn-outline-success'>Parent/Guardian</button></div>
          </React.Fragment>
          :
          this.state.type==='teacher' ?
          <React.Fragment>
          <div className='col'><button onClick={this.owner} type="button" className='btn btn-block btn-outline-info'>Owner</button></div>
          <div className='col'><button onClick={this.guardian} type="button" className='btn btn-block btn-outline-success'>Parent/Guardian</button></div>
          </React.Fragment>
          :
          <React.Fragment>
          <div className='col'><button onClick={this.owner} type="button" className='btn btn-block btn-outline-info'>Owner</button></div>
          <div className='col'><button onClick={this.teacher} type="button" className='btn btn-block btn-outline-primary'>Teacher</button></div>
          </React.Fragment>
        }
      </div>
      <p class="lead mt-4">Have An Account? <Link to="/">Login</Link></p>
      </div>
      </div>
      </div>
    )
  }
}
SignUp.propTypes = {
  teacher: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired,
  teacherAccount: PropTypes.func.isRequired,
  studentAccount: PropTypes.func.isRequired
}
const mapStateToProps= state => {
  return{
    teacher:state.teacher,
    student:state.student
  }
}
export default connect(mapStateToProps,{teacherAccount,studentAccount})(SignUp)
