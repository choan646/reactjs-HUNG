import { UP_AMOUNT, DOWN_AMOUNT } from "../constants/burgerConstant";

const burgerState = {
  burger: [
    { id: 1, name: "salad", amount: 1, price: 10 },
    { id: 2, name: "cheese", amount: 1, price: 15 },
    { id: 3, name: "beef", amount: 1, price: 30 },
  ],
  total: 55,
};

function burgerRuducer(state = burgerState, action) {
  
  switch (action.type) {
    case UP_AMOUNT: {
      const { id } = action.payload;
      const burger = state.burger.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, burger };
    }
    case DOWN_AMOUNT: {
      const { id } = action.payload;
      const burger = state.burger.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return { ...state, burger };
    }
    default:
      return state;
  }
}
export default burgerRuducer;
