import {
  Get_Students,
  Loading,
  Student_Detail,
  Preview_Students,
  Teacher_Detail,
  Update_Teacher,
  Get_News,
  Bill_Detail,
  Get_StudentBill,
  Get_ClassBill,
  StudentBillDetail,
  PaidStudent,
  Add_Chat,
  Get_Chat,
  Update_Chat,
  Delete_Chat,
  GetResult,
  AddResult,
  DeleteResult,
  GetPercentage,
  UpdatePercentage
} from './teacherTypes'
import axios from 'axios'

export const teacherDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/teacher/'+id)
  .then(res =>
    dispatch({
      type: Teacher_Detail,
      payload:res.data
    }),
  )

};
export const teacherAccount = (clas) => (dispatch) => {
    dispatch(setLoading());
    axios
      .get('/teacher/teacher/'+clas)
        .then(res =>
          dispatch({
            type: Teacher_Detail,
            payload:res.data
          }),
        )

  };

export const updateTeacher = (id,teacher) => (
  dispatch
) => {
  axios
  .post(`/teacher/updateteacher/${id}`, teacher)
  .then(res =>
    dispatch({
      type: Update_Teacher,
      payload: res.data,
      msg:res.data.msg
    })
  )

};


export const getStudents = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/students')
  .then(res =>
    dispatch({
      type: Get_Students,
      payload: res.data
    }),
  )

};
export const getMuslims = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/muslims')
  .then(res =>
    dispatch({
      type: Get_Students,
      payload: res.data
    }),
  )

};
export const getChristians = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/christians')
  .then(res =>
    dispatch({
      type: Get_Students,
      payload: res.data
    }),
  )

};
export const previewStudents = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/students')
  .then(res =>
    dispatch({
      type: Preview_Students,
      payload: res.data.slice(0,10)
    }),
  )

};
export const studentDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/student/'+id)
  .then(res =>
    dispatch({
      type: Student_Detail,
      payload:res.data
    }),
  )

};




export const getNews =()=>(dispatch)=>{
  axios.get('/teacher/news')
  .then(res=>dispatch({
    type:Get_News,
    payload:res.data
  }))
}




export const billDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/bill/'+id)
  .then(res =>
    dispatch({
      type: Bill_Detail,
      payload:res.data
    }),
  )

};
export const getClassBill = (clas) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/classbill/'+clas)
  .then(res =>
    dispatch({
      type: Get_ClassBill,
      payload:res.data
    }),
  )

};

export const getPaidStudent =()=>(dispatch)=>{
  axios.get('/teacher/paid')
  .then(res=>dispatch({
    type:PaidStudent,
    payload:res.data
  }))
}
export const getStudentBill =()=>(dispatch)=>{
  axios.get('/teacher/studentbill')
  .then(res=>dispatch({
    type:Get_StudentBill,
    payload:res.data
  }))
}
export const studentBillDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/teacher/studentbill/'+id)
  .then(res =>
    dispatch({
      type: StudentBillDetail,
      payload:res.data
    }),
  )

};

export const addChat = (chat) => (
  dispatch
) => {

    dispatch({
      type:Add_Chat,
      payload:chat
    })
  }
  export const getChat =()=>(dispatch)=>{
    axios.get('/teacher/chat')
    .then(res=>dispatch({
      type:Get_Chat,
      payload:res.data
    }))
  }
  export const updateChat =(id,chat)=>(dispatch)=>{
    axios.post(`/teacher/chat/${id}`, chat)
    .then(res=>dispatch({
      type:Update_Chat,
      payload:res.data
    }))
  }
  export const deleteChat =(id)=>(dispatch)=>{
    axios.delete('/teacher/chat/'+id)
    .then(res=>dispatch({
      type:Delete_Chat,
      payload:id
    }))
  }
  export const addChatPage = (chat) => (
    dispatch
  ) => {
      dispatch({
        type:Add_Chat,
        payload:chat
      })
    }
    export const getChatPage =(id)=>(dispatch)=>{
      axios.get('/teacher/chatpage/'+id)
      .then(res=>dispatch({
        type:Get_Chat,
        payload:res.data
      }))
    }
    export const setLoading = () => {
      return {
        type: Loading
      };
    };
    export const addResult = (result) => (
      dispatch
    ) => {
      axios.post('/teacher/result', result)
        .then(res=>{
        dispatch({
          type:AddResult,
          payload:res.data.error ? '' : res.data,
          msg:(res.data.error)?(res.data.error):('')
        })
        })
      }
      export const getResult =(id)=>(dispatch)=>{
        axios.get('/teacher/result/'+id)
        .then(res=>dispatch({
          type:GetResult,
          payload:res.data
        }))
      }
      export const deleteResult =(id)=>(dispatch)=>{
        axios.delete('/teacher/result/'+id)
        .then(res=>dispatch({
          type:DeleteResult,
          payload:id
        }))
      }
      export const firstTerm =(id)=>dispatch=>{
        axios.get('/teacher/1sttermresult/'+id)
        .then(res=>dispatch({
          type:GetResult,
          payload:res.data
        }))
      }
      export const secondTerm =(id)=>dispatch=>{
        axios.get('/teacher/2ndtermresult/'+id)
        .then(res=>dispatch({
          type:GetResult,
          payload:res.data
        }))
      }
      export const thirdTerm =(id)=>dispatch=>{
        axios.get('/teacher/3rdtermresult/'+id)
        .then(res=>dispatch({
          type:GetResult,
          payload:res.data
        }))
      }
      export const updatePercentage =(id)=>dispatch=>{
        axios.post('/teacher/percentage/'+id)
        .then(res=>dispatch({
          type:UpdatePercentage,
          payload:res.data
        }))
      }
      export const getPercentage =(id)=>dispatch=>{
        axios.get('/teacher/percentage/'+id)
        .then(res=>dispatch({
          type:GetPercentage,
          payload:res.data
        }))
      }
