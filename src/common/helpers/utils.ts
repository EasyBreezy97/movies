import { round } from "lodash";

export const roundOnTwoDigits = (item: number) =>
  Number(round(item, 1).toFixed(2));
