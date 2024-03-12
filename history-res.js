let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

today_profit = 150.05;

//最近7天的u本位合约盈利数据，正序排列，时间小的在前面
u_profit_list_7 = [
    1000.01,
    255.55,
    -153.30,
    1553.35,
    1000.50,
    -158.25,
    1000.00
];


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
            let userProfitRets = data.userProfitRets;
            let profitList = [];
            if (business === 'USDT_FUTURES') {
                if (diff === 1) {
                    profitList = [today_profit];
                }
                if (diff === 7) {
                    profitList = u_profit_list_7;
                }
            }
            if (userProfitRets.length === 1) {
                userProfitRets[0].profit = today_profit;
                data.totalProfit = data.averageProfit =  today_profit > 0 ? today_profit : 0;
                data.totalLoss = data.averageLoss = today_profit < 0 ? today_profit : 0;
                data.fairDays = 0;
                data.netProfit = today_profit;
                data.profitDays = today_profit > 0 ? 1 : 0;
                data.lossDays = today_profit > 0 ? 0 : 1;
            }
            if (profitList.length >= 7) {
                let profitNum = 0;
                let fairNum = 1;
                let totalProfit = 0;
                let totalLoss = 0;
                let userProfitRets = data.userProfitRets;
                profitList.forEach((item, index) => {
                    //余额，用于计算累计盈亏和累计盈亏率，例如7天累计盈亏 = 当天余额 - 7天前的余额
                    userProfitRets[index].profit = item;
                    if (index > 0) {
                        //当日余额等于上日余额 + 当日盈利
                        userProfitRets[index].balance = userProfitRets[index-1].balance + item
                        if (item > 0) {
                            //记录盈利天数
                            profitNum = profitNum + 1;
                            //记录累计盈利金额
                            totalProfit = totalProfit + item;
                        } else if (item === 0) {
                            //记录持平天数
                            fairNum = fairNum + 1;
                        } else {
                            //记录累计亏损金额
                            totalLoss = totalLoss + item;
                        }
                    }
                    //净划入
                    item.transferIn = 0;
                });

                //盈利天数
                data.profitDays = profitNum;
                //亏损天数
                data.lossDays = profitList.length - profitNum - fairNum;
                //持平天数
                data.fairDays = fairNum;
                //胜率
                data.winDaysRate = (profitNum * 100 / profitList.length).toFixed(2);
                //总盈利
                data.totalProfit = totalProfit;
                //总亏损
                data.totalLoss = totalLoss * -1;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
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
