let url = $request.url
let body = JSON.parse($response.body)


console.log('url:'+url)
console.log('body:'+$response.body)

if(url.indexOf('asset/v2/private/asset-service/wallet/balance') !== -1){
    let dataList = body.data;
    dataList.forEach((item)=>{
        if(item.accountType === 'FUTURE'){
            //账户总览界面，合约余额，btc数量
            //item.balance = btcNum.toFixed(8);
            item.balance = '1.00004016';

        }
    })
    console.log('zl-balance:'+JSON.stringify(body))
    $done({ body: JSON.stringify(body) })

}else {
    $done({})
}
