<div id="GPS">
	<div class="gps">
	<div class="gpsA"></div>
	<div class="gpsX"><div id="X"></div></div>
	<div class="gpsY"><div id="Y"></div></div>
	</div>
</div>
<div id="map"></div>
<script>
//<![CDATA[
jQuery(document).ready(function(){
jQuery('#GPS').draggable();
function loadLocations(){var data=jQuery.parseJSON('<?=$MAP['locations']?>');for(var i=0;i<data.length;i++){location.addLayer( new L.Marker([data[i].latte, data[i].lange],{icon:new LocationIcon({labelText:data[i].label}) }  ) );}map.addLayer(location);}
function gpsX(pixel){pixel=Math.round( <?=$MAP['gpsX']?> );if ( pixel < 0 ){pixel=0;}else{if ( pixel >= <?=$MAP['limitGPSX']?> ){pixel=<?=$MAP['limitGPSX']?>;}}return pixel;}
function gpsY(pixel){pixel=Math.round( <?=$MAP['gpsY']?> );if( pixel < <?=$MAP['limitGPSY']?> ){pixel=<?=$MAP['limitGPSY']?>;}return pixel;}
function updateGPS(pixel){var X = map.project(pixel.latlng,<?=$MAP['maxZoom']?>).x;var Y = map.project(pixel.latlng,<?=$MAP['maxZoom']?>).y;jQuery("#X").html( gpsX(X) );jQuery("#Y").html( gpsY(Y) );}
function onMapClick(pixel){popup.setLatLng(pixel.latlng);var X = Number( map.project(pixel.latlng,<?=$MAP['maxZoom']?>).x );var Y = Number( map.project(pixel.latlng,<?=$MAP['maxZoom']?>).y );Y = <?=$MAP['size'] + $MAP['var'];?> - Y;Y=Y.toPrecision(6); X=X.toPrecision(6);popup.setContent( '[0,[' + X + ',' + Y + ',0]]').openOn(map);}
var location=new L.FeatureGroup();
var players=new L.FeatureGroup();
var vehicles=new L.FeatureGroup();
var popup = L.popup();
var LocationIcon2=L.Icon.Label.extend({options:{iconUrl:'style/images/icons/iconStatic.png',shadowUrl:null,iconSize:new L.Point(8, 8),iconAnchor:new L.Point(0, 1),labelAnchor:new L.Point(2, 0),wrapperAnchor:new L.Point(12, 13),labelClassName:'icon i-marker'}});
var LocationIcon=L.Icon.Label.extend({options:{iconUrl:'style/images/icons/iconStatic.png',shadowUrl:null,iconSize:new L.Point(8, 8),iconAnchor:new L.Point(0, 1),labelAnchor:new L.Point(2, 0),wrapperAnchor:new L.Point(12, 13),labelClassName:'locationLabel'}});
var map=L.map('map',{minZoom:<?=$MAP['minZoom']?>,maxZoom:<?=$MAP['maxZoom']?>}).setView(<?=$MAP['setView']?>);
L.tileLayer('maps/<?=$MAP['name']?>/{z}/{x}/{y}.png',{tms:true,continuousWorld:true,attribution:'Map Modified by Tempted_ - <a href="http://www.surviveth3dead.com">Survive Th3 Dead</a>'}).addTo(map);
loadLocations();
map.on('mousemove', updateGPS);
map.on('click', onMapClick);
});
//]]>
</script>