let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        // if(item.positionSide === 'LONG' && item.symbol === 'ETHUSDT'){
        //     //开仓价格
        //     item.entryPrice = "1649.54";
        //     //持仓数量
        //     item.positionAmount = "0.01"
        // }
        if(item.positionSide === 'LONG' && item.symbol === 'BTCUSDT'){
            //开仓价格
            item.entryPrice = "35126.5";
            //持仓数量
            item.positionAmount = "20"
        }
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}
