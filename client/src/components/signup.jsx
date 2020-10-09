import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {studentAccount} from '../actions/parentActions'
import {teacherAccount} from '../actions/teacherActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import kR from './upload.png'
import {RegClasses,States} from '../classes'
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
    schoolName:'',
    image:'no image',
    logo:'no logo',
    schoolEmail:'',
    address:'',
    state:'',
    lga:'',
    firstName:'',
    lastName:'',
    ownerEmail:'',
    number:'',
    confirmPassword:'',
    passwordError:''
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
  handlePassword=e=>{
    this.setState({confirmPassword:e.target.value})
    if(e.target.value !== this.state.password){
      this.setState({passwordError:'Passwords do not match'})
    }
    else if(e.target.value === this.state.password){
      this.setState({passwordError:''})
    }
    else if((e.target.value && this.state.password) === ''){
      this.setState({passwordError:''})
    }
  }
  handleSubmit=(e)=>{
    const {email,
    type,
    surname,
    student_id,
    password,
    reg,
    msg,
    error,
    status,
    clas,
    teacher_id,
    schoolName,
    image,
    logo,
    schoolEmail,
    address,
    state,
    lga,
    firstName,
    lastName,
    ownerEmail,
    number,
    confirmPassword
  } = this.state
      e.preventDefault()
      const {teacher} = this.props.teacher
      const {student} = this.props.student
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
        password,
        clas,
        schoolName,
        image,
        logo,
        schoolEmail,
        address,
        state,
        lga,
        firstName,
        lastName,
        ownerEmail,
        number
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
      // console.log(user)
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
  logoUpload=()=>{
  $('#newLogo').click()
}
uploadLogo=async e =>{
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'jewbreel')
  this.setState({logoLoading:true})
  const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
  {
    method:'POST',
    body:data
  }
  )
  const file = await res.json()
  this.setState({logo:file.secure_url})
  this.setState({logoLoading:false})
  console.log(file.secure_url)
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
  render(){
    return(
      <div class="row mt-5">
      <div class={"mx-auto " + (this.state.type==='owner' ? 'col-md-8' : 'col-md-6')}>
      <div class="card container">
      <div className='card-header mt-4'>
      <h1 class="text-center mb-3"><i class="fas fa-user-plus"></i> Register</h1>
      </div>

      <div className='card-body'>
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
        <div className='row'>
        <div className='col border-right border-bottom mb-2'>

        {
        (this.state.logo==='no logo')?(
          <div className='form-group'>
          <img id="image" alt='' src={kR} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.logoUpload}/>
          <p className='text-center'>Click to Add School Logo</p>
          <input onChange={this.uploadLogo} type="file" id="newLogo" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img id="image" alt='' src={this.state.logo} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.logoUpload}/>
          <input onChange={this.uploadLogo} type="file" id="newLogo" name='image' style={{display: "none"}}/>
          </div>
        )
      }
        <div class="form-group">
        <label for="schoolName">School Name</label>
        <input class="form-control"
         id="schoolName"
          type="text"
           name="schoolName"
            placeholder="Enter Name"
            value={this.state.schoolName}
            onChange={this.handleChange}/>
      </div>
        <div class="form-group">
        <label for="schoolEmail">School's Email</label>
        <input class="form-control"
         id="schoolEmail"
          type="email"
           name="schoolEmail"
            placeholder="Enter Email"
            onChange={this.handleChange}/>
      </div>
      <div class="form-group">
        <label for="address">School's Address</label>
        <input class="form-control"
         id="address"
          type="text"
           name="address"
            placeholder="School's Address"
            onChange={this.handleChange}/>
      </div>
      <div className='form-group'>
        <label>School System</label>
        <select className='form-control' onChange={this.handleChange} name='clas'>
          <option>Select Class System</option>
          <option>Both</option>
          <option>Primary</option>
          <option>Secondary</option>
        </select>
      </div>
      <div className='form-group'>
        <label>
          State
        </label>
        <select onChange={this.handleChange} name='state' className='form-control'>
        <option>Select State</option>
                                                       {
                                                           States.map(state=>{
                                                               return(
                                                                   <option>{state.name}</option>
                                                               )
                                                           })
                                                       }
                                                   </select>
      </div>
      <div>
        <label>LGA</label>
        <input className='form-control' type='text'
          name='lga'
          placeholder='Local Government Area'
          onChange={this.handleChange}
        />
      </div>
          </div>
          <div className='col border-left border-bottom mb-2'>
          {
        (this.state.image==='no image')?(
          <div className='form-group'>
          <img id="image" alt='' src={kR} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.imageUpload}/>
          <p className='text-center'>Click to Add Profile Image</p>
          <input onChange={this.uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        ):(
          <div className='form-group'>
          <img id="image" alt='' src={this.state.image} style={{width:'100px',height:'100px'}} className='mx-auto d-block rounded-circle img-fluid' onClick={this.imageUpload}/>
          <input onChange={this.uploadImage} type="file" id="newImage" name='image' style={{display: "none"}}/>
          </div>
        )
      }
        <div class="form-group">
        <label for="firstName">First Name</label>
        <input class="form-control"
         id="firstName"
          type="text"
           name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}/>
      </div>
        <div class="form-group">
        <label for="lastName">Last Name</label>
        <input class="form-control"
         id="lastName"
          type="text"
           name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}/>
      </div>
        <div class="form-group">
        <label for="ownerEmail">Owner's Email</label>
        <input class="form-control"
         id="ownerEmail"
          type="email"
           name="ownerEmail"
            placeholder="Enter Email"
            onChange={this.handleChange}/>
      </div>
      <div class="form-group">
        <label for="number">Mobile Number</label>
        <div className='input-group'>
        <div className='input-group-prepend'>
        <span className='input-group-text'>
        <i className='fa fa-phone'/>(+234)
        </span>
        </div>
        <input class="form-control"
         id="number"
          type="number"
           name="number"
            placeholder="Mobile Number"
            onChange={this.handleChange}/>
        </div>
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
      <div class="form-group">
        <label for="confirmPassword">confirm Password</label>
        <input class="form-control"
         id="confirmPassword"
          type="password"
           name="confirmPassword"
            placeholder="Confirm Password"
            onChange={this.handlePassword}/>
      </div>
      {
        this.state.passwordError !=='' ?
      <p className='text-sm-center text-white bg-danger'>{this.state.passwordError}</p>
        : null
      }
          </div>
        </div>
        {
          this.state.password !== this.state.confirmPassword ? 
          <button class="btn btn-primary btn-block" disabled type="submit" value="Register">Register →</button>
          :
          <button class="btn btn-primary btn-block" type="submit" value="Register">Register →</button>
        }
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
                <RegClasses clas={this.handleClass}/>
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
