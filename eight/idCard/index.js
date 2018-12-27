var shell = require('shelljs')
var images = shell.exec('ls ./images/*', {silent: true}).toString()
var arr = images.split('\n')

var api_key = 'xxx' // 自己申请的apikey
var api_secret = 'xxx' // 自己申请的api_secret
var result = []
for (var item in arr) {
    (function(item) {
        setTimeout(function() {
            var tmp = '@' + arr[item]
            if (tmp == '@') {
                return
            }
            var cmd = 'curl -X POST "https://api-cn.faceplusplus.com/cardpp/v1/ocridcard" -F "api_key="' + api_key +  '" -F "api_secret="' + api_secret + '" -F "image_file=' + tmp + '"'
            var res = shell.exec(cmd, {silent: true}).toString()
            result.push(res)

            if (item == arr.length - 2) {
                for (var index in result) {
                    var res = JSON.parse(result[index])
                    if (typeof res.cards == 'object') {
                       console.log(res.cards[0].name + ' ' + res.cards[0].id_card_number)
                    } else {
                        console.log(result[item])
                    }
                }
            }
        }, item * 1000)
    }(item))
}