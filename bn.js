var body = $response.body
var url = $request.url

if (url == 'https://www.binance.com/bapi/futures/v5/private/future/user-data/user-balance') {
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
} else {
  $done({})
}
