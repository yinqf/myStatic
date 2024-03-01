let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

//最近7天的u本位合约余额数据，正序排列，时间小的在前面
let u_balance_list_7 = [100,121,142,166,180,200,210]; //需保证数据为7条
let u_balance_list_30 = [100,121,142,166,180,200,210,122,232,232,232,222,222,211,111,333,444,555,666,777,888,999,3123,123,223,1213,131,113,22,324];//需保证数据为30条
//最近7天的币本位合约余额数据，正序排列，时间小的在前面
let b_balance_list_7 = [100,121,142,166,180,200,210];
let b_balance_list_30 = [100,121,142,166,180,200,210,122,232,232,232,222,222,211,111,333,444,555,666,777,888,999,3123,123,223,1213,131,113,22,324];

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
        let balanceList = [];
        if(business === 'USDT_FUTURES'){
            if(diff === 7){
                balanceList = u_balance_list_7;
            }
            if(diff === 30){
                balanceList = u_balance_list_30
            }
            if(diff === 90){

            }
            if(diff === 365){

            }
        }else{
            if(diff === 7){
                balanceList = b_balance_list_7;
            }
            if(diff === 30){
                balanceList = b_balance_list_30
            }
            if(diff === 90){

            }
            if(diff === 365){

            }
        }

        if(balanceList.length >= 7){
            let profitNum = 0;
            let fairNum = 1;
            let totalProfit = 0;
            let totalLoss = 0;
            let userProfitRets = data.userProfitRets;
            userProfitRets.forEach((item,index)=>{
                //余额，用于计算累计盈亏和累计盈亏率，例如7天累计盈亏 = 当天余额 - 7天前的余额
                item.balance = balanceList[index];
                if(index > 0){
                    //单日盈亏(当前余额 - 前一天的余额)
                    item.profit = item.balance - balanceList[index-1];
                    if(item.profit > 0){
                        //记录盈利天数
                        profitNum = profitNum + 1;
                        //记录累计盈利金额
                        totalProfit = totalProfit + item.profit;
                    }else if(item.profit === 0){
                        //记录持平天数
                        fairNum = fairNum + 1;
                    }else{
                        //记录累计亏损金额
                        totalLoss = totalLoss + item.profit;
                    }
                }else{
                    //单日盈亏（第一天为0）
                    item.profit = 0;
                }
                //净划入
                item.transferIn = 0;
            });

            //盈利天数
            data.profitDays = profitNum;
            //亏损天数
            data.lossDays = balanceList.length - profitNum - fairNum;
            //持平天数
            data.fairDays = fairNum;
            //胜率
            data.winDaysRate = (profitNum * 100/ balanceList.length).toFixed(2);
            //总盈利
            data.totalProfit = totalProfit;
            //总亏损
            data.totalLoss = totalLoss * -1;
            //净盈利/亏损
            data.netProfit = data.totalProfit - data.totalLoss;
        }

        $done({ body: JSON.stringify(body) })
    }else {
        $done({})
    }
},function (err) {
    $done({})
})
