interface TradingPeriod {
    time: number;
    gmtoffset: number;
    timezone: string;
    session: string;
    sessionID: number;
}

interface CurrentTradingPeriod {
    pre: TradingPeriod;
    regular: TradingPeriod;
    post: TradingPeriod;
}

interface Meta {
    currency: string;
    symbol: string;
    exchangeName: string;
    instrumentType: string;
    firstTradeDate: number;
    regularMarketTime: number;
    gmtoffset: number;
    timezone: string;
    exchangeTimezoneName: string;
    regularMarketPrice: number;
    chartPreviousClose: number;
    priceHint: number;
    currentTradingPeriod: CurrentTradingPeriod;
    dataGranularity: string;
    range: string;
    validRanges: string[];
}

interface QuoteIndicator {
    open: number[];
    high: number[];
    low: number[];
    close: number[];
    volume: number[];
}

interface Indicators {
    quote: QuoteIndicator[];
}

interface Events {
    dividends: any[];
    splits: any[];
}

export interface ChartResult {
    meta: Meta;
    timestamp: number[];
    indicators: Indicators;
    events: Events;
}

interface Chart {
    result: ChartResult[];
    error: null | any;
}

export interface ChartResponse {
    chart: Chart;
}