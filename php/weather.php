<?php
$api_key = '6a9775d9a9b0db81bd98b8002033af73';
$url = "http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&lang=fr&units=metric&appid={$api_key}";
$contents = file_get_contents($url);
$clima=json_decode($contents);
date_default_timezone_set('Canada/Eastern');
$result=array();
$result['temp']=$clima->main->temp;
$result['icon']='http://openweathermap.org/img/w/'.$clima->weather[0]->icon.'.png';
$result['today'] = date('Y/m/d');
$result['cityname'] = $clima->name; 

echo json_encode($result);
?>