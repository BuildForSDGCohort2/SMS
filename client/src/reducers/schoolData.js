import {
  SchoolData,
  Loading
} from '../actions/ownerTypes'

const initialState = {
    school:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {
      case SchoolData:
        return {
          ...state,
          school: action.payload,
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
