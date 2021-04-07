//reducer nhận vào 2 tham số (state của nó , action để thay đổi state của nó)
//action là 1 obj và có 1 property bắt buộc là type
//type là hành động để reducer biết được cần phải thay đổi state như thế nào
//Ex: action = {type: "TANG_BIEN_DEM"}
function countReducer(state = 0, action) {
    switch (action.type) {
      case "TANG_BIEN_DEM":
        return state + 1;
      case "GIAM_BIEN_DEM":
        return state - 1;
      default:
        return state;
    }
  }
  export default countReducer;