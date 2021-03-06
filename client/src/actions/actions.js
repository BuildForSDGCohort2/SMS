import {
  Add_Student,
  Delete_Student,
  Preview_Students,
  Get_Teachers,
  Add_Teacher,
  Delete_Teacher,
  Teacher_Detail,
  Preview_Teachers,
  Update_Student,
  Update_Teacher,
  Add_News,
  Update_News,
  Delete_News,
  News_Detail,
  Add_Bill,
  Get_Bill,
  Update_Bill,
  Delete_Bill,
  Add_StudentBill,
  UpdateStudentBill,
  PaidStudent,
  DeleteStudentBill,
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
  Muslims,
  Christians,
  Add_ChatPage,
  Get_ChatPage,
  GetResult,
  AddResult,
  GetResults,
  GetTotal,
  FirstTerm,
  SecondTerm,
  ThirdTerm,
  DeleteResult,
  GetReceipt,
  GetProducts,
  ProductDetail,
  DeleteItem,
  AddItem
} from './types'
import axios from 'axios'
export const getTeachers = () => (dispatch) => {
    dispatch(setLoading());
    axios
      .get('/owner/teachers')
        .then(res =>
          dispatch({
            type: Get_Teachers,
            payload: res.data
          }),
        )

  };
  export const teacher_left = () => (dispatch) => {
      dispatch(setLoading());
      axios
        .get('/owner/teacher_left')
          .then(res =>
            dispatch({
              type: Get_Teachers,
              payload: res.data
            }),
          )

    };
    export const getMuslims = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/muslims')
  .then(res =>
    dispatch({
      type: Muslims,
      payload: res.data
    }),
  )

};
export const getChristians = () => (dispatch) => {
  dispatch(setLoading());
  axios
  .get('/christians')
  .then(res =>
    dispatch({
      type: Christians,
      payload: res.data
    }),
  )

}
export const previewTeachers = () => (dispatch) => {
    dispatch(setLoading());
    axios
      .get('/owner/teachers')
        .then(res =>
          dispatch({
            type: Preview_Teachers,
            payload: res.data.slice(0,10)
          }),
        )

  };
export const teacherDetail = (id) => (dispatch) => {
    dispatch(setLoading());
    axios
      .get('/owner/teacher/'+id)
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
  export const addTeacher = (teacher) => (
    dispatch
  ) => {
    axios
      .post('/owner/teacher', teacher)
      .then(res =>
        dispatch({
          type: Add_Teacher,
          payload: res.data,
          msg:res.data.msg,
          error:res.data.error
        })
      )

  };
  export const updateTeacher = (id,teacher) => (
    dispatch
  ) => {
    axios
      .post(`/owner/updateteacher/${id}`, teacher)
      .then(res =>
        dispatch({
          type: Update_Teacher,
          payload: res.data,
          msg:res.data.msg
        })
      )

  };

  export const deleteTeacher = (id) => (
    dispatch
  ) => {
    axios
      .post(`/owner/teacher/${id}`)
      .then(res =>
        dispatch({
          type: Delete_Teacher,
          payload: id
        })
      )

  };
  export const getStudents = () => (dispatch) => {
      dispatch(setLoading());
      axios
        .get('/owner/students')
          .then(res =>
            dispatch({
              type: Get_Students,
              payload: res.data
            }),
          )

    };
    export const student_left = () => (dispatch) => {
        dispatch(setLoading());
        axios
          .get('/owner/student_left')
            .then(res =>
              dispatch({
                type: Get_Students,
                payload: res.data
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
  export const previewStudents = () => (dispatch) => {
      dispatch(setLoading());
      axios
        .get('/owner/students')
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
        .get('/owner/student/'+id)
          .then(res =>
            dispatch({
              type: Student_Detail,
              payload:res.data
            }),
          )

    };

    export const addStudent = (student) => (
      dispatch
    ) => {
      axios
        .post('/owner/student', student)
        .then(res =>
          dispatch({
            type: Add_Student,
            payload: res.data,
            msg:res.data.msg
          })
        )

    };

    export const updateStudent = (id,student) => (
      dispatch
    ) => {
      axios
        .post(`/owner/updatestudent/${id}`, student)
        .then(res =>
          dispatch({
            type: Update_Student,
            payload: res.data,
            msg:res.data.msg
          })
        )

    };
    export const deleteStudent = (id) => (
      dispatch
    ) => {
      axios
        .post(`/owner/student/${id}`)
        .then(res =>
          dispatch({
            type: Delete_Student,
            payload: id
          })
        )

    }
    export const addNews = (news) => (
      dispatch
    ) => {
      axios
        .post('/owner/news', news)
        .then(res =>
          dispatch({
            type:Add_News,
            payload:res.data,
            msg:res.data.msg
          }))
    }
    export const getNews =()=>(dispatch)=>{
      axios.get('/owner/news')
        .then(res=>dispatch({
          type:Get_News,
          payload:res.data
        }))
    }
    export const updateNews =(id,news)=>(dispatch)=>{
      axios.post(`/owner/news/${id}`, news)
        .then(res=>dispatch({
          type:Update_News,
          payload:res.data
        }))
    }
    export const deleteNews =(id)=>(dispatch)=>{
      axios.delete('/owner/news/'+id)
        .then(res=>dispatch({
          type:Delete_News,
          payload:id
        }))
    }
    export const newsDetail = (id) => (dispatch) => {
        dispatch(setLoading());
        axios
          .get('/owner/news/'+id)
            .then(res =>
              dispatch({
                type: News_Detail,
                payload:res.data
              }),
            )

      };
      export const addBill = (bill) => (
        dispatch
      ) => {
        axios
          .post('/owner/bill', bill)
          .then(res =>
            dispatch({
              type:Add_Bill,
              payload:(res.data.msg)?(res.data.bill):(res.data.nothing),
              msg:res.data.msg,
              error:res.data.error
            }))
      }
      export const getBill =()=>(dispatch)=>{
        axios.get('/owner/bill')
          .then(res=>dispatch({
            type:Get_Bill,
            payload:res.data
          }))
      }
      export const updateBill =(id,bill)=>(dispatch)=>{
        axios.post(`/owner/bill/${id}`, bill)
          .then(res=>dispatch({
            type:Update_Bill,
            payload:res.data
          }))
      }
      export const deleteBill =(id)=>(dispatch)=>{
        axios.delete('/owner/bill/'+id)
          .then(res=>dispatch({
            type:Delete_Bill,
            payload:id
          }))
      }
      export const billDetail = (id) => (dispatch) => {
          dispatch(setLoading());
          axios
            .get('/owner/bill/'+id)
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
              .get('/owner/classbill/'+clas)
                .then(res =>
                  dispatch({
                    type: Get_ClassBill,
                    payload:res.data
                  }),
                )

          };
          export const addStudentBill = (studentBill) => (
            dispatch
          ) => {
            axios
              .post('/owner/studentbill', studentBill)
              .then(res =>
                dispatch({
                  type:Add_StudentBill,
                  payload:res.data
                }))
          }
          export const getPaidStudent =()=>(dispatch)=>{
            axios.get('/owner/paid')
              .then(res=>dispatch({
                type:PaidStudent,
                payload:res.data
              }))
          }
          export const getStudentBill =()=>(dispatch)=>{
            axios.get('/owner/studentbill')
              .then(res=>dispatch({
                type:Get_StudentBill,
                payload:res.data
              }))
          }
          export const studentBillDetail = (id) => (dispatch) => {
              dispatch(setLoading());
              axios
                .get('/owner/studentbill/'+id)
                  .then(res =>
                    dispatch({
                      type: StudentBillDetail,
                      payload:res.data
                    }),
                  )

            };
            export const updateStudentBill = (id,studentBill) => (
              dispatch
            ) => {
              axios
                .post(`/owner/studentbill/${id}`, studentBill)
                .then(res =>
                  dispatch({
                    type: UpdateStudentBill,
                    payload: res.data
                  })
                )

            };
            export const deleteStudentBill =(id)=>(dispatch)=>{
              axios.post('/owner/deletebill/'+id)
                .then(res=>dispatch({
                  type:DeleteStudentBill,
                  payload:id
                }))
            }
            export const addChat = (chat) => (
              dispatch
            ) => {
              axios
                .post('/owner/chat', chat)
                .then(res =>
                  dispatch({
                    type:Add_Chat,
                    payload:res.data
                  }))
            }
            export const getChat =()=>(dispatch)=>{
              axios.get('/owner/chat')
                .then(res=>dispatch({
                  type:Get_Chat,
                  payload:res.data
                }))
            }
            export const updateChat =(id,chat)=>(dispatch)=>{
              axios.post(`/owner/chat/${id}`, chat)
                .then(res=>dispatch({
                  type:Update_Chat,
                  payload:res.data
                }))
            }
            export const deleteChat =(id)=>(dispatch)=>{
              axios.delete('/owner/chat/'+id)
                .then(res=>dispatch({
                  type:Delete_Chat,
                  payload:id
                }))
            }
            export const getReceipt =(id)=>(dispatch)=>{
              axios.get('/owner/receipt/'+id)
                .then(res=>dispatch({
                  type:GetReceipt,
                  payload:res.data
                }))
            }
            export const firstTerm =(id)=>dispatch=>{
        axios.get('/1sttermresult/'+id)
        .then(res=>dispatch({
          type:FirstTerm,
          payload:res.data
        }))
      }
      export const secondTerm =(id)=>dispatch=>{
        axios.get('/2ndtermresult/'+id)
        .then(res=>dispatch({
          type:SecondTerm,
          payload:res.data
        }))
      }
      export const thirdTerm =(id)=>dispatch=>{
        axios.get('/3rdtermresult/'+id)
        .then(res=>dispatch({
          type:ThirdTerm,
          payload:res.data
        }))
      }
  export const setLoading = () => {
    return {
      type: Loading
    };
  };
  export const getProducts =()=>(dispatch)=>{
          axios.get('/products')
          .then(res=>dispatch({
            type:GetProducts,
            payload:res.data
          }))
        }




        export const productDetail = (id) => (dispatch) => {
          dispatch(setLoading());
          axios
          .get('/product/'+id)
          .then(res =>
            dispatch({
              type: ProductDetail,
              payload:res.data
            }),
          )

        };
        export const cartList =()=>(dispatch)=>{
          axios.get('/cart')
          .then(res=>dispatch({
            type:GetProducts,
            payload:res.data
          }))
        }




        export const getItem = (id) => (dispatch) => {
          dispatch(setLoading());
          axios
          .get('/cart/'+id)
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
          .post('/cart', result)
          .then(res =>
            dispatch({
              type:AddItem,
              payload:res.data
            }))
          }

          export const deleteItem =(id)=>(dispatch)=>{
            axios.delete('/cart/'+id)
            .then(res=>dispatch({
              type:DeleteItem,
              payload:id
            }))
          }
          export const addChatPage = (chat) => (
              dispatch
            ) => {
              axios
              .post('/chatpage', chat)
              .then(res =>
                dispatch({
                  type:Add_Chat,
                  payload:res.data
                }))
              }
              export const getChatPage =(id)=>(dispatch)=>{
                axios.get('/chatpage/'+id)
                .then(res=>dispatch({
                  type:Get_Chat,
                  payload:res.data
                }))
              }
              export const addResult = (result) => (
                    dispatch
                  ) => {
                    axios
                    .post('/result', result)
                    .then(res =>
                      dispatch({
                        type:AddResult,
                        payload:(res.data.error)?(''):(res.data),
                        msg:(res.data.error)?(res.data.error):('')
                      }))
                    }
                    export const getResult =(id)=>(dispatch)=>{
                      axios.get('/result/'+id)
                      .then(res=>dispatch({
                        type:GetResult,
                        payload:res.data
                      }))
                    }
                    export const deleteResult =(id)=>(dispatch)=>{
                      axios.delete('/result/'+id)
                      .then(res=>dispatch({
                        type:DeleteResult,
                        payload:id
                      }))
                    }
                    export const teacherDetail = (id) => (dispatch) => {
                      dispatch(setLoading());
                      axios
                      .get('/teacher/'+id)
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
                      .post(`/updateteacher/${id}`, teacher)
                      .then(res =>
                        dispatch({
                          type: Update_Teacher,
                          payload: res.data,
                          msg:res.data.msg
                        })
                      )

                    };
                    export const getMuslims = () => (dispatch) => {
                      dispatch(setLoading());
                      axios
                      .get('/muslims')
                      .then(res =>
                        dispatch({
                          type: Muslims,
                          payload: res.data
                        }),
                      )

                    };
                    export const getChristians = () => (dispatch) => {
                      dispatch(setLoading());
                      axios
                      .get('/christians')
                      .then(res =>
                        dispatch({
                          type: Christians,
                          payload: res.data
                        }),
                      )

                    };
                    export const previewStudents = () => (dispatch) => {
                      dispatch(setLoading());
                      axios
                      .get('/students')
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
                      .get('/student/'+id)
                      .then(res =>
                        dispatch({
                          type: Student_Detail,
                          payload:res.data
                        }),
                      )

                    };




                    export const getNews =()=>(dispatch)=>{
                      axios.get('/news')
                      .then(res=>dispatch({
                        type:Get_News,
                        payload:res.data
                      }))
                    }




                    export const billDetail = (id) => (dispatch) => {
                      dispatch(setLoading());
                      axios
                      .get('/bill/'+id)
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
                      .get('/classbill/'+clas)
                      .then(res =>
                        dispatch({
                          type: Get_ClassBill,
                          payload:res.data
                        }),
                      )

                    };

                    export const getPaidStudent =()=>(dispatch)=>{
                      axios.get('/paid')
                      .then(res=>dispatch({
                        type:PaidStudent,
                        payload:res.data
                      }))
                    }
                    export const getStudentBill =()=>(dispatch)=>{
                      axios.get('/studentbill')
                      .then(res=>dispatch({
                        type:Get_StudentBill,
                        payload:res.data
                      }))
                    }
                    export const studentBillDetail = (id) => (dispatch) => {
                      dispatch(setLoading());
                      axios
                      .get('/studentbill/'+id)
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
                      .post('/chat', chat)
                      .then(res =>
                        dispatch({
                          type:Add_Chat,
                          payload:res.data
                        }))
                      }
                      export const getChat =()=>(dispatch)=>{
                        axios.get('/chat')
                        .then(res=>dispatch({
                          type:Get_Chat,
                          payload:res.data
                        }))
                      }
                      export const updateChat =(id,chat)=>(dispatch)=>{
                        axios.post(`/chat/${id}`, chat)
                        .then(res=>dispatch({
                          type:Update_Chat,
                          payload:res.data
                        }))
                      }
                      export const deleteChat =(id)=>(dispatch)=>{
                        axios.delete('/chat/'+id)
                        .then(res=>dispatch({
                          type:Delete_Chat,
                          payload:id
                        }))
                      }
                      export const addChatPage = (chat) => (
                        dispatch
                      ) => {
                        axios
                        .post('/chatpage', chat)
                        .then(res =>
                          dispatch({
                            type:Add_ChatPage,
                            payload:res.data
                          }))
                        }
                        export const getChatPage =(id)=>(dispatch)=>{
                          axios.get('/chatpage/'+id)
                          .then(res=>dispatch({
                            type:Get_ChatPage,
                            payload:res.data
                          }))
                        }
                        export const addResult = (result) => (
                          dispatch
                        ) => {
                          axios
                          .post('/result', result)
                          .then(res =>
                            dispatch({
                              type:AddResult,
                              payload:(res.data.error)?(''):(res.data),
                              msg:(res.data.error)?(res.data.error):('')
                            }))
                          }
                          export const getResult =(id)=>(dispatch)=>{
                            axios.get('/result/'+id)
                            .then(res=>dispatch({
                              type:GetResult,
                              payload:res.data
                            }))
                          }
                          export const deleteResult =(id)=>(dispatch)=>{
                            axios.delete('/result/'+id)
                            .then(res=>dispatch({
                              type:DeleteResult,
                              payload:id
                            }))
                          }
                          export const firstTerm =(id)=>dispatch=>{
                            axios.get('/1sttermresult/'+id)
                            .then(res=>dispatch({
                              type:FirstTerm,
                              payload:res.data
                            }))
                          }
                          export const secondTerm =(id)=>dispatch=>{
                            axios.get('/2ndtermresult/'+id)
                            .then(res=>dispatch({
                              type:SecondTerm,
                              payload:res.data
                            }))
                          }
                          export const thirdTerm =(id)=>dispatch=>{
                            axios.get('/3rdtermresult/'+id)
                            .then(res=>dispatch({
                              type:ThirdTerm,
                              payload:res.data
                            }))
                          }
                          export const teacherDetail = (id) => (dispatch) => {
                            dispatch(setLoading());
                            axios
                            .get('/teacher/'+id)
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
                            .get('/teacher_info/'+clas)
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
                            .post(`/updateteacher/${id}`, teacher)
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
                            .get('/student/'+id)
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
                            .get('/signup/'+id)
                            .then(res =>
                              dispatch({
                                type: Student_Detail,
                                payload:res.data
                              }),
                            )

                          };


                          export const getNews =()=>(dispatch)=>{
                            axios.get('/news')
                            .then(res=>dispatch({
                              type:Get_News,
                              payload:res.data
                            }))
                          }




                          export const billDetail = (id) => (dispatch) => {
                            dispatch(setLoading());
                            axios
                            .get('/bill/'+id)
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
                            .get('/classbill/'+clas)
                            .then(res =>
                              dispatch({
                                type: Get_ClassBill,
                                payload:res.data
                              }),
                            )

                          };

                          export const getPaidStudent =()=>(dispatch)=>{
                            axios.get('/paid')
                            .then(res=>dispatch({
                              type:PaidStudent,
                              payload:res.data
                            }))
                          }
                          export const getStudentBill =()=>(dispatch)=>{
                            axios.get('/studentbill')
                            .then(res=>dispatch({
                              type:Get_StudentBill,
                              payload:res.data
                            }))
                          }
                          export const studentBillDetail = (id) => (dispatch) => {
                            dispatch(setLoading());
                            axios
                            .get('/studentbill/'+id)
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
                            .post('/chat', chat)
                            .then(res =>
                              dispatch({
                                type:Add_Chat,
                                payload:res.data
                              }))
                            }
                            export const getChat =()=>(dispatch)=>{
                              axios.get('/chat')
                              .then(res=>dispatch({
                                type:Get_Chat,
                                payload:res.data
                              }))
                            }
                            export const updateChat =(id,chat)=>(dispatch)=>{
                              axios.post(`/chat/${id}`, chat)
                              .then(res=>dispatch({
                                type:Update_Chat,
                                payload:res.data
                              }))
                            }
                            export const deleteChat =(id)=>(dispatch)=>{
                              axios.delete('/chat/'+id)
                              .then(res=>dispatch({
                                type:Delete_Chat,
                                payload:id
                              }))
                            }
                            export const addChatPage = (chat) => (
                              dispatch
                            ) => {
                              axios
                              .post('/chatpage', chat)
                              .then(res =>
                                dispatch({
                                  type:Add_ChatPage,
                                  payload:res.data
                                }))
                              }
                              export const getChatPage =(id)=>(dispatch)=>{
                                axios.get('/chatpage/'+id)
                                .then(res=>dispatch({
                                  type:Get_ChatPage,
                                  payload:res.data
                                }))
                              }
                              export const addResult = (result) => (
                                dispatch
                              ) => {
                                axios
                                .post('/result', result)
                                .then(res =>
                                  dispatch({
                                    type:AddResult,
                                    payload:(res.data.error)?(''):(res.data),
                                    msg:(res.data.error)?(res.data.error):('')
                                  }))
                                }
                                export const getResult =(id)=>(dispatch)=>{
                                  axios.get('/result/'+id)
                                  .then(res=>dispatch({
                                    type:GetResult,
                                    payload:res.data
                                  }))
                                }
                                export const deleteResult =(id)=>(dispatch)=>{
                                  axios.delete('/result/'+id)
                                  .then(res=>dispatch({
                                    type:DeleteResult,
                                    payload:id
                                  }))
                                }
                                export const firstTerm =(id)=>dispatch=>{
                                  axios.get('/1sttermresult/'+id)
                                  .then(res=>dispatch({
                                    type:FirstTerm,
                                    payload:res.data
                                  }))
                                }
                                export const secondTerm =(id)=>dispatch=>{
                                  axios.get('/2ndtermresult/'+id)
                                  .then(res=>dispatch({
                                    type:SecondTerm,
                                    payload:res.data
                                  }))
                                }
                                export const thirdTerm =(id)=>dispatch=>{
                                  axios.get('/3rdtermresult/'+id)
                                  .then(res=>dispatch({
                                    type:ThirdTerm,
                                    payload:res.data
                                  }))
                                }
                                export const getReceipt =(id)=>(dispatch)=>{
                                  axios.get('/receipt/'+id)
                                  .then(res=>dispatch({
                                    type:GetReceipt,
                                    payload:res.data
                                  }))
                                }
                                export const getProducts =()=>(dispatch)=>{
                                  axios.get('/products')
                                  .then(res=>dispatch({
                                    type:GetProducts,
                                    payload:res.data
                                  }))
                                }




                                export const productDetail = (id) => (dispatch) => {
                                  dispatch(setLoading());
                                  axios
                                  .get('/product/'+id)
                                  .then(res =>
                                    dispatch({
                                      type: ProductDetail,
                                      payload:res.data
                                    }),
                                  )

                                };
                                export const cartList =()=>(dispatch)=>{
                                  axios.get('/cart')
                                  .then(res=>dispatch({
                                    type:GetProducts,
                                    payload:res.data
                                  }))
                                }




                                export const getItem = (id) => (dispatch) => {
                                  dispatch(setLoading());
                                  axios
                                  .get('/cart/'+id)
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
                                  .post('/cart', result)
                                  .then(res =>
                                    dispatch({
                                      type:AddItem,
                                      payload:res.data
                                    }))
                                  }

                                  export const deleteItem =(id)=>(dispatch)=>{
                                    axios.delete('/cart/'+id)
                                    .then(res=>dispatch({
                                      type:DeleteItem,
                                      payload:id
                                    }))
                                  }
