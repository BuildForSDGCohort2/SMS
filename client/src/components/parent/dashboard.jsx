import React,{Component} from 'react'
import {ptfNotifications} from '../../notification'
import {connect} from 'react-redux'
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom'
import kR from '../../unnamed.jpg'
import {getSchool} from '../../actions/ownerActions'
import PropTypes from 'prop-types'
import {studentBillDetail} from '../../actions/ownerActions'
import {teacherInfo} from '../../actions/parentActions'
class Dashboard extends Component{
componentDidMount(){
    const decode = jwt_decode(localStorage.token)
    ptfNotifications()
    this.props.getSchool()
    this.props.studentBillDetail(decode.student_id)
    this.props.teacherInfo(decode.clas)
}
  render(){
const decode = jwt_decode(localStorage.token)
const {school} = this.props.school
const {teacher} = this.props.teacher
const {debtor} = this.props.debtor
return(
        <div class="main-content">
        <div class="section__content section__content--p30">
        <div class="container-fluid">
        <div class="row">
        <div class="col-md-12">
        <div class="overview-wrap">
        <h2 class="title-1">Dashboard</h2>
  
        </div>
        <div class="image mx-auto d-block img-cir img-120">
                          <img  src={school.logo} alt="John Doe"/>
                      </div>
              <h1 className='text-center'>{school.schoolName}</h1>
        </div>
        </div>
        <br/><hr/>
        <div className='row'>
        
        <div class="col-md-6">
        <div class="image mx-auto d-block img-cir img-120">
                          <img  src={decode.image} alt="John Doe"/>
                      </div>
        <h1 className='text-center'>Student</h1>
            <div className='card shadow' style={{borderLeft:'4px solid',borderBottom:'4px solid'}}>
                <div className='card-body'>
                <ul class="list-group list-group-flush">
                                        {
                                          (decode.department)?(
                                            <li class="list-group-item">
                                            <div className='row'>
                                            <div className='col'>Department:</div>
                                            <div className='col'>{decode.department}</div>
                                            </div>
                                            </li>
                                          ):(
                                            <React.Fragment></React.Fragment>
                                          )
                                        }
                                        <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Student's Identification Number:</div>
                                            <div className='col'>{decode.student_id}</div>
                                          </div>
                                        </li>
                                          <li class="list-group-item">
                                            <div className='row'>
                                              <div className='col'>Gender:</div>
                                              <div className='col'>{decode.gender}</div>
                                            </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Religion:</div>
                                            <div className='col'>{decode.religion}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Date Of Birth:</div>
                                            <div className='col'>{decode.date}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>State Of Origin:</div>
                                            <div className='col'>{decode.sog}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Local Government Area:</div>
                                            <div className='col'>{decode.lga}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Address:</div>
                                            <div className='col'>{decode.address}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Name:</div>
                                            <div className='col'>{decode.pname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Surname:</div>
                                            <div className='col'>{decode.psurname}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Email Address:</div>
                                            <div className='col'>{decode.email}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Mobile Number:</div>
                                            <div className='col'>{decode.number}</div>
                                          </div>
                                          </li>
                                          <li class="list-group-item">
                                          <div className='row'>
                                            <div className='col'>Guardian's Address:</div>
                                            <div className='col'>{decode.paddress}</div>
                                          </div>
                                          </li>
                                      </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
        <div class="image mx-auto d-block img-cir img-120">
                          <img  src={teacher.image} alt="John Doe"/>
                      </div>
        <h1 className='text-center'>Teacher</h1>
        <div className='card shadow' style={{borderLeft:'4px solid',borderBottom:'4px solid'}}>
                <div className='card-body'>
                {
                    teacher ? 
                    <ul class="list-group list-group-flush">


<li class="list-group-item">
  <div className='row'>
    <div className='col'>Gender:</div>
    <div className='col'>{teacher.gender}</div>
  </div>
</li>


<li class="list-group-item">
<div className='row'>
  <div className='col'>Address:</div>
  <div className='col'>{teacher.address}</div>
</div>
</li>


<li class="list-group-item">
<div className='row'>
  <div className='col'>Email Address:</div>
  <div className='col'>{teacher.email}</div>
</div>
</li>
<li class="list-group-item">
<div className='row'>
  <div className='col'>Mobile Number:</div>
  <div className='col'>{teacher.number}</div>
</div>
</li>

</ul>
:
<div>Teacher not registered Yet</div>
                }
                
                </div>
        </div>
        <br/><hr/>
        <h1 className='text-center'>Debt Status</h1>
        <div className='card shadow' style={{borderLeft:'4px solid',borderBottom:'4px solid'}}>
        <div className='card-body'>
            <div className='row container'>
                <div className='col'>
            School fee Status : 
                </div>
                <div className='col'>
                    {debtor.feeStatus}
                </div>

            </div>
            <div className='row container'>
                <div className='col'>
            School fee : 
                </div>
                <div className='col'>
                    {debtor.fees}
                </div>

            </div>
            <div className='row container'>
                <div className='col'>
            Amount Paid : 
                </div>
                <div className='col'>
                    {debtor.amountPaid}
                </div>

            </div>
            <div className='row container'>
                <div className='col'>
            Amount Left : 
                </div>
                <div className='col'>
                    {debtor.fees - debtor.amountPaid}
                </div>

            </div>
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
Dashboard.propTypes={
    school:PropTypes.object.isRequired,
    getSchool:PropTypes.func.isRequired,
    debtor:PropTypes.object.isRequired,
    studentBillDetail:PropTypes.func.isRequired,
    teacherInfo:PropTypes.func.isRequired,
    teacher: PropTypes.object.isRequired
}
const mapStateToProps=state=>{
    return{
        school:state.school,
        debtor:state.debtor,
        teacher:state.teacher
    }
}
export default connect(mapStateToProps,{getSchool,studentBillDetail,teacherInfo})(Dashboard)
