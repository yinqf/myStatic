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

    callApi("http://frp.yinqf.com/test?requestBodyStr="+requestBodyStr+"&x-trace-id="+headers['x-trace-id'],function (res) {
        console.log('res:'+res)
    },function (err) {
        console.log('err:'+err)
    })

    // 构建新的请求对象
    let modifiedRequest = {
        ...$request, // 展开原始的请求对象
        headers: headers
    };

    $done({ request: modifiedRequest });
}else{
    $done({})
}
