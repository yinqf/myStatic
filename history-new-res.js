let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance =121342.99;
let today_profit =125.36;
let profit_list_7 = 
    [
558.52,
-100.01,
257.26,
1843.19,
-1045.19,
60.06,
125.36
    ]
let profit_list_30 = 
    [
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
125.36
    ]
let profit_list_90 = 
    [
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
125.36
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
1411.39,
1549.16,
750.67,
13.67,
117.92,
1318.03,
1476.41,
-2752.88,
2746.46,
-2490.56,
-1128.46,
1470.54,
1490.19,
1270.92,
-2776.02,
1411.08,
1773.33,
1404.63,
221.58,
-3159.77,
219.72,
2997.95,
967.03,
778.28,
-1399.76,
-496.07,
1517.81,
1422.22,
1413.02,
1928.36,
1098.32,
1480.65,
-1684.61,
1496.21,
1414.08,
1414.16,
1481.17,
-2179.63,
1476.12,
1330.76,
325.98,
1467.69,
-1754.75,
-2447.89,
1522.85,
1410.32,
1356.05,
-1113.61,
-1410.96,
1492.85,
1616.87,
12.36,
-1377.65,
1483.61,
1417.16,
-1974.44,
-1954.25,
1859.54,
1522.61,
1416.95,
11.69,
1108.22,
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
125.36
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
