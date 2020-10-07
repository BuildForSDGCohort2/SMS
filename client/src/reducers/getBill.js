import {Get_Bill,
Add_Bill,
Delete_Bill,
Loading,
Update_Bill
} from '../actions/parentTypes'

const initialState = {
    bill:[],
    loading:false,
    msg:'',
    error:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case Get_Bill:
        return {
          ...state,
          bill: action.payload,
          loading: false
        };

      case Delete_Bill:
        return {
          ...state,
          bill: state.bill.filter(bill => bill._id !== action.payload),
          msg: action.msg
        };
      case Add_Bill:
        return {
          ...state,
          bill: [action.payload, ...state.bill],
          msg: action.msg,
          error:action.error
        };
      case Update_Bill:
        return{
          ...state,
          bill:[...action.payload],
          msg:action.msg
        }
      case Loading:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
