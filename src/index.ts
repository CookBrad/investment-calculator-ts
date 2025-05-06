import get from 'axios';
import { BASE_URL } from './constants';
import { ChartResult } from './types';


async function main(): Promise<void> {
  const stockData = await getStockData("TSLA");
  console.log(stockData.meta.regularMarketPrice);

}

async function getStockData(symbol: string): Promise<ChartResult> {
  const url: string = `${BASE_URL}${symbol}`;
  const response = await get(url);
  return response.data.chart.result[0];
}

main();