import React from 'react'
import io from 'socket.io-client'
import jwt_decode from 'jwt-decode'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Media} from 'react-bootstrap'
import kR from './unnamed.jpg'

toast.configure()
export const ptfNotifications=()=>{
const Message =({msg})=>{
              return(
                <Media >
            <img
              width={64}
              height={64}
              className="mr-3"
              src={kR}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className='text-white'>{msg.name}</h5>
              <p className='text-white'>
                {(msg.message).slice(0,50)}
              </p>
            </Media.Body>
          </Media>
              )
            }
            const server = 'http://localhost:5000'
            const decode = jwt_decode(localStorage.token)
            const ID = decode.school_id
            
          const socket = io(server,{query:{ID}});
          socket.on("Output PTF", msg => {
          
          if(decode._id !== msg.sender_id){
          toast.info(<Message msg={msg}/>,{
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 10000
          })
          }
          })
}