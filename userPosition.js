let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        //if(item.positionSide === 'LONG' && item.symbol === 'BTCUSDT'){
             //开仓价格
             //item.entryPrice = "41235.22";
             //持仓数量
             //item.positionAmount = "20"
         //}
        //if(item.positionSide === 'LONG' && item.symbol === 'CKBUSDT'){
             //开仓价格
            // item.entryPrice = "0.008476";
             //持仓数量
            // item.positionAmount = "11524036"
        // }
         //if(item.positionSide === 'LONG' && item.symbol === 'API3USDT'){
             //开仓价格
             //item.entryPrice = "2.2";
             //持仓数量
            // item.positionAmount = "10375"
        // }
        //if(item.positionSide === 'LONG' && item.symbol === 'CHZUSDT'){
            //开仓价格
            //item.entryPrice = "0.09011";
            //持仓数量
            //item.positionAmount = "35206"
        //}
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}
