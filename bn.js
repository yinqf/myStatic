let url = $request.url
let body = JSON.parse($response.body)

//合约USDT余额
let balance = '152681.41';
//现货USDT数量
let uBalance = '10380.94';
//现货BTC数量
let btcBalance = '0.00015';
//现货ETH数量
let ethBalance = '0.0028';
//现货BNB数量
let bnbBalance = '0.2743553';
//btc价格
let btcPrice = '62856.14';
//eth价格
let ethPrice = '3256.23';
//bnb价格
let bnbPrice = '521.8';
//合约btc数量
let btcNum = Number(balance)/Number(btcPrice);
//现货btc数量
let spotBtcNum = (Number(uBalance) + Number(btcBalance)*Number(btcPrice) + Number(ethBalance)*Number(ethPrice) + Number(bnbBalance)*Number(bnbPrice))/Number(btcPrice);
if (url.indexOf('futures/v5/private/future/user-data/user-balance') !== -1) {
  let dataList = body.data;
  dataList.forEach((item)=>{
    if(item.asset === 'USDT'){
      //合约钱包最大可划转金额
      item.maxWithdrawAmount = balance;
      //合约钱包余额
      item.walletBalance = balance;
      //逐仓合约钱包余额
      item.crossWalletBalance = balance;
      //钱包可用余额
      item.availableBalance = balance;
      //保证金余额
      item.marginBalance = balance;
    }
  })
  $done({ body: JSON.stringify(body) })

}else if(url.indexOf('asset/v2/private/asset-service/wallet/balance') !== -1){
  let dataList = body.data;
  dataList.forEach((item)=>{
    if(item.accountType === 'FUTURE'){
      //账户总览界面，合约余额，btc数量
      item.balance = btcNum === 0 ? 0 : btcNum.toFixed(8);
    }
    if(item.accountType === 'MAIN'){
      //账户总览界面，现货余额，btc数量
      item.balance = spotBtcNum === 0 ? 0 : spotBtcNum.toFixed(8);
    }
  })
  $done({ body: JSON.stringify(body) })
}else if(url.indexOf('asset/v2/private/asset-service/wallet/asset?') !== -1){
  let dataList = body.data;
  dataList.forEach((item)=>{
    if(item.asset === 'USDT'){
      //账户总览界面，usdt现货数量
      item.amount = uBalance;
    }
    if(item.asset === 'BNB'){
      //账户总览界面，bnb现货数量
      item.amount = bnbBalance;
    }
  })
  $done({ body: JSON.stringify(body) })
}else if(url.indexOf('asset/v2/private/asset-service/wallet/asset-detail?') !== -1){
  let dataList = body.data;
  dataList.forEach((item)=>{
    if(item.asset === 'USDT') {
      let assetDetailsList = item.assetDetails;
      if (assetDetailsList) {
        console.log(assetDetailsList);
        assetDetailsList.forEach((assetItem) => {
          if (assetItem.accountType === 'MAIN') {
            assetItem.amount = uBalance;
          }
          if (assetItem.accountType === 'FUTURE') {
            assetItem.amount = balance;
          }
        })
        console.log(assetDetailsList);
      }
    }
  })
  $done({ body: JSON.stringify(body) })
}else if(url.indexOf('asset/v3/private/asset-service/asset/get-user-asset') !==-1){
  let dataList = body.data;
  dataList.forEach((item)=>{
    if(item.asset === 'USDT'){
      //现货界面，现货USDT数量
      item.free = uBalance;
    }
    if(item.asset === 'BTC'){
      //现货界面，现货BTC数量
      item.free = btcBalance;
    }
    if(item.asset === 'ETH'){
      //现货界面，现货ETH数量
      item.free = ethBalance;
    }
    if(item.asset === 'BNB'){
      //现货界面，现货BNB数量
      item.free = bnbBalance;
    }
  })
  $done({ body: JSON.stringify(body) })

}else {
  $done({})
}
