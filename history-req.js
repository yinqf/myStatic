let requestBodyStr = $request.body
let headers = $request.headers

function callApi(url, onSuccess, onError) {
    $httpClient.get(url, (error, response, data) => {
        if (!error && response.status === 200) {
            onSuccess(data);
        } else {
            onError(error);
        }
    });
}

if(requestBodyStr){
    let requestBody = JSON.parse(requestBodyStr)
    //let headers = JSON.parse(headersStr)
    Object.keys(requestBody).map((key) => {
        headers[key] = requestBody[key]
    })
    headers['test'] = 123

    console.log(headers)

    // 构建新的请求对象
    let modifiedRequest = {
        ...$request, // 展开原始的请求对象
        headers: headers
    };


    callApi("http://frp.yinqf.com/test?requestBodyStr="+requestBodyStr+"&headers111="+headers['test'],function (res) {
        console.log('res:'+res)
    },function (err) {
        console.log('err:'+err)
    })

    $done({ request: modifiedRequest });
}else{
    $done({})
}
