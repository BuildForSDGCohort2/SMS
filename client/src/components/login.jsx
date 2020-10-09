import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
  state={
    email:'',
    password:'',
    error:'',
    type:'owner',
    login:'',
    schoolEmail:''
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = this.state.type==='owner' ? {
      schoolEmail: this.state.schoolEmail,
      password: this.state.password
    } : {
      login: this.state.login,
      password: this.state.password
    }
    if(this.state.type==='owner'){
    axios.post('/owner/login', user)
        .then(res => {
          (!res.data.error)?((localStorage.setItem('token', res.data))):this.setState({error:res.data.error})
          if(!res.data.error){
            window.location='/'
          }
        })
        .catch(err => {
            console.log(err)
        })
}else if(this.state.type==='teacher'){
axios.post('/teacher/login', user)
    .then(res => {
      (!res.data.error)?((localStorage.setItem('token', res.data))):this.setState({error:res.data.error})
      if(!res.data.error){
        window.location='/'
      }
    })
    .catch(err => {
        console.log(err)
    })
}
else{
axios.post('/parent/login', user)
    .then(res => {
      (!res.data.error)?((localStorage.setItem('token', res.data))):this.setState({error:res.data.error})
      if(!res.data.error){
        window.location='/'
      }
    })
    .catch(err => {
        console.log(err)
    })
}
  }
  owner=e=>{
    this.setState({type:'owner'})
  }
  teacher=e=>{
    this.setState({type:'teacher'})
  }
  guardian=e=>{
    this.setState({type:'guardian'})
  }
  render(){
    return(
      <div class="row mt-5">
      <div class="col-md-6 mx-auto">
      <div class="card container">
      <div className='card-body'>
      <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i> Login</h1>
      </div>
      {
      (this.state.error!=='')?(
        <div className='alert alert-danger'>{this.state.error}</div>
      ):(<div></div>)
      }

      {
        this.state.type==='owner' ?
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
        <label for="schoolEmail">School's Email</label>
        <input class="form-control"
        id="schoolEmail"
        type="email"
         name="schoolEmail"
          placeholder="Enter School's Email"
          onChange={this.handleChange}/>
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
        id="password"
        type="password"
         name="password"
          placeholder="Enter Password"
          onChange={this.handleChange}/>
        </div>
        <button class="btn btn-outline-info btn-block" type="submit" value="Register">Login <i className='fa fa-fw fa-sign-in-alt'/></button>
        </form>
        :
        this.state.type==='teacher' ?
        <form noValidate onSubmit={this.handleSubmit}>
        <div class="form-group">
        <label for="login">Teacher's ID or Email</label>
        <input class="form-control"
         id="login"
          type="login"
           name="login"
            placeholder="Enter Teacher's ID or Email Address"
            onChange={this.handleChange}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
         id="password"
          type="password"
           name="password"
            placeholder="Enter Password"
            onChange={this.handleChange}/>
      </div>
          <button class="btn btn-outline-primary btn-block" type="submit" value="Register">Login <i className='fa fa-fw fa-sign-in-alt'/></button>
        </form>
        :
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
        <label for="login">Student's ID or Email Address</label>
        <input class="form-control"
         id="login"
          type="text"
           name="login"
            placeholder="Enter Student's ID or Guardian's Email Address"
            onChange={this.handleChange}/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control"
         id="password"
          type="password"
           name="password"
            placeholder="Enter Password"
            onChange={this.handleChange}/>
      </div>
          <button class="btn btn-outline-success btn-block" type="submit" value="Register">Login <i className='fa fa-fw fa-sign-in-alt'/></button>
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
      <p class="lead mt-4">Don't Have An Account? <Link to="/signup">Register</Link></p>
      </div>
      </div>
      </div>
    )
  }
}
export default Login
