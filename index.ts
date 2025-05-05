import get from 'axios';


async function main() {
  getStockData("TSLA");

}

async function getStockData(symbol: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
  const response = await get(url);
  console.log(response.data.chart.result[0].meta.regularMarketPrice);
}

main();