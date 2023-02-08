var forecastkey = '161e3aea1149989007da50dd1206b50a'
var url = 'http://api.openweathermap.org/data/2.5/forecast?id=5318313&appid=' + forecastkey;

fetch(url)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (resp) {
        console.log(resp)
    })

    .catch(console.err)