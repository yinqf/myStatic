let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

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
    let requestBody = JSON.parse(res)
    if (url.indexOf('futures/v1/private/future/user-daily-profit/getNewUserProfitStatistic') !== -1) {
        let beginTime = requestBody.beginTime;
        let endTime = requestBody.endTime;
        let business = requestBody.business;
        let diff = (endTime - beginTime)/60/60/24/1000 + 1;

        let data = body.data;
        if(business === 'USDT_FUTURES'){
            //U本位
            if(diff === 7){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
            if(diff === 30){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
            if(diff === 90){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
            if(diff === 365){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
        }else{
            //币本位
            if(diff === 7){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
            if(diff === 30){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
            if(diff === 90){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
            if(diff === 365){
                //总盈利
                data.totalProfit = 101;
                //总亏损
                data.totalLoss = 50;
                //净盈利/亏损
                data.netProfit = data.totalProfit - data.totalLoss;
                //盈利天数
                data.profitDays = 19;
                //亏损天数
                data.lossDays = 11;
                //持平天数
                data.fairDays = 0;
                //胜率
                data.winDaysRate = 66.33;
            }
        }

        $done({ body: JSON.stringify(body) })
    }else {
        $done({})
    }
},function (err) {
    $done({})
})
