import React, { Component } from 'react'
import kR from '../../unnamed.jpg'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {getChatPage, addChatPage, } from '../../actions/teacherActions'
import {teacherInfo} from '../../actions/parentActions'
import PropTypes from 'prop-types'
import {ptfNotifications} from '../../notification'
import {Link} from 'react-router-dom'
import Teacher from './teacher'
import io from 'socket.io-client'
class ChatPage extends Component {
  state={
    message:''
  }
  handleChange=e=>{
    this.setState({message:e.target.value})
  }
handleSubmit=e=>{
  e.preventDefault()
  const decode = jwt_decode(localStorage.token)
  const {teacher} = this.props.teacher
  
  const chat ={
    teacher_id:teacher.teacher_id,
    school_id:decode.school_id,
    name:decode.name,
    clas:decode.clas,
    sender_id:decode._id,
    message:this.state.message,
    student_id:decode.student_id
}
this.socket.emit('inputConversation', chat)
  this.setState({message:''})
}
componentDidMount() {
    ptfNotifications()
  const decode = jwt_decode(localStorage.token)
  this.props.teacherInfo(decode.clas)
  this.props.getChatPage(decode.student_id)
  localStorage.setItem('socketQuery',decode.student_id)
  const ID = localStorage.socketQuery
  let server = "http://localhost:5000";
  const school_id = decode.school_id
  this.socket = io(server, {query:{ID}});
    this.socket.on("outputConversation", msg => {
      this.props.addChatPage(msg);
  });
}

  render(){
    const{teacher} = this.props.teacher
    const {chats} = this.props.chats
    var decode = jwt_decode(localStorage.token)
    const ChatPages = (this.props.chats.loading===false)?((chats.length) ? (
            chats.map(chat => {
              return(
                <React.Fragment>
                  <div class={chat.sender_id===decode._id ? "send-mess-wrap" : "recei-mess-wrap"}>
                          <div class={chat.sender_id===decode._id ? "send-mess__inner" : "recei-mess__inner"} >
                              <div class={chat.sender_id===decode._id ? "send-mess-list" : "recei-mess-list"}>
                                  <div class={chat.sender_id===decode._id ? "send-mess" : "recei-mess"}>{chat.message}</div>
                                  <span class={`mess-time + ${decode._id===chat.sender_id ? '' : 'float-left'}`}>
                                  {(chat.sender_id===decode._id)?('me'):(chat.name)}
                                  </span>
                              </div>
                          </div>
                  </div>


</React.Fragment>


              )
            })
          ):(<div></div>)
        ):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
      <div class='container-fluid'>
      <div class="col-md-8 mx-auto">
        <div class="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">

            <div class="au-card-title" style={{backgroundImage:'url('+kR+')'}}>
                <div class="bg-overlay bg-overlay--blue"></div>
                <h3>
                <Link type="button" class='text-white' data-toggle="modal" data-target="#myModal">
                    <img style={{width:'100px',height:'100px'}} src={kR} alt={teacher.name} class='rounded-circle img-fluid'/>
                    {' '+teacher.surname+' '+teacher.name}
                    </Link>
                    </h3>
                    <div class="modal fade" id="myModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <Teacher/>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


            </div>
            <div class="au-chat-textfield">
                <form class="au-form-icon" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.message} name='message' class="au-input au-input--full au-input--h65" type="text" placeholder="Type a message"/>
                    <button class="au-input-icon" type='submit'>
                        <i class="fa fa-location-arrow"></i>
                    </button>
                </form>
            </div>
            <div class="au-inbox-wrap">
                <div class="au-chat au-chat--border">
<div class="au-chat__content au-chat__content2 js-scrollbar5">
                    {ChatPages}
                    </div>

                </div>
            </div>
        </div>
                          </div>
      </div>
      </div>
    )
  }
}
ChatPage.propTypes = {
  chat: PropTypes.object.isRequired,
  getChatPage: PropTypes.func.isRequired,
  teacherInfo:PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
  chats: state.chats,
  teacher:state.teacher
}
}
export default connect(mapStateToProps,{getChatPage, addChatPage, teacherInfo})(ChatPage)
