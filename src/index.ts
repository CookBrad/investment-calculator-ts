import get from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
import { POLYGON_BASE_URL } from './constants';
import { ChartResult } from './types';


async function main(): Promise<void> {
  const stockData = await getStockData("TSLA");
  console.log(stockData.meta.regularMarketPrice);

}

async function getStockData(symbol: string): Promise<ChartResult> {
  const period1 = new Date('2025-05-06T00:00:00Z').getTime() / 1000;
  const period2 = new Date('2025-05-07T23:59:59Z').getTime() / 1000;
  const interval = '1d';
  const params = {

    apiKey: process.env.POLYGON_API_KEY
  }
  const url: string = `${POLYGON_BASE_URL}${symbol}/range/1/day/2025-05-07/2025-05-07`;
  const response = await get(url, { params });
  console.log(JSON.stringify(response.data, null, 2))
  return response.data.chart.result[0];
}

main();