import { BUY_ICE_CREAM } from "./iceCreamActionTypes";

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
    info: "Buy Ice-Cream Action",
  };
};
