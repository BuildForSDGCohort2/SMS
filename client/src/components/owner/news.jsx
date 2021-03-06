import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ptfNotifications} from '../../notification'
import kR from '../upload.png'
import {connect} from 'react-redux'
import {getNews, addNews} from '../../actions/ownerActions'
import jwt_decode from 'jwt-decode'
import {UploadNotice} from './register'
import './style.css'
import io from 'socket.io-client'
import {Media} from 'react-bootstrap'
import $ from 'jquery'
class News extends Component {

  componentDidMount() {
    ptfNotifications()
      this.props.getNews()
      const decode = jwt_decode(localStorage.token)
  let server = "http://localhost:5000";
  const school_id = decode.school_id
  this.socket = io(server, {query:{school_id}});
  
  this.socket.on("viewNotice", info => {
      this.props.addNews(info);
  });
  }
  state={
    title:'',
    content:'',
    image:'no image',
    modal: false
  }
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
 
  
  handleSubmit=e=>{
    e.preventDefault()
    var d = new Date();
    var day = d.getDate()
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var month = months[d.getMonth()];
    const decode = jwt_decode(localStorage.token)
    const info = {
      title:this.state.title,
      content:this.state.content,
      image:this.state.image,
      school_id:decode.school_id,
      day,
      month,
      sender_id: decode._id,
      image: this.state.image==='no image' ? decode.logo : this.state.image
    }
    this.socket.emit('uploadNotice', info)
    this.handleToggle()
    this.setState({
      title:' ',
      content:' ',
      msg:'News Upload Successful',
      image:'no image'
    })
  }
  handleToggle=()=>{
    this.setState({modal:!this.state.modal})
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
    const NewsItem =({news})=>{
      return(
        <Media className='mb-3'>
        <div className='row'>
        <div className='col'>
    <img
      width={300}
      height={100}
      src={news.image}
      alt="Generic placeholder"
    />
    </div>
    <div className='col'>
    <Media.Body>
      <h5>{news.title}</h5>
      <p>
        {news.content}
      </p>
      <p>{news.day+'-'+news.month}</p>
    </Media.Body>
    </div>
    </div>
  </Media>
      )
    }
  const {news} =this.props.news
    const News = (news.length)?(
      news.map(news=>{
        return(
            <NewsItem news={news}/>
        )
      })
    ):(<div></div>)
    return(
            <div class="main-content">
            <section class="blog_area section-padding">
            <div class="container">
            {
                              (this.state.msg)?(
                                <div className='alert alert-success'>{this.state.msg}</div>
                              ):(
                                <div></div>
                              )
                          }
        <UploadNotice 
          submit={this.handleSubmit}
          toggle={this.handleToggle}
          change={this.handleChange}
          state={this.state}
            kR={kR}
          upload={this.uploadImage}
            image={this.imageUpload}
        />
                <div class="row">
                    <div class="col-lg-10 mx-auto mb-5 mb-lg-0">
                        <div class="blog_left_sidebar">

                            {News}

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </div>
    )
  }
}
News.propTypes = {
  getNews: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired
}
const mapStateToProps= state =>{
    return{
      news:state.news
    }
}
export default connect(mapStateToProps,{getNews,addNews})(News)
