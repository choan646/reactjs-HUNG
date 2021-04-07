import {GET_COURSES} from '../constants/coursesConstant'
const initialState = {
  data: [],
};
function coursesReducer(state = initialState, action) {
  switch (action.type) {
      case GET_COURSES:{
          return { ...state, data: action.payload.data };
      }
    default:
      return state;
  }
}
export default coursesReducer;
