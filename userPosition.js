let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.positionSide === 'LONG' && item.symbol === '1000bonkUSDT'){
             //开仓价格
             item.entryPrice = "0.0300100";
             //持仓数量
             item.positionAmount = "1830000"
         }
        if(item.positionSide === 'LONG' && item.symbol === '1000BONKUSDT'){
             //开仓价格
             item.entryPrice = "0.029800";
             //持仓数量
             item.positionAmount = "1453000"
         }
         if(item.positionSide === 'LONG' && item.symbol === 'wifUSDT'){
             //开仓价格
             item.entryPrice = "2.827688";
             //持仓数量
             item.positionAmount = "20000"
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
//当平仓后，合约盈亏分析中的详情才统计，统计时间为平仓当天，不是开仓时间。
