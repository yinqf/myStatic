let url = $request.url
let body = JSON.parse($response.body)

let multiple = 70;
if (url.indexOf('bapi/composite/v1/private/bigdata/finance/futures/query-position-history') !== -1) {
    let data = body.data;
    if (data.positionHistoryItemList != null) {
        data.positionHistoryItemList.forEach(item => {
            item.closed_volume = item.closed_volume * multiple;
            item.closing_pnl = item.closing_pnl * multiple;
            item.max_open_interest = item.max_open_interest * multiple;
        })
    }

    $done({ body: JSON.stringify(body) })
}else if (url.indexOf('futures/v1/private/future/user-data/trade-history') !== -1) {
    let data = body.data;
    if (data != null) {
        data.forEach(item => {
            item.fee = item.fee * multiple;
            item.qty = item.qty * multiple;
            item.totalQuota = item.totalQuota * multiple;
            item.realizedProfit = item.realizedProfit * multiple;
        })
    }
    $done({ body: JSON.stringify(body) })
}else if (url.indexOf('futures/v1/private/future/user-data/transaction-history') !== -1) {
    let data = body.data;
    if (data != null) {
        data.forEach(item => {
            item.balanceDelta = item.balanceDelta * multiple;
            item.balanceDeltaStr = item.balanceDelta + "";
        })
    }
    $done({ body: JSON.stringify(body) })
}else if (url.indexOf('futures/v1/private/future/order/order-history') !== -1) {
    let data = body.data;
    if (data != null) {
        data.forEach(item => {
            item.executedQuoteQty = item.executedQuoteQty * multiple;
            item.origQty = item.origQty * multiple;
        })
    }
    $done({ body: JSON.stringify(body) })
}else if (url.indexOf('bapi/futures/v2/private/future/order/open-orders') !== -1){
    let data = body.data;
    if (data != null) {
        data.forEach(item => {
            item.origQty = item.origQty * multiple;
        })
    }
    $done({ body: JSON.stringify(body) })
}else{
    $done({})
}
