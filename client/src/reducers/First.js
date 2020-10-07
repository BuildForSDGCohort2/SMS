import {
  Loading,
  GetResult,
} from '../actions/parentTypes'

const initialState = {
  result:[],
  loading:false,
  msg:''
}

export default function(state= initialState, action) {
  switch (action.type) {

    case GetResult:
    return {
      ...state,
      result: action.payload,
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
