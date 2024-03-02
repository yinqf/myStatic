let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.positionSide === 'LONG' && item.symbol === 'ORDIUSDT'){
             //开仓价格
             item.entryPrice = "76.761";
             //持仓数量
             item.positionAmount = "660"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'ALICEUSDT'){
             //开仓价格
             item.entryPrice = "1.64";
             //持仓数量
             item.positionAmount = "95000"
         }
         if(item.positionSide === 'LONG' && item.symbol === 'THETAUSDT'){
             //开仓价格
             item.entryPrice = "2.1228";
             //持仓数量
             item.positionAmount = "116,000"
         }
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
