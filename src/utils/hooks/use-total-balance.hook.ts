import { MOVEMENTS_PROPS } from "../../config/interfaces/movements.interface";
import { usePrice } from "./use-price.hook";

const getTotalBalance = (data: MOVEMENTS_PROPS[]) => {
  return data.reduce((acc, curr) => acc + curr.value, 0);
};

export const useTotalBalance = (data: MOVEMENTS_PROPS[]) => {
  const total = usePrice({ price: getTotalBalance(data) });
  return total;
};
