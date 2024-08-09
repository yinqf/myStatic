let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('/bapi/futures/v1/private/future/user-daily-profit/getNewUserProfitStatistic') !== -1) {
    let data = body.data;
    //总盈利
    data.totalProfit = 10000;
    //总亏损
    data.totalLoss = 1000;
    //净盈利/亏损
    data.netProfit = data.totalProfit - data.totalLoss;
    $done({body: JSON.stringify(body)})   
}else {
    $done({})
}
