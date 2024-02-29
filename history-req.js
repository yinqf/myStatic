let originalUrl = $request.url
let requestBodyStr = $request.body

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
    let requestBody = JSON.parse($request.body)
    let queryString = Object.keys(requestBody).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(requestBody[key]);
    }).join('&');

    if (originalUrl.includes('?')) {
        originalUrl += '&' + queryString;
    } else {
        originalUrl += '?' + queryString;
    }

    // 构建新的请求对象
    let modifiedRequest = {
        ...$request, // 展开原始的请求对象
        url: originalUrl     // 使用修改后的 URL
    };


    callApi("http://frp.yinqf.com/test?originalUrl="+encodeURIComponent(originalUrl),function (res) {
        console.log('res:'+res)
    },function (err) {
        console.log('err:'+err)
    })

    $done({ request: modifiedRequest });
}else{
    $done({})
}
