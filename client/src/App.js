import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/owner/navbar'
import Dashboard from './components/owner/dashboard'
import SignUp from './components/signup'
import Teachers from './components/owner/teachers'
import Student from './components/owner/student'
import Teacher from './components/owner/teacher'
import EditStudent from './components/owner/editstudent'
import EditTeacher from './components/owner/editteacher'
import News from './components/owner/news'
import Bill from './components/owner/bill'
import ClassBill from './components/owner/classBill'
import Debtors from './components/owner/debtors'
import Debtor from './components/owner/debtor'
import Paid from './components/owner/paid';
import Footer from './components/owner/footer'
import Topbar from './components/owner/topbar'
import PTF_Owner from './components/owner/ptf'
import PTF_Teacher from './components/teacher/ptf'
import PTF_Parent from './components/parent/ptf'
import Receipt from './components/owner/receipt'
import FirstTerm from './components/owner/firstterm'
import SecondTerm from './components/owner/secondterm'
import ThirdTerm from './components/owner/thirdterm'
import Student_Left from './components/owner/student_left'
import Teacher_Left from './components/owner/teacher_left'
import jwt_decode from 'jwt-decode'
import Login from './components/login'
import T_Navbar from './components/teacher/navbar'
import T_Dashboard from './components/teacher/dashboard'
import T_Debtors from './components/teacher/debtors'
import T_Paid from './components/teacher/paid';
import T_Topbar from './components/teacher/topbar'
import T_Students from './components/teacher/students'
import T_News from './components/teacher/news'
import T_Student from './components/teacher/student'
import T_Result from './components/teacher/result'
import T_Results from './components/teacher/results'
import T_FirstTerm from './components/teacher/firstterm'
import T_SecondTerm from './components/teacher/secondterm'
import T_ThirdTerm from './components/teacher/thirdterm'
import P_Navbar from './components/parent/navbar'
import P_Dashboard from './components/parent/dashboard'
import P_Topbar from './components/parent/topbar'
import P_News from './components/parent/news'
import P_Student from './components/parent/student'
import P_Results from './components/parent/results'
import P_FirstTerm from './components/parent/firstterm'
import P_SecondTerm from './components/parent/secondterm'
import P_ThirdTerm from './components/parent/thirdterm'
import P_ClassBill from './components/parent/classBill'
import P_Receipt from './components/parent/receipt'
import Attendance from './components/teacher/attendance'
import Students from './components/owner/students'
class App extends Component {
  UNSAFE_componentWillMount() {
    // localStorage.removeItem('token')
    axios.interceptors.request.use(function (config) {
      const token = localStorage.token;
      config.headers.Authorization =  token;
      
      return config;
    });
    axios.defaults.headers.common['Authorization'] = localStorage.token
    if(localStorage.token){
    }
  }
  

render() {
    const decode = localStorage.token ? jwt_decode(localStorage.token) : null
  
          

    const loginRoutes = (

          <Switch>
          <Route exact path='/' component={Login}/>
            <Route path='/signUp' component={SignUp}/>
          </Switch>
    )
    const owner = (
      <React.Fragment>
      <Navbar />
      <div class='page-container'>
      <Topbar/>
      <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/students' component={Students}/>
      <Route path='/teachers' component={Teachers}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/student/:student_id' component={Student}/>
      <Route path='/editstudent/:student_id' component={EditStudent}/>
      <Route exact path='/teacher/:teacher_id' component={Teacher}/>
      <Route path='/editteacher/:teacher_id' component={EditTeacher}/>
      <Route exact path='/bill' component={Bill}/>
      <Route path='/bill/:bill_id' component={ClassBill}/>
      <Route exact path='/debtors' component={Debtors}/>
      <Route exact path='/paid' component={Paid}/>
      <Route exact path='/debtor/:student_id' component={Debtor}/>
      <Route exact path='/receipt/:student_id' component={Receipt}/>
      <Route path='/ptf' component={PTF_Owner}/>
      <Route exact path='/1stterm/:student_id' component={FirstTerm}/>
      <Route exact path='/2ndterm/:student_id' component={SecondTerm}/>
      <Route exact path='/3rdterm/:student_id' component={ThirdTerm}/>
      <Route path='/student_left' component={Student_Left}/>
      <Route path='/teacher_left' component={Teacher_Left}/>
    </Switch>
    <Footer/>
    </div>
    </React.Fragment>
    )
    const teacher = (
      <React.Fragment>
      <T_Navbar />
      <div class='page-container'>
      <T_Topbar/>
      <Switch>
      <Route exact path='/' component={T_Dashboard}/>
      <Route path='/students' component={T_Students}/>
      <Route exact path='/student/:student_id' component={T_Student}/>
      <Route exact path='/debtors' component={T_Debtors}/>
      <Route exact path='/paid' component={T_Paid}/>
      <Route path='/ptf' component={PTF_Teacher}/>
      <Route path='/news' component={T_News}/>
      <Route exact path='/result/:student_id' component={T_Result}/>
      <Route exact path='/results' component={T_Results}/>
      <Route exact path='/1stterm/:student_id' component={T_FirstTerm}/>
      <Route exact path='/2ndterm/:student_id' component={T_SecondTerm}/>
      <Route exact path='/3rdterm/:student_id' component={T_ThirdTerm}/>
      <Route path='/attendance' component={Attendance} />
      </Switch>
    <Footer/>
    </div>
    </React.Fragment>
    )
    const parent = (
      <React.Fragment>
      <P_Navbar />
      <div class='page-container'>
      <P_Topbar/>
      <Switch>
      <Route exact path='/' component={P_Dashboard}/>
      <Route exact path='/student/:student_id' component={P_Student}/>
      <Route path='/ptf' component={PTF_Parent}/>
      <Route path='/news' component={P_News}/>
      <Route exact path='/1stterm/:student_id' component={P_FirstTerm}/>
      <Route exact path='/2ndterm/:student_id' component={P_SecondTerm}/>
      <Route exact path='/3rdterm/:student_id' component={P_ThirdTerm}/>
      <Route path='/bill' component={P_ClassBill}/>
      <Route path='/receipts' component={P_Receipt}/>
      <Route path='/results' component={P_Results}/>
    </Switch>
    <Footer/>
    </div>
    </React.Fragment>
    )
    const userRoutes =localStorage.token ? (decode.type==='owner' ? owner :decode.type==='teacher' ? teacher : decode.type==='student' ? parent : null) : null
    return (
      <Router>
        <div >

          <Switch>
          {localStorage.token ? userRoutes : loginRoutes}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App