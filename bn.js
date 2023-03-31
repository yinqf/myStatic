var body = $response.body
var url = $request.url

//合约USDT余额
var balance = '251000';
//现货USDT余额
var uBalance = '251000';
//现货BTC余额
var btcBalance = '251000';
//现货ETH余额
var ethBalance = '251000';
//现货BNB余额
var bnbBalance = '251000';
//btc价格
var btcPrice = '27913';
//合约btc数量
var btcNum = Number(balance)/Number(btcPrice);
//现货btc数量
var spotBtcNum = '100.000';
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
    if(item.accountType == 'MAIN'){
      //账户总览界面，现货余额，btc数量
      item.balance = spotBtcNum.toFixed(8);
    }
  })
  $done({ body: JSON.stringify(body) })
  
}else if(url.indexOf('asset/v3/private/asset-service/asset/get-user-asset') !==-1){
  var body = JSON.parse($response.body)
  var dataList = body.data;
  dataList.forEach((item,index)=>{
    if(item.asset == 'USDT'){
      //现货界面，现货USDT数量
      item.free = uBalance;
    }
    if(item.asset == 'BTC'){
      //现货界面，现货BTC数量
      item.free = btcBalance;
    }
    if(item.asset == 'ETH'){
      //现货界面，现货ETH数量
      item.free = ethBalance;
    }
    if(item.asset == 'BNB'){
      //现货界面，现货BNB数量
      item.free = bnbBalance;
    }
  })
  $done({ body: JSON.stringify(body) })
  
}else {
  $done({})
}
