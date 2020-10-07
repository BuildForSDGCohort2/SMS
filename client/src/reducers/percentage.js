import {
  Loading,
  GetPercentage,
  UpdatePercentage
} from '../actions/teacherTypes'

const initialState = {
  percentage:'',
  loading:false,
  msg:''
}

export default function(state= initialState, action) {
  switch (action.type) {
    case GetPercentage:
    return {
      ...state,
      percentage: action.payload,
      loading: false
    };
    case UpdatePercentage:
    return {
      ...state,
      percentage: action.payload,
      loading: false
    };


    case Loading:
    return {
      ...state,
      loading: true
    };
    default:
    return state;
  }
}
