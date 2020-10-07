import {
  Loading,
  Student_Detail,
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
  FirstTerm,
  SecondTerm,
  ThirdTerm,
  DeleteResult,
  GetReceipt,
  GetProducts,
  ProductDetail,
  DeleteItem,
  AddItem
} from './parentTypes'
import axios from 'axios'

export const teacherDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/parent/teacher/'+id)
  .then(res =>
    dispatch({
      type: Teacher_Detail,
      payload:res.data
    }),
  )

};
export const teacherInfo = (clas) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/parent/teacher_info/'+clas)
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
  .post(`/parent/updateteacher/${id}`, teacher)
  .then(res =>
    dispatch({
      type: Update_Teacher,
      payload: res.data,
      msg:res.data.msg
    })
  )

};



export const studentDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/parent/student/'+id)
  .then(res =>
    dispatch({
      type: Student_Detail,
      payload:res.data
    }),
  )

};

export const studentAccount = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/parent/signup/'+id)
  .then(res =>
    dispatch({
      type: Student_Detail,
      payload:res.data
    }),
  )

};


export const getNews =()=>(dispatch)=>{
  axios.get('/parent/news')
  .then(res=>dispatch({
    type:Get_News,
    payload:res.data
  }))
}




export const billDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/parent/bill/'+id)
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
  .get('/parent/classbill/'+clas)
  .then(res =>
    dispatch({
      type: Get_ClassBill,
      payload:res.data
    }),
  )

};

export const getPaidStudent =()=>(dispatch)=>{
  axios.get('/parent/paid')
  .then(res=>dispatch({
    type:PaidStudent,
    payload:res.data
  }))
}
export const getStudentBill =()=>(dispatch)=>{
  axios.get('/parent/studentbill')
  .then(res=>dispatch({
    type:Get_StudentBill,
    payload:res.data
  }))
}
export const studentBillDetail = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/parent/studentbill/'+id)
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
  axios
  .post('/parent/chat', chat)
  .then(res =>
    dispatch({
      type:Add_Chat,
      payload:res.data
    }))
  }
  export const getChat =()=>(dispatch)=>{
    axios.get('/parent/chat')
    .then(res=>dispatch({
      type:Get_Chat,
      payload:res.data
    }))
  }
  export const updateChat =(id,chat)=>(dispatch)=>{
    axios.post(`/parent/chat/${id}`, chat)
    .then(res=>dispatch({
      type:Update_Chat,
      payload:res.data
    }))
  }
  export const deleteChat =(id)=>(dispatch)=>{
    axios.delete('/parent/chat/'+id)
    .then(res=>dispatch({
      type:Delete_Chat,
      payload:id
    }))
  }
  export const addChatPage = (chat) => (
    dispatch
  ) => {
    axios
    .post('/parent/chatpage', chat)
    .then(res =>
      dispatch({
        type:Add_Chat,
        payload:res.data
      }))
    }
    export const getChatPage =(id)=>(dispatch)=>{
      axios.get('/parent/chatpage/'+id)
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
      axios
      .post('/parent/result', result)
      .then(res =>
        dispatch({
          type:AddResult,
          payload:(res.data.error)?(''):(res.data),
          msg:(res.data.error)?(res.data.error):('')
        }))
      }
      export const getResult =(id)=>(dispatch)=>{
        axios.get('/parent/result/'+id)
        .then(res=>dispatch({
          type:GetResult,
          payload:res.data
        }))
      }
      export const deleteResult =(id)=>(dispatch)=>{
        axios.delete('/parent/result/'+id)
        .then(res=>dispatch({
          type:DeleteResult,
          payload:id
        }))
      }
      export const firstTerm =(id)=>dispatch=>{
        axios.get('/parent/1sttermresult/'+id)
        .then(res=>dispatch({
          type:FirstTerm,
          payload:res.data
        }))
      }
      export const secondTerm =(id)=>dispatch=>{
        axios.get('/parent/2ndtermresult/'+id)
        .then(res=>dispatch({
          type:SecondTerm,
          payload:res.data
        }))
      }
      export const thirdTerm =(id)=>dispatch=>{
        axios.get('/parent/3rdtermresult/'+id)
        .then(res=>dispatch({
          type:ThirdTerm,
          payload:res.data
        }))
      }
      export const getReceipt =(id)=>(dispatch)=>{
        axios.get('/parent/receipt/'+id)
        .then(res=>dispatch({
          type:GetReceipt,
          payload:res.data
        }))
      }
      export const getProducts =()=>(dispatch)=>{
        axios.get('/parent/products')
        .then(res=>dispatch({
          type:GetProducts,
          payload:res.data
        }))
      }




      export const productDetail = (id) => (dispatch) => {
        dispatch(setLoading());
        axios
        .get('/parent/product/'+id)
        .then(res =>
          dispatch({
            type: ProductDetail,
            payload:res.data
          }),
        )

      };
      export const cartList =()=>(dispatch)=>{
        axios.get('/parent/cart')
        .then(res=>dispatch({
          type:GetProducts,
          payload:res.data
        }))
      }




      export const getItem = (id) => (dispatch) => {
        dispatch(setLoading());
        axios
        .get('/parent/cart/'+id)
        .then(res =>
          dispatch({
            type: ProductDetail,
            payload:res.data
          }),
        )

      };
      export const addItem = (result) => (
        dispatch
      ) => {
        axios
        .post('/parent/cart', result)
        .then(res =>
          dispatch({
            type:AddItem,
            payload:res.data
          }))
        }

        export const deleteItem =(id)=>(dispatch)=>{
          axios.delete('/parent/cart/'+id)
          .then(res=>dispatch({
            type:DeleteItem,
            payload:id
          }))
        }
