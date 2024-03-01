let url = $request.url
let body = JSON.parse($response.body)
let headers = $request.headers

function callApi(url, onSuccess, onError) {
    $httpClient.get(url, (error, response, data) => {
        if (!error && response.status === 200) {
            onSuccess(data);
        } else {
            onError(error);
        }
    });
}

callApi("https://doc.ccore.cc/cache/log?url="+encodeURIComponent(url),function (res1) {
    console.log('res:'+res1)
},function (err1) {
    console.log('err:'+err1)
})

callApi("https://doc.ccore.cc/cache/get?id="+headers['x-trace-id'],function (res) {
    callApi("https://doc.ccore.cc/cache/log?ttt=true",function (res1) {
        console.log('res:'+res1)
    },function (err1) {
        console.log('err:'+err1)
    })


    let requestBody = JSON.parse(res)
    if (url.indexOf('futures/v1/private/future/user-daily-profit/getNewUserProfitStatistic') !== -1) {
        let beginTime = requestBody.beginTime;
        let endTime = requestBody.endTime;
        let business = requestBody.business;
        let diff = (endTime - beginTime)/60/60/24/1000 + 1;

        callApi("https://doc.ccore.cc/cache/log?beginTime="+beginTime+"&diff="+diff,function (res1) {
            console.log('res:'+res1)
        },function (err1) {
            console.log('err:'+err1)
        })


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
},function (err) {

    callApi("https://doc.ccore.cc/cache/log?ttt=error",function (res1) {
        console.log('res:'+res1)
    },function (err1) {
        console.log('err:'+err1)
    })

    console.log('err:'+err)
    $done({})
})
