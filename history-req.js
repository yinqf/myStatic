let originalUrl = $request.url
let requestBodyStr = $request.body
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

    $done({ request: modifiedRequest });
}else{
    $done({})
}
