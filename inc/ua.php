<?

$ua_flg = 0;
$USER_AGENT = $_SERVER["HTTP_USER_AGENT"]; 

if (preg_match("/iPhone|iPod/", $USER_AGENT)
    ||  (preg_match("/Android/", $USER_AGENT)  
    &&  preg_match("/Mobile/", $USER_AGENT)  
    &&  !preg_match("/SC\-01C/", $USER_AGENT))) {
    // スマートフォンの場合smpフラグ

    $ua_flg = 1;

}

