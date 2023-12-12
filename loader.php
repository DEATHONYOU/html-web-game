<?php
error_reporting(0);
define('DIR', dirname(__FILE__) );
$maps=array('altis'=>'Altis','chernarus'=>'Chernarus','chernarusplus'=>'Chernarus Plus','lingor'=>'Lingor','namalsk'=>'Namalsk','napf'=>'Napf','ovaron'=>'Ovaron','panthera2'=>'Panthera','sauerland'=>'Sauerland','stratis'=>'Stratis','takistan'=>'Takistan','utes'=>'Utes','zargabad'=>'Zargabad');
$content = '';
if (!empty($_GET['map'])&&isset($maps[$_GET['map']])) { 
ob_start();
include_once(  DIR . '/maps/'.$_GET['map'].'/config.php' );
include_once(  DIR . '/maps/map.php' );
$content = ob_get_contents(); 
ob_end_clean();
} else {
$content .= '<div id="content">';
foreach ( $maps as $key => $val ) {$content .= '<a class="button" href="index.php?map='.$key.'" title="'.$val.'"><span class="mapname">'.$val.'</span><img src="style/images/'. $key .'.png" alt="" /></a>'."\n";}
$content .= '<span style="float:left;font-size:10px;">created&nbsp;<a href="http://www.surviveth3dead.com" >by tempted_ - SurviveTh3Dead.com</a></span></div>';
}