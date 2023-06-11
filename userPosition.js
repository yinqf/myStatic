let url = $request.url
let body = JSON.parse($response.body)

if (url.indexOf('bapi/futures/v5/private/future/user-data/user-position') !== -1) {
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.positionSide === 'LONG' && item.symbol === 'ETHUSDT'){
            //合约钱包最大可划转金额
            item.entryPrice = "1649.54";
        }
    })
    $done({ body: JSON.stringify(body) })
}else {
    $done({})
}
