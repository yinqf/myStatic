let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance = 132735.96;
let today_profit =-154.01 ;
let profit_list_7 = 
    [
1824.26,
1965.34,
1876.54,
-1965.34,
1967.65,
-784.12,
154.01
    ]
let profit_list_30 = 
    [
    -1966.32,
1456.22,
1965.80,
-1659.69,
-236.12,
1876.44,
1876.34,
1965.49,
-1649.24,
1958.36,
1764.35,
424.44,
1946.52,
-179.65,
153.11,
2019.46,
1869.23,
1796.66,
-1946.56,
1869.48,
1978.47,
-2450.54,
459.99,
1824.26,
1965.34,
1876.54,
-1965.34,
1967.65,
-784.12,
154.01
    ]
let profit_list_90 = 
    [
754.11,
865.45,
758.12,
654.21,
1875.42,
2563.14,
3125.81,
2013.97,
1685.24,
112.21,
1786.15,
1687.56,
-1875.62,
1265.31,
-2563.12,
1756.45,
1865.24,
1635.14,
1546.32,
234.19,
2156.21,
-1987.62,
1876.48,
1789.63,
1986.32,
2156.32,
-1526.32,
-125.34,
1985.45,
1687.23,
1987.36,
-149.21,
648.19,
998.29,
15.42,
154.22,
1754.17,
1965.14,
-2156.48,
3658.15,
-4521.36,
-1123.14,
1956.32,
1982.32,
1689.76,
-1869.31,
1876.24,
1689.54,
1867.24,
289.64,
-1689.23,
286.76,
1987.65,
1935.23,
1964.24,
1859.34,
654.23,
338.36,
1888.69,
1876.23,
-1966.32,
1456.22,
1965.80,
-1659.69,
-236.12,
1876.44,
1876.34,
1965.49,
-1649.24,
1958.36,
1764.35,
424.44,
1946.52,
-179.65,
153.11,
2019.46,
1869.23,
1796.66,
-1946.56,
1869.48,
1978.47,
-2450.54,
459.99,
1824.26,
1965.34,
1876.54,
-1965.34,
1967.65,
-784.12,
154.01
    ]
let profit_list_365 = 
    [
   0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
500.23,
137.46,
365.14,
498.64,
55.12,
-568.33,
895.03,
756.89,
546.14,
523.76,
874.54,
548.17,
648.19,
998.21,
12.10,
56.43,
754.11,
865.45,
758.12,
654.21,
1875.42,
2563.14,
3125.81,
2013.97,
1685.24,
112.21,
1786.15,
1687.56,
-1875.62,
1265.31,
-2563.12,
1756.45,
1865.24,
1635.14,
1546.32,
234.19,
2156.21,
-1987.62,
1876.48,
1789.63,
1986.32,
2156.32,
-1526.32,
-125.34,
1985.45,
1687.23,
1987.36,
-149.21,
648.19,
998.29,
15.42,
154.22,
1754.17,
1965.14,
-2156.48,
3658.15,
-4521.36,
-1123.14,
1956.32,
1982.32,
1689.76,
-1869.31,
1876.24,
1689.54,
1867.24,
289.64,
-1689.23,
286.76,
1987.65,
1935.23,
1964.24,
1859.34,
654.23,
338.36,
1888.69,
1876.23,
-1966.32,
1456.22,
1965.80,
-1659.69,
-236.12,
1876.44,
1876.34,
1965.49,
-1649.24,
1958.36,
1764.35,
424.44,
1946.52,
-179.65,
153.11,
2019.46,
1869.23,
1796.66,
-1946.56,
1869.48,
1978.47,
-2450.54,
459.99,
1824.26,
1965.34,
1876.54,
-1965.34,
1967.65,
-784.12,
154.01
    ]
function callApi(url, onSuccess, onError) {
    $httpClient.get(url, (error, response, data) => {
        if (!error && response.statusCode === 200) {
            onSuccess(data);
        } else {
            onError(error);
        }
    });
}


callApi("https://doc.ccore.cc/cache/get?id="+headers['x-trace-id'],function (res) {
    try {
        let requestBody = JSON.parse(res)
        if (url.indexOf('futures/v1/private/future/user-daily-profit/getNewUserProfitStatistic') !== -1) {
            let beginTime = requestBody.beginTime;
            let endTime = requestBody.endTime;
            let business = requestBody.business;
            let diff = (endTime - beginTime) / 60 / 60 / 24 / 1000 + 1;

            let data = body.data;
            if (business === 'USDT_FUTURES') {
                if (data.userProfitRets.length === 1) {
                    // 总盈利
                    data.totalProfit = today_profit > 0 ? today_profit : 0;
                    // 总亏损
                    data.totalLoss = today_profit > 0 ? 0 : today_profit;
                    // 净盈利/亏损
                    data.netProfit = today_profit;
                    // 盈利天数
                    data.profitDays = today_profit > 0 ? 1 : 0;
                    // 亏损天数
                    data.lossDays = today_profit > 0 ? 0 : 1;
                    // 未产生盈利亏损天数
                    data.fairDays = today_profit === 0 ? 1 : 0;
                    // 盈利天数占比
                    data.winDaysRate = today_profit > 0 ? 1.0 : 0;
                    // 平均盈利
                    data.averageProfit = today_profit > 0 ? today_profit : 0;
                    // 平均亏损
                    data.averageLoss = today_profit > 0 ? 0 : today_profit;

                    data.userProfitRets.forEach(item => {
                        item.balance = curr_balance;
                        item.profit = today_profit;
                    })
                }
                let mock_data = null;
                if (diff === 7) {
                    mock_data = profit_list_7;
                }
                if (diff === 30) {
                    mock_data = profit_list_30;
                }
                if (diff === 90) {
                   mock_data = profit_list_90;
               }
                if (diff === 365) {
                  mock_data = profit_list_365;
               }
                if (mock_data != null) {
                    let profitNum = 0;
                    let fairNum = 0;
                    let totalProfit = 0;
                    let totalLoss = 0;
                    for(let i= data.userProfitRets.length-1; i>=0; i--){
                        if(i === data.userProfitRets.length-1) {
                            data.userProfitRets[i].balance = curr_balance;
                        }else {
                            data.userProfitRets[i].balance = data.userProfitRets[i+1].balance + mock_data[i]
                        }
                        data.userProfitRets[i].profit = mock_data[i];
                        if(data.userProfitRets[i].profit > 0) {
                            totalProfit += data.userProfitRets[i].profit
                            profitNum++;
                        }else if(data.userProfitRets[i].profit === 0) {
                            fairNum++;
                        }else {
                            totalLoss += data.userProfitRets[i].profit
                        }
                    }
                    data.profitDays = profitNum;
                    //亏损天数
                    data.lossDays = data.userProfitRets.length - profitNum - fairNum;
                    //持平天数
                    data.fairDays = fairNum;
                    //胜率
                    data.winDaysRate = (profitNum * 100 / data.userProfitRets.length).toFixed(2);
                    //总盈利
                    data.totalProfit = totalProfit;
                    //总亏损
                    data.totalLoss = totalLoss * -1;
                    //净盈利/亏损
                    data.netProfit = data.totalProfit - data.totalLoss;
                }
            }

            $done({body: JSON.stringify(body)})
        } else {
            $done({})
        }
    } catch (e) {
        let data = body.data;
        data = {};
        $done({body: JSON.stringify(body)})
    }
},function (err) {
    $done({})
})
