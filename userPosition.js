let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.positionSide === 'LONG' && item.symbol === 'BTCUSDT'){
             //开仓价格
             item.entryPrice = "41235.22";
             //持仓数量
             item.positionAmount = "20"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'UMAUSDT'){
             //开仓价格
             item.entryPrice = "4.1";
             //持仓数量
             item.positionAmount = "22785"
         }
         if(item.positionSide === 'LONG' && item.symbol === 'API3USDT'){
             //开仓价格
             item.entryPrice = "2.2";
             //持仓数量
             item.positionAmount = "10375"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'CHZUSDT'){
            //开仓价格
            item.entryPrice = "0.09";
            //持仓数量
            item.positionAmount = "35206"
        }
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}
