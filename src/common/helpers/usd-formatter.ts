export const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(usdFormatter.format(2500)); /* $2,500.00 */
