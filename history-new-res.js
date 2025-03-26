let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance =126914.74;
let today_profit =1.55;
let profit_list_7 = 
    [
-393.79,
12079.16,
1.32,
18928.86,
-1971.94,
-844.69,
1.55
    ]
let profit_list_30 = 
    [
0.18,
6577.15,
-1901.38,
0.99,
-270.54,
-334.67,
-537.07,
2549.51,
-1032.06,
-136.27,
-931.86,
-0.91,
-487.97,
9589.18,
-1365.73,
-978.96,
-1430.86,
-1257.51,
-222.44,
-83.17,
816.63,
-894.79,
-1971.94,
-393.79,
12079.16,
1.32,
18928.86,
-1971.94,
-844.69,
1.55
    ]
let profit_list_90 = 
    [
824.65,
5055.11,
1350.27,
2119.24,
-745.49,
-683.37,
64.13,
2.01,
941.88,
-374.75,
-933.87,
-1.02,
1468.94,
80.16,
214.43,
0.23,
-0.89,
15.03,
18972.85,
-962.92,
-473.95,
-1168.34,
-1089.18,
-936.87,
-324.65,
-2376.75,
75.15,
-55.11,
-668.34,
-1419.84,
1476.95,
466.93,
523.05,
1.36,
118.24,
-1539.08,
364.73,
-1759.52,
1157.31,
-574.15,
-1027.05,
-1431.86,
-1216.43,
-1835.67,
8075.15,
35.07,
16.03,
-1990.98,
-909.82,
2.66,
-1.99,
-0.87,
1477.95,
31.06,
-0.68,
-2008.02,
5986.97,
1518.04,
-654.31,
708.42,
0.18,
6577.15,
-1901.38,
0.99,
-270.54,
-334.67,
-537.07,
2549.51,
-1032.06,
-136.27,
-931.86,
-0.91,
-487.97,
9589.18,
-1365.73,
-978.96,
-1430.86,
-1257.51,
-222.44,
-83.17,
816.63,
-894.79,
-1971.94,
-393.79,
12079.16,
1.32,
18928.86,
-1971.94,
-844.69,
1.55
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
50.01,
-1646.29,
-282.56,
182.36,
-894.79,
-688.38,
1019.04,
-822.64,
-1011.02,
486.97,
237.47,
1693.39,
-67.13,
264.53,
481.96,
-605.21,
260.52,
5.01,
-1.23
-784.57
197.39,
1336.36
5567.13
2975.95
782.56
-121.24
756.51
6404.81
-10.02
194.39
705.41
2959.92,
0.79
723.45
-2203.41,
0.82,
693.39,
-262.52
-814.63
-755.51
0.65
-4.01
-8.02
726.45
-1378.76,
2880.76
-748.51
-705.41,
3688.38
3502.71,
331.66
2578.16
1808.62
7.01
5058.12
661.32
1209.42
3448.69
-1643.29
-1529.06
-376.75
-970.94,
-1204.41,
-3524.05,
722.44,
-72.14,
-2753.51,
505.01,
1490.98,
-1658.32,
-788.58,
-1434.87,
-1672.34,
-2645.29,
-2056.11,
-371.74,
-2837.67,
9.02,
496.99,
-3085.17,
-2468.94,
-1924.85,
718.44,
-122.22,
3609.22,
33.07,
1239.48,
-59.12,
990.98,
-2164.33,
2242.48,
-75.15,
-1248.05,
1876.75,
176.35,
824.65,
5055.11,
1350.27,
2119.24,
-745.49,
-683.37,
64.13,
2.01,
941.88,
-374.75,
-933.87,
-1.02,
1468.94,
80.16,
214.43,
0.23,
-0.89,
15.03,
18972.85,
-962.92,
-473.95,
-1168.34,
-1089.18,
-936.87,
-324.65,
-2376.75,
75.15,
-55.11,
-668.34,
-1419.84,
1476.95,
466.93,
523.05,
1.36,
118.24,
-1539.08,
364.73,
-1759.52,
1157.31,
-574.15,
-1027.05,
-1431.86,
-1216.43,
-1835.67,
8075.15,
35.07,
16.03,
-1990.98,
-909.82,
2.66,
-1.99,
-0.87,
1477.95,
31.06,
-0.68,
-2008.02,
5986.97,
1518.04,
-654.31,
708.42,
0.18,
6577.15,
-1901.38,
0.99,
-270.54,
-334.67,
-537.07,
2549.51,
-1032.06,
-136.27,
-931.86,
-0.91,
-487.97,
9589.18,
-1365.73,
-978.96,
-1430.86,
-1257.51,
-222.44,
-83.17,
816.63,
-894.79,
-1971.94,
-393.79,
12079.16,
1.32,
18928.86,
-1971.94,
-844.69,
1.55
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
