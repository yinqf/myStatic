let url = $request.url
let body = JSON.parse($response.body)
console.log('url:'+url)

function callApi(url, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            onSuccess(xhr.responseText);
        } else {
            onError(xhr.statusText);
        }
    };
    xhr.onerror = function() {
        onError(xhr.statusText);
    };
    xhr.send(null);
}

callApi("http://api.luyayun.com/coinPrice/getPrice?coinTypes=BTC,ETH,BNB",function (res) {
    console.log('res:'+res)
},function (err) {
    console.log('err:'+err)
})

$done({})
