var body = $response.body
var url = $request.url

if (url.indexOf('futures/v5/private/future/user-data/user-balance') !== -1) {
  var body = JSON.parse($response.body)
  var dataList = body.data;
  dataList.forEach((item,index)=>{
    if(item.asset == 'USDT'){
      var balance = '1000000';
      item.maxWithdrawAmount = balance;
      item.walletBalance = balance;
      item.crossWalletBalance = balance;
      item.availableBalance = balance;
      item.marginBalance = balance;
    }
  })
  $done({ body: JSON.stringify(body) })
}else if(url.indexOf('asset/v2/private/asset-service/wallet/balance') !== -1){
  var body = JSON.parse($response.body)
  var dataList = body.data;
  dataList.forEach((item,index)=>{
    if(item.accountType == 'FUTURE'){      
      item.balance = "35.49749742";
    }
  })
  $done({ body: JSON.stringify(body) })
}else {
  $done({})
}
