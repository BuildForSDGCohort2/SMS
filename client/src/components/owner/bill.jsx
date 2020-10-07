import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getBill,addBill,billDetail, deleteBill, updateBill} from '../../actions/ownerActions'
import {Link} from 'react-router-dom'
import {ptfNotifications} from '../../notification'
import axios from 'axios'
import {toast} from 'react-toastify'
import {UpdateBill} from './register'
import {AllClasses} from '../../classes'
toast.configure()
class Bill extends Component{
state={
  clas:'',
  fees:'',
  uniform:'',
  exerciseBooks:'',
  pricePerBook:'',
  textBooks:'',
  totalTextBookPrice:'',
  modal:false
}
  componentDidMount() {
    this.props.getBill()
    ptfNotifications()
    // if(this.props.bill.msg!==''){
    //   toast.success(this.props.bill.msg,{
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 10000
    //   })
    // }
  }
  handleToggle=()=>{
    this.setState({modal:!this.state.modal})
    console.log('toggle Clicked')
  }
  openUpdateModal=(id)=>{
    axios.get('/owner/bill/'+id)
    .then(res=>{
      this.setState({
        clas:res.data.clas,
        fees:res.data.fees,
        uniform:res.data.uniform,
        exerciseBooks:res.data.exerciseBooks,
        pricePerBook:res.data.pricePerBook,
        textBooks:res.data.textBooks,
        totalTextBookPrice:res.data.totalTextBookPrice
          })
        })
    this.props.billDetail(id)
    this.props.getBill()
    this.handleToggle()
    console.log('modal A clicked')
  }
  handleUpdate=e=>{
    e.preventDefault()
    const {classBill} = this.props.classBill
    const bill = {
      clas:this.state.clas,
      fees:this.state.fees,
      uniform:this.state.uniform,
      exerciseBooks:this.state.exerciseBooks,
      pricePerBook:this.state.pricePerBook,
      textBooks:this.state.textBooks,
      totalTextBookPrice:this.state.totalTextBookPrice
    }
    this.props.updateBill(classBill._id, bill)
    this.handleToggle()
    // this.props.getBill()
    this.setState({msg:bill.clas+' bill updated successfull'})
    if(this.props.bill.msg!==''){
      toast.success(this.props.bill.msg,{
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000
      })
    }
}
handleDelete=()=>{
  const {classBill} = this.props.classBill
  this.props.deleteBill(classBill._id)
  this.setState({error:classBill.clas+' Deleted Successfully'})
  this.props.getBill()
  this.handleToggle()
}
  handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=e=>{
    e.preventDefault()
    const bill = {
      clas:this.state.clas,
      fees:this.state.fees,
      uniform:this.state.uniform,
      exerciseBooks:this.state.exerciseBooks,
      pricePerBook:this.state.pricePerBook,
      textBooks:this.state.textBooks,
      totalTextBookPrice:this.state.totalTextBookPrice
    }
    this.props.addBill(bill)
    this.setState({msg:bill.clas+' added successfully'})
    // this.setState({msg:'Bill Added Successfully'})
    // if(this.props.bill.msg!==''){
    //   toast.success(this.props.bill.msg,{
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 10000
    //   })
    // }
    
  }
  successMsg=(msg)=>{
    toast.success(msg,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 10000})
  }
  errorMsg=(msg)=>{
    toast.success(msg,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 10000})
  }
  componentDidUpdate(){
    if(this.props.bill.msg!==''){
      this.successMsg(this.props.bill.msg)
    }
    if(this.props.bill.error!==''){
          this.errorMsg(this.props.bill.error)
        }
  }
  render(){
   
    console.log(this.props.bill.msg)
    if(this.props.bill.msg!==''){
          successMsg(this.props.bill.msg)
        }
        if(this.props.bill.error!==''){
              errorMsg(this.props.bill.error)
            }
    const {bill} =this.props.bill
    console.log(bill)
      const Bill =
      (bill.length)?(
        bill.map(bill=>{
          return(
            (bill.nothing==='empty')?(<div></div>):(

              <article class="blog_item">
              <div class="card">
              <div class="card-header">
              <Link onClick={()=>this.openUpdateModal(bill._id)}>
              <strong class="card-title">{bill.clas}</strong>
              </Link>
              </div>
              <div class="card-body">
              <table class="table table-bordered">

              <tbody>
              <tr>
              <td colspan='3'>School Fees</td>
              <td>#{bill.fees}</td>
              </tr>
              <tr>
              <td colspan='3'>Uniform</td>
              <td>#{bill.uniform}</td>
              </tr>
              <tr>
              <th></th>
              <th>No. Of Exercise Books Needed</th>
              <th>Price Per book</th>
              <th>Total</th>
              </tr>
              <tr>
              <th>Exercise Book</th>
              <th>{bill.exerciseBooks}</th>
              <th>#{bill.pricePerBook}</th>
              <th>#{bill.exerciseBooks*bill.pricePerBook}</th>
              </tr>
              <tr>
              <th colspan='2'></th>
              <th>No. Of Text Books Needed</th>
              <th>Total Price</th>
              </tr>
              <tr>
              <th colspan='2'>Text Books</th>
              <th>{bill.textBooks}</th>
              <th>#{bill.totalTextBookPrice}</th>
              </tr>
              <tr>
              <th colspan='3'>Total</th>
              <th>
              #{bill.fees+bill.uniform+(bill.exerciseBooks*bill.pricePerBook)+bill.totalTextBookPrice}
              </th>
              </tr>
              </tbody>
              </table>
              </div>
              </div>
              </article>
            )

          )
        })
      ):(<article class="blog_item">
          <div class="blog_item_img">
              <i class="card-img rounded-0 fa fa-plus"  alt=''></i> Add New Bill
          </div>
      </article>)
    return(
      <div class="main-content">
        
            <section class="blog_area section-padding">
            <UpdateBill 
            submit={this.handleUpdate}
            toggle={this.handleToggle} 
            change={this.handleChange} 
            state={this.state} 
            remove={this.handleDelete}
          />
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0">
                        <div class="blog_left_sidebar">

                        {Bill}

                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="blog_right_sidebar">
                            <aside class="single_sidebar_widget search_widget">
                            <h4 className="text-center">Add Bill</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="selectSm" class=" form-control-label">Class</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <AllClasses clas={this.handleChange}/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">School Fees</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} type="number" id="text-input" name="fees" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Uniform Fee</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} type="number" id="text-input" name="uniform" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">No. Of Exercise Books</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} type="number" id="text-input" name="exerciseBooks" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Price Per Exercise Book</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} type="number" id="text-input" name="pricePerBook" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">No. Of Text Books</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} type="number" id="text-input" name="textBooks" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="text-input" class=" form-control-label">Total Text Book Price</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input onChange={this.handleChange} type="number" id="text-input" name="totalTextBookPrice" class="form-control-sm form-control"/>
                                    </div>
                                </div>
                                <input class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" value='Add Bill'/>
                            </form>
                           
                            </aside>


                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
  }
}
Bill.propTypes = {
  getBill:PropTypes.func.isRequired,
  bill:PropTypes.object.isRequired,
  billDetail:PropTypes.func.isRequired,
  classBill:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    bill:state.bill,
    classBill:state.classBill
  }
}
export default connect(mapStateToProps,{addBill,getBill,billDetail, deleteBill, updateBill})(Bill)
