import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
  state={
    email:'',
    password:'',
    error:''
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/owner/login', {
            email: user.email,
            password: user.password
        })
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
  render(){
    return(
      <div class="row mt-5">
  <div class="col-md-6 m-auto">
    <div class="card card-body">
      <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i> Login</h1>
    </div>
    {
      (this.state.error!=='')?(
        <div className='alert alert-danger'>{this.state.error}</div>
      ):(<div></div>)
    }
    <form noValidate onSubmit={this.handleSubmit}>
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
        placeholder="Enter Password"
        onChange={this.handleChange}/>
  </div>
      <button class="btn btn-primary btn-block" type="submit" value="Register">Login →</button>
    </form>
    <p class="lead mt-4">Don't Have An Account? <Link to="/signup">Register</Link></p>
  </div>
</div>

    )
  }
}
export default Login
