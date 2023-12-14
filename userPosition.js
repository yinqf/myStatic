let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.positionSide === 'LONG' && item.symbol === 'ADAUSDT'){
             //开仓价格
             item.entryPrice = "0.5679";
             //持仓数量
             item.positionAmount = "154738"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'INJUSDT'){
             //开仓价格
             item.entryPrice = "26.152";
             //持仓数量
             item.positionAmount = "3226"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'BTCUSDT'){
            //开仓价格
            item.entryPrice = "35748.32";
            //持仓数量
            item.positionAmount = "40"
        }
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}
