import {ADD_TODO, FILTER_TODO,DELETE_TODO,CHANGE_STATUS} from "../constants/todosConstants"

//Obj chua cac state mac dinh cua reducer
const initialState = {
  data: [
    { id: 1, name: "Play game", isComplete: false },
    { id: 2, name: "Do home work", isComplete: false },
  ],
  filter:"all",
  isLoading: false,
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO: {
      const { id } = action.payload; // lay ra id can xoa

      //Cach 1:
      // const data = [...state.data]//clone array data
      // const index = data.findIndex((item) => item.id === id);
      // data.slice(index, 1)
      // return {...state.data};//Clone obj state

      //Cach 2
      const data = state.data.filter((item) => item.id !== id);
      //Return ve 1 array moi
      return { ...state, data }; //clone obj state
    }
    case CHANGE_STATUS: {
      const { id } = action.payload; // lay ra id can xoa
      const data = state.data.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      });
      return { ...state, data };
    }
    case ADD_TODO: {
      const id  = Math.floor(Math.random() * 100);
      const todo = { name: action.payload.todo, isComplete: false, id };
      const data = [...state.data, todo];
      return { ...state, data };
    }
    case FILTER_TODO: {
      const {status} = action.payload;
      return { ...state, filter : status };
    }
    default:
      return state;
  }
}
export default todosReducer;
