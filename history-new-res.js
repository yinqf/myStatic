let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance =152681.41;
let today_profit =1432.12;
let profit_list_7 = 
    [
1978.88,
2066.69,
1567.54,
1798.39,
1685.49,
-3214.14,
1432.12
    ]
let profit_list_30 = 
    [
   1796.66,
-3125.21,
1869.48,
1978.47,
2143.63,
1978.16,
1824.26,
1965.34,
1876.54,
1987.64,
1967.65,
2465.78,
2016.34,
1875.26,
1982.32,
1463.23,
-6459.32,
-1254.14,
-1863.33,
2098.41,
-1978.61,
1859.17,
-2058.79,
1978.88,
2066.69,
1567.54,
1798.39,
1685.49,
-3214.14,
1432.12
    ]
let profit_list_90 = 
    [
1635.14,
1546.32,
2196.77,
2156.21,
-3486.14,
1876.48,
1789.63,
1986.32,
2156.32,
-4865.14,
-3896.44,
1985.45,
1687.23,
1987.36,
1879.65,
2063.14,
998.29,
15.42,
154.22,
1754.17,
1965.14,
-2756.48,
3658.15,
-4521.36,
2089.11,
1956.32,
1982.32,
1689.76,
-3781.02,
1876.24,
1689.54,
1867.24,
289.64,
-3165.77,
286.76,
1987.65,
1935.23,
1964.24,
1859.34,
654.23,
2016.34,
1888.69,
1876.23,
2563.14,
1456.22,
1965.80,
-3693.21,
1986.14,
1876.44,
1876.34,
1965.49,
-3689.23,
1958.36,
1764.35,
424.44,
1946.52,
-8765.35,
-2458.69,
2019.46,
1869.23,
1796.66,
-3125.21,
1869.48,
1978.47,
2143.63,
1978.16,
1824.26,
1965.34,
1876.54,
1987.64,
1967.65,
2465.78,
2016.34,
1875.26,
1982.32,
1463.23,
-6459.32,
-1254.14,
-1863.33,
2098.41,
-1978.61,
1859.17,
-2058.79,
1978.88,
2066.69,
1567.54,
1798.39,
1685.49,
-3214.14,
1432.12
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
500.23,
137.46,
365.14,
498.64,
55.12,
-2132.14,
895.03,
756.89,
546.14,
-1903.07,
874.54,
796.32,
976.14,
998.21,
1098.11,
1875.14,
1796.32,
2014.39,
1768.47,
1687.14,
1875.42,
2563.14,
-3165.47,
2013.97,
1685.24,
1999.07,
1786.15,
1687.56,
-4201.26,
1963.36,
-3645.13,
1756.45,
1865.24,
1635.14,
1546.32,
2196.77,
2156.21,
-3486.14,
1876.48,
1789.63,
1986.32,
2156.32,
-4865.14,
-3896.44,
1985.45,
1687.23,
1987.36,
1879.65,
2063.14,
998.29,
15.42,
154.22,
1754.17,
1965.14,
-2756.48,
3658.15,
-4521.36,
2089.11,
1956.32,
1982.32,
1689.76,
-3781.02,
1876.24,
1689.54,
1867.24,
289.64,
-3165.77,
286.76,
1987.65,
1935.23,
1964.24,
1859.34,
654.23,
2016.34,
1888.69,
1876.23,
2563.14,
1456.22,
1965.80,
-3693.21,
1986.14,
1876.44,
1876.34,
1965.49,
-3689.23,
1958.36,
1764.35,
424.44,
1946.52,
-8765.35,
-2458.69,
2019.46,
1869.23,
1796.66,
-3125.21,
1869.48,
1978.47,
2143.63,
1978.16,
1824.26,
1965.34,
1876.54,
1987.64,
1967.65,
2465.78,
2016.34,
1875.26,
1982.32,
1463.23,
-6459.32,
-1254.14,
-1863.33,
2098.41,
-1978.61,
1859.17,
-2058.79,
1978.88,
2066.69,
1567.54,
1798.39,
1685.49,
-3214.14,
1432.12
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
