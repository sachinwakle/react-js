import { BUY_CAKE } from "./cakeActionTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    info: "BUY_CAKE action",
    payload: number,
  };
};
