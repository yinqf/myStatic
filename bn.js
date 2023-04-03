let url = $request.url
let body = JSON.parse($response.body)

// let testUrl = 'https://frp.yinqf.com/test/log?url='+encodeURIComponent(url);
// fetch(testUrl).then(response => {
//   console.log(response);
//   return response;
//   // if (response.ok) {
//   //   return response.json();
//   // } else {
//   //   throw new Error(response.statusText);
//   // }
// })
// .then(data => {
//   console.log(data)
// })
// .catch(error => {
//   console.log(error)
// });

//合约USDT余额
let balance = '1175892';
//现货USDT数量
let uBalance = '1223000.256896';
//现货BTC数量
let btcBalance = '82.52162012';
//现货ETH数量
let ethBalance = '500.5843';
//现货BNB数量
let bnbBalance = '640.125481';
//btc价格
let btcPrice = '27913';
//eth价格
let ethPrice = '1805';
//bnb价格
let bnbPrice = '316';
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
      item.balance = btcNum.toFixed(8);
    }
    if(item.accountType === 'MAIN'){
      //账户总览界面，现货余额，btc数量
      item.balance = spotBtcNum.toFixed(8);
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
