let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance =175693.87;
let today_profit =568.23;
let profit_list_7 = 
    [
851.46,
2405.23,
1902.58,
-568.39,
-1502.36,
-1028.46,
568.23
    ]
let profit_list_30 = 
    [
-55.11,
-668.34,
-1419.84,
1476.95,
466.92,
523.15,
118.02,
-1539.08,
346.73,
-1759.35,
1157.31,
-574.15,
-1027.10,
-1431.84,
-1246.32,
-1835.46,
8075.15,
35.07,
16.03,
-1990.98,
-909.18,
-875.16,
-2423.53,
851.46,
2405.23,
1902.58,
-568.39,
-1502.36,
-1028.46,
568.23
    ]
let profit_list_90 = 
    [
-1529.06,
-376.75,
-970.94,
-1204.41,
-3524.75,
1484.92,
-2753.03,
505.00,
1490.01,
-1652.32,
-788.15,
-1434.87,
-1672.33,
-2645.52,
-2056.41,
-371.74,
-2873.67,
987.02,
1496.99,
3085.17,
-4393.32,
718.36,
-122.22,
3609.72,
336.28,
1239.48,
-59.12,
990.98,
-2164.43,
2242.48,
-75.15,
-1248.25,
1876.75,
716.35,
824.64,
5055.10,
1350.27,
-745.36,
-856.32,
2119.42,
-759.13,
-688.37,
164.00,
202.36,
941.18,
-374.75,
-933.87,
4168.94,
80.16,
214.43,
156.23,
18927.37,
962.19,
-473.95,
-1168.23,
-1089.18,
-936.17,
-324.65,
-2376.47,
75.15,
-55.11,
-668.34,
-1419.84,
1476.95,
466.92,
523.15,
118.02,
-1539.08,
346.73,
-1759.35,
1157.31,
-574.15,
-1027.10,
-1431.84,
-1246.32,
-1835.46,
8075.15,
35.07,
16.03,
-1990.98,
-909.18,
-875.16,
-2423.53,
851.46,
2405.23,
1902.58,
-568.39,
-1502.36,
-1028.46,
568.23
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
-2444.72,
-639.34,
-948.33,
1585.21,
-1963.21,
1406.08,
-2042.99,
1496.16,
1562.17,
19.60,
1361.24,
1276.72,
-3197.14,
1086.99,
-1036.84,
754.00,
2918.45,
1272.09,
-2519.26,
-293.71,
1434.58,
1273.33,
45.98,
1503.89,
191.30,
1473.69,
1157.45,
-2028.92,
-1034.01,
2393.59,
437.27,
-1980.41,
-1557.14,
1499.74,
-3520.83,
-2123.52,
1422.69,
21.22,
-248.56,
1690.05,
-842.54,
387.69,
-1202.12,
1237.30,
1822.17,
1565.06,
-766.57,
-1250.72,
2216.34,
-729.77,
1492.31,
-731.68,
2762.36,
4.36,
-2063.71,
1486.44,
-1956.52,
934.76,
-1170.22,
1426.98,
1287.11,
1420.53,
237.48,
-3138.57,
-259.36,
1511.44,
1472.27,
-1936.24,
15.98,
511.97,
1533.71,
1438.12,
1428.92,
1478.63,
1114.22,
1496.55,
196.16,
-212.13,
646.11,
275.13,
179.92,
-532.01,
1056.33,
-98.40,
1505.73,
84.07,
-170.83,
-398.30,
-1193.51,
-28.74,
-1416.82,
454.35,
820.41,
1596.71,
373.13,
-3360.75,
-2405.90,
-640.12,
1568.23,
-2321.00,
403.63,
-512.10,
-679.52,
187.09,
526.51,
1016.31,
144.13,
4018.96,
-259.29,
-2206.18,
1957.91,
3215.32,
3179.24,
-2619.63,
-1185.12,
798.08,
956.27,
558.52,
-100.01,
257.26,
1843.19,
-1045.19,
60.06,
125.36,
-2203.54,
-814.62,
697.88,
1245.95,
705.05,
-1562.45,
-56.04,
-1025.27,
-465.98,
-62.45,
1956.11,
451.78,
32.45,
998.01,
-1856.47,
-405.62,
1987.94,
258.69,
50.00,
-1646.01,
-282.33,
182.36,
-894.17,
-668.38,
1019.24,
-822.14,
-1011.46,
486.97,
237.47,
1693.93,
-67.13,
264.53,
481.00,
93.00,
-605.12,
260.52,
5.01,
-784.57,
197.39,
1336.67,
5567.00,
11.00,
295.95,
782.56,
121.24,
756.51,
6404.81,
-10.02,
194.69,
705.11,
2959.92,
723.45,
-2203.44,
693.13,
-262.52,
-1.23,
-814.63,
-755.51,
-4.01,
-8.02,
-12.36,
726.19,
-1378.76,
2880.76,
-748.15,
-705.51,
3688.38,
3502.07,
331.66,
2578.51,
1808.62,
7.09,
5058.12,
-661.38,
1209.42,
3448.69,
-1643.29,
-1529.06,
-376.75,
-970.94,
-1204.41,
-3524.75,
1484.92,
-2753.03,
505.00,
1490.01,
-1652.32,
-788.15,
-1434.87,
-1672.33,
-2645.52,
-2056.41,
-371.74,
-2873.67,
987.02,
1496.99,
3085.17,
-4393.32,
718.36,
-122.22,
3609.72,
336.28,
1239.48,
-59.12,
990.98,
-2164.43,
2242.48,
-75.15,
-1248.25,
1876.75,
716.35,
824.64,
5055.10,
1350.27,
-745.36,
-856.32,
2119.42,
-759.13,
-688.37,
164.00,
202.36,
941.18,
-374.75,
-933.87,
4168.94,
80.16,
214.43,
156.23,
18927.37,
962.19,
-473.95,
-1168.23,
-1089.18,
-936.17,
-324.65,
-2376.47,
75.15,
-55.11,
-668.34,
-1419.84,
1476.95,
466.92,
523.15,
118.02,
-1539.08,
346.73,
-1759.35,
1157.31,
-574.15,
-1027.10,
-1431.84,
-1246.32,
-1835.46,
8075.15,
35.07,
16.03,
-1990.98,
-909.18,
-875.16,
-2423.53,
851.46,
2405.23,
1902.58,
-568.39,
-1502.36,
-1028.46,
568.23
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
