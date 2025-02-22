import { CARS } from "../constants/cars";

export const fetchCarModels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CARS);
    }, 1000);
  });
};
