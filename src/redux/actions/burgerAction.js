import { UP_AMOUNT, DOWN_AMOUNT} from "../constants/burgerConstant";

export const upAmount = (id) => {
  return {
    type: UP_AMOUNT,
    payload: {
      id,
    },
  };
};

export const downAmount = (id) => {
  return {
    type: DOWN_AMOUNT,
    payload: {
      id,
    },
  };
};
