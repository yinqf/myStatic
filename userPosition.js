let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.positionSide === 'LONG' && item.symbol === 'POLYXUSDT'){
             //开仓价格
             item.entryPrice = "0.42571";
             //持仓数量
             item.positionAmount = "117000"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'WIFUSDT'){
             //开仓价格
             item.entryPrice = "2.2677";
             //持仓数量
             item.positionAmount = "21300"
         }
         if(item.positionSide === 'LONG' && item.symbol === '1000PEPEUSDT'){
             //开仓价格
             item.entryPrice = "0.0083701";
             //持仓数量
             item.positionAmount = "6012500"
         }
        if(item.positionSide === 'LONG' && item.symbol === 'BTCUSDT'){
            //开仓价格
            item.entryPrice = "61446.4";
            //持仓数量
            item.positionAmount = "17"
       }
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}

//预估保证金*5倍杠杆/开仓价=持仓数量
//当平仓后，合约盈亏分析中的详情才统计，统计时间为平仓当天，不是开仓时间。
