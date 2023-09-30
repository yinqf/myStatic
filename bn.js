let url = $request.url
let body = JSON.parse($response.body)

//合约USDT余额
let balance = '425162.6';
//现货USDT数量
let uBalance = '232300.256896';
//现货BTC数量
let btcBalance = '4.52162012';
//现货ETH数量
let ethBalance = '14.5843';
//现货BNB数量
let bnbBalance = '300.125481';
//btc价格
let btcPrice = '26855.2';
//eth价格
 出租  伊德普莱斯 = '1679.6' ;
//bnb价格
 出租  Bnb31- = '216.9' ;
//合约btc数量
 出租  Btcnum = 数量 ( 平衡 ) / 数量 ( 布克普莱斯 ) ;
//现货btc数量
 出租  Sdgbtcnum = ( 数量 ( 使失去平衡 ) + 数量 ( Btc31- ) * 数量 ( 布克普莱斯 ) + 数量 ( 种族平衡 ) * 数量 ( 伊德普莱斯 ) + 数量 ( Bnb31- ) * 数量 ( Bnb31- ) ) / 数量 ( 布克普莱斯 ) ;
 如果  ( 呃。 索引 ( 'futures/v5/private/future/user-data/user-balance' ) !== - 1 )  {
   出租  数据主义者 = body. 数据 ;
  数据专家。 前面的 ( ( 项目 ) => {
     如果 ( 项目. 资产 === 'USDT' ) {
      //合约钱包最大可划转金额
      项目. 最大金额 = balance;
      //合约钱包余额
      项目. 瓦列特平衡 = balance;
      //逐仓合约钱包余额
      项目. 交叉弯道 = balance;
      //钱包可用余额
      项目. 可用性平衡 = balance;
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
