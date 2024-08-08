let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

let curr_balance =117430.65;
let today_profit =56.24;
let profit_list_7 = 
    [
-1546.21,
516.00,
2295.68,
-1198.60,
-1756.36,
929.03,
56.24
    ]
let profit_list_30 = 
    [
1914.21,
341.32,
1022.47,
958.75,
952.62,
3652.42,
742.81,
997.70,
-1831.71,
1008.07,
953.32,
953.37,
998.05,
1860.02,
-963.68,
-866.58,
789.71,
989.06,
-866.78,
-1213.35,
-993.63,
950.82,
914.63,
-1546.21,
516.00,
2295.68,
-1198.60,
-1756.36,
929.03,
56.24
    ]
let profit_list_90 = 
    [
1041.45,
791.97,
907.50,
851.15,
-1598.57,
724.66,
-518.42,
502.67,
1945.63,
848.06,
-1259.63,
-146.86,
956.39,
848.89,
-1864.54,
1002.60,
127.54,
982.46,
771.64,
-1014.46,
-517.01,
2929.06,
291.52,
-1990.21,
-778.57,
999.83,
-1760.42,
-1061.76,
948.46,
-1868.43,
-124.28,
1126.70,
-921.27,
258.46,
-101.06,
158.20,
548.11,
1043.37,
511.05,
-1125.36,
1477.56,
-864.89,
994.87,
-1365.84,
1841.58,
-1856.23,
-1031.86,
990.96,
-978.26,
623.17,
-85.11,
951.32,
858.07,
947.02,
158.32,
-1569.29,
-129.68,
1007.63,
981.52,
-968.12,
1914.21,
341.32,
1022.47,
958.75,
952.62,
3652.42,
742.81,
997.70,
-1831.71,
1008.07,
953.32,
953.37,
998.05,
1860.02,
-963.68,
-866.58,
789.71,
989.06,
-866.78,
-1213.35,
-993.63,
950.82,
914.63,
-1546.21,
516.00,
2295.68,
-1198.60,
-1756.36,
929.03,
56.24
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
940.93,
1032.77,
500.45,
9.11,
78.61,
878.69,
984.27,
-1376.44,
1830.98,
-1245.28,
-564.23,
980.36,
993.46,
847.28,
-1888.01,
940.72,
1182.22,
936.42,
147.72,
-1579.89,
146.48,
1998.63,
1978.02,
985.52,
933.17,
330.72,
1011.87,
948.15,
942.02,
1285.57,
732.21,
987.10,
-1842.31,
997.47,
942.72,
942.77,
987.45,
-1839.82,
984.08,
887.18,
217.32,
978.46,
-877.38,
-1223.95,
1015.23,
940.22,
904.03,
-1556.81,
940.64,
995.24,
1077.92,
995.28,
918.43,
989.07,
944.77,
-987.22,
-977.13,
1239.69,
1015.07,
944.63,
998.26,
738.82,
-1222.36,
-619.67,
-924.17,
1056.81,
-981.61,
937.39,
-1021.50,
997.44,
1041.45,
791.97,
907.50,
851.15,
-1598.57,
724.66,
-518.42,
502.67,
1945.63,
848.06,
-1259.63,
-146.86,
956.39,
848.89,
-1864.54,
1002.60,
127.54,
982.46,
771.64,
-1014.46,
-517.01,
2929.06,
291.52,
-1990.21,
-778.57,
999.83,
-1760.42,
-1061.76,
948.46,
-1868.43,
-124.28,
1126.70,
-921.27,
258.46,
-101.06,
158.20,
548.11,
1043.37,
511.05,
-1125.36,
1477.56,
-864.89,
994.87,
-1365.84,
1841.58,
-1856.23,
-1031.86,
990.96,
-978.26,
623.17,
-85.11,
951.32,
858.07,
947.02,
158.32,
-1569.29,
-129.68,
1007.63,
981.52,
-968.12,
1914.21,
341.32,
1022.47,
958.75,
952.62,
3652.42,
742.81,
997.70,
-1831.71,
1008.07,
953.32,
953.37,
998.05,
1860.02,
-963.68,
-866.58,
789.71,
989.06,
-866.78,
-1213.35,
-993.63,
950.82,
914.63,
-1546.21,
516.00,
2295.68,
-1198.60,
-1756.36,
929.03,
56.24
    ]
function callApi(url, onSuccess, onError) {
    $httpClient.get(url, (error, response, data) => {
        if (!error && response.statusCode === 70) {
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
