import { ADD_BREADMID } from "../constants/burgerConstant";

const bugerState = {
  buger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 10, cheese: 15, beef: 30 },
  total: 55,
};

export const BugerReducer = (state = bugerState, action) => {
  switch (action.type) {
    case ADD_BREADMID: {
        let {propsBuger, amount} = action;
      let bugerUpdate = { ...state.buger };
      bugerUpdate[propsBuger] += amount;
      state.buger = bugerUpdate;
      state.total += amount * state.menu[propsBuger];
      return { ...state };
    }
  }

  return { ...state };
};
