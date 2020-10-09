import React, { Component } from 'react'
import kR from '../../unnamed.jpg'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {getChat, addChat} from '../../actions/teacherActions'
import PropTypes from 'prop-types'
import io from "socket.io-client";
import {Container} from 'react-bootstrap'
class PTF extends Component {
  state={
    message:''
  }
  handleChange=e=>{
    this.setState({message:e.target.value})
  }
  handleSubmit=e=>{
    e.preventDefault()
    const decode = jwt_decode(localStorage.token)
    const chat ={
      sender_id:decode._id,
      message:this.state.message,
      name:decode.name,
      school_id:decode.school_id
    }
    this.socket.emit('Input PTF', chat)
    this.setState({message:''})
  }
  componentDidMount() {
  this.props.getChat()
  const decode = jwt_decode(localStorage.token)
  let server = "http://localhost:5000";
  const school_id = decode.school_id
  this.socket = io(server, {query:{school_id}});
  
  this.socket.on("Output PTF", msg => {
      this.props.addChat(msg);
  });
  
  }
    componentDidUpdate() {
      const {chats} = this.props.chats
      if(chats.length){
      this.messagesEnd.scrollIntoView({ behavior: "smooth" })
      }
  }
  render(){
    const {chats} = this.props.chats
    console.log(chats)
    const decode = jwt_decode(localStorage.token)
    const Chats = (this.props.chats.loading===false)?((chats.length) ? (
            chats.map(chat => {
              return(
                <React.Fragment>
                <div class={chat.sender_id===decode._id ? "send-mess-wrap" : "recei-mess-wrap"}>
                        <div class={chat.sender_id===decode._id ? "send-mess__inner" : "recei-mess__inner"} >
                        {
                          chat.sender_id!==decode._id ?
                          <div class="avatar avatar--tiny">
                        </div>
                        : null
                        }
                            <div class={chat.sender_id===decode._id ? "send-mess-list" : "recei-mess-list"}>
                                <div class={chat.sender_id===decode._id ? "send-mess" : "recei-mess"}>{chat.message}</div>
                                <span class={`mess-time + ${decode._id===chat.sender_id ? '' : 'float-left'}`}>
                                {(chat.sender_id===decode._id)?('me'):(chat.name)}
                                </span>
                            </div>
                        </div>
                </div>

                <div
                        ref={el => {
                            this.messagesEnd = el;
                        }}
                        style={{ float: "left", clear: "both" }}
                    />
</React.Fragment>


              )
            })
          ):(<div></div>)
        ):(<div className="spinner-border spinner-border-lg"></div>)
    return(
            <div class="main-content">
      <Container>
        <div class="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
            <div class="au-card-title" style={{backgroundImage:'url('+kR+')'}}>
                <div class="bg-overlay bg-overlay--blue"></div>
                <h3>
                    <i class="zmdi zmdi-comment-text"></i>PTF</h3>

            </div>
            <div class="au-inbox-wrap">
                <div class="au-chat au-chat--border">
                  
<div class="au-chat__content au-chat__content2 js-scrollbar5">
                      {Chats}
                     
                    </div>
                    <div class="au-chat-textfield">
                      <form class="au-form-icon" onSubmit={this.handleSubmit}>
                          <input onChange={this.handleChange} value={this.state.message} name='message' class="au-input au-input--full au-input--h65" type="text" placeholder="Type a message"/>
                          <button class="au-input-icon" type='submit'>
                              <i class="fa fa-location-arrow"></i>
                          </button>
                      </form>
                  </div>
                </div>
            </div>
        </div>
      </Container>
      </div>
    )
  }
}
PTF.propTypes = {
  chats: PropTypes.object.isRequired,
  getChat: PropTypes.func.isRequired
}
const mapStateToProps= state => {
return{
  chats: state.chats
}
}
export default connect(mapStateToProps,{getChat, addChat})(PTF)
