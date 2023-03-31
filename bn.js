var body = $response.body
var url = $request.url

//合约余额
var balance = '251000';
//btc价格
var btcPrice = '27913';
//btc数量
var btcNum = Number(balance)/Number(btcPrice);
if (url.indexOf('futures/v5/private/future/user-data/user-balance') !== -1) {
  var body = JSON.parse($response.body)
  var dataList = body.data;
  dataList.forEach((item,index)=>{
    if(item.asset == 'USDT'){
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
  var body = JSON.parse($response.body)
  var dataList = body.data;
  dataList.forEach((item,index)=>{
    if(item.accountType == 'FUTURE'){
      //账户总览界面，合约余额，btc数量
      item.balance = btcNum.toFixed(8);
    }
  })
  $done({ body: JSON.stringify(body) })
}else {
  $done({})
}
