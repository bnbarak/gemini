const emptyChart = { xAxis: [], yAxis: [] };

const getUserAddress = transactions => transactions[0].toAddress;

export default (transactions) => {
  if (!transactions || transactions.length === 0) return emptyChart;

  const xAxis = [];
  const yAxis = [];
  let balance = 0;
  const accountAddress = getUserAddress(transactions);

  transactions.forEach((tx) => {
    const { timestamp, amount, toAddress } = tx;
    if (timestamp && amount) {
      const amountAsNumber = parseFloat(amount);
      if (toAddress === accountAddress) {
        balance += amountAsNumber;
      } else {
        balance -= amountAsNumber;
      }

      xAxis.push(timestamp);
      yAxis.push(balance);
    }
  });

  return { xAxis, yAxis };
};
