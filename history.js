let url = $request.url
let requestBody = JSON.parse($request.body)
let body = JSON.parse($response.body)

if (url.indexOf('futures/v1/private/future/user-daily-profit/getNewUserProfitStatistic') !== -1) {
    let beginTime = requestBody.beginTime;
    let endTime = requestBody.endTime;
    let business = requestBody.business;
    let diff = (endTime - beginTime)/60/60/24/1000 + 1;

    let data = body.data;
    if(business === 'USDT_FUTURES'){
        //U本位
        if(diff === 7){
            data.netProfit = '0.19';
        }
        if(diff === 30){
            data.netProfit = '0.29';
        }
    }else{
        //币本位
        if(diff === 7){
            data.netProfit = '0.39';
        }
        if(diff === 30){
            data.netProfit = '0.49';
        }
    }

    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}
