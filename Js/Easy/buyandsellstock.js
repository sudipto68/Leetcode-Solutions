var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    buyPrice = Math.min(prices[i], buyPrice);
    profit = Math.max(profit, prices[i] - buyPrice);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
