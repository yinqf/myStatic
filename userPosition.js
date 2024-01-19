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
        //if(item.positionSide === 'LONG' && item.symbol === 'TIAUSDT'){
             //开仓价格
             //item.entryPrice = "15.58";
             //持仓数量
             //item.positionAmount = "3300"
         //}
       //  if(item.positionSide === 'LONG' && item.symbol === 'WOOUSDT'){
             //开仓价格
           //  item.entryPrice = "0.3415";
             //持仓数量
          //   item.positionAmount = "264016"
        // }
        //if(item.positionSide === 'LONG' && item.symbol === 'BTCUSDT'){
            //开仓价格
            //item.entryPrice = "39548.32";
            //持仓数量
            //item.positionAmount = "60"
        //}
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}
