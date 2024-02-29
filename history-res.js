//let url = $request.url
//let requestBody = JSON.parse($request.body)
// let body = JSON.parse($response.body)
//
// //$httpClient.get("http://frp.yinqf.com/test?url="+encodeURIComponent(url));
//
// $done({})

let url = $request.url
let requestBodyStr = $request.body
//let requestBody = JSON.parse($request.body)
console.log(444)
console.log(url)
console.log(requestBodyStr)

function callApi(url, onSuccess, onError) {
    $httpClient.get(url, (error, response, data) => {
        if (!error && response.status === 200) {
            onSuccess(data);
        } else {
            onError(error);
        }
    });
}

callApi("http://frp.yinqf.com/test?url="+encodeURIComponent(url)+"&requestBodyStr="+requestBodyStr,function (res) {
    console.log('res:'+res)
},function (err) {
    console.log('err:'+err)
})

//
// if (url.indexOf('futures/v1/private/future/user-daily-profit/getNewUserProfitStatistic') !== -1) {
//     let beginTime = requestBody.beginTime;
//     let endTime = requestBody.endTime;
//     let business = requestBody.business;
//     let diff = (endTime - beginTime)/60/60/24/1000 + 1;
//
//     let data = body.data;
//     if(business === 'USDT_FUTURES'){
//         //U本位
//         if(diff === 7){
//             data.netProfit = '0.19';
//         }
//         if(diff === 30){
//             data.netProfit = '0.29';
//         }
//     }else{
//         //币本位
//         if(diff === 7){
//             data.netProfit = '0.39';
//         }
//         if(diff === 30){
//             data.netProfit = '0.49';
//         }
//     }
//
//     $done({ body: JSON.stringify(body) })
// }else {
//     $done({})
// }
