<?php
    // 引入类
    require_once('../inc/require.php');
    global $config;
    if($config['api']) {
        $url_c = new url();

        $opt = [];
        $opt['success'] = 'false';

        if(isset($_GET['url'])) {
            // 添加 HTTP 协议前缀
            if(!strstr($_GET['url'], 'http://') && !strstr($_GET['url'], 'https:')) $_GET['url'] = 'http://' . $_GET['url'];
            // 检测网址格式是否正确
            $is_link = preg_match('(http(|s)://([\w-]+\.)+[\w-]+(/)?)', $_GET['url']);
            // 判断条件
            if($_GET['url'] != '' && !strstr($_GET['url'], $_SERVER['HTTP_HOST']) && $is_link) {
                $opt['success'] = 'true';
                $opt['content']['url'] = $url_c->set_url($_GET['url'], $config['length']);
            } else if(strstr($_GET['url'], $_SERVER['HTTP_HOST'])) {
                $opt['content'] = '链接已经是短地址了。';
            } else if(!$is_link) {
                $opt['content'] = '请输入正确格式的网址。';
            }
        } else {
            $opt['content'] = '调用参数不能为空。';
        }
        // 输出
        echo json_encode($opt);
    }
?>
