	
function copyText() {
        var input = document.getElementById("shorturl");
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
}


var APP = (function(){

    var fn = {
        
        // 生成短地址
        setUrl: function(self) {
            var urlEl = document.getElementById('url'),
                tips = 'https://',
                request = {"url": urlEl.value};
            fn.getJson('api/set.php', true, JSON.stringify(request), function(res) {
                if(res.success == 'true') {
                    //urlEl.className = 'focus';
                    //urlEl.value = res.content.url;
                    $res = document.getElementById('shorturl')
                    $res.className = 'focus';
                    $res.value = res.content.url;
                } else {
                    urlEl.className = '';
                    urlEl.value = '';
                    urlEl.setAttribute('placeholder', res.content);
                    setTimeout(function() {
                        urlEl.setAttribute('placeholder', tips);
                    }, 2000);
                }
            });
        },
        // 获取 JSON 数据
        getJson: function(url, post, data, callback) {
            var xhr = new XMLHttpRequest(),
                type = (post) ? 'POST' : 'GET';
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    var json = JSON.parse(xhr.responseText);
                    callback(json);
                } else if(xhr.readyState == 4) {
                    callback(false);
                }
            }
            xhr.open(type, url, true);
            xhr.send(data);
        } 
    },
    init = function() {
        setTimeout(function() {
            var el = document.getElementsByTagName('html')[0];
            el.className = 'on';
        }, 10);
    };
    return {fn: fn, init: init}
})();

document.addEventListener('DOMContentLoaded', function() {APP.init();})

console.log('\n %c Program By %c Baoshuo ( @renbaoshuo ) %c https://baoshuo.ren %c\n', 'color: #fadfa3; background: #000000; padding:5px 0;', 'background: #fadfa3; padding:5px 0;', 'background: #ffbf33; padding:5px 0;', '');
console.log('\n GitHub Homepage: https://github.com/renbaoshuo/Shortlink \n \n%c ★ Please give us a star on GitHub! ★ %c \n', 'color: red;', '')
