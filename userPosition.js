let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.positionSide === 'LONG' && item.symbol === 'ALICEUSDT'){
             //开仓价格
             item.entryPrice = "1.74";
             //持仓数量
             item.positionAmount = "29000"
         }
        if(item.positionSide === 'LONG' && item.symbol === '1000BONKUSDT'){
             //开仓价格
             item.entryPrice = "0.0412871";
             //持仓数量
             item.positionAmount = "1453000"
         }
         if(item.positionSide === 'LONG' && item.symbol === '1000PEPEUSDT'){
             //开仓价格
             item.entryPrice = "0.007631";
             //持仓数量
             item.positionAmount = "7200000"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'BTCUSDT'){
            //开仓价格
            item.entryPrice = "62876.81";
            //持仓数量
            item.positionAmount = "32"
        }
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}

//预估保证金*5倍杠杆/开仓价=持仓数量
