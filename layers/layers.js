var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.874000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Caaguazu_Pob_2024_2 = new ol.format.GeoJSON();
var features_Caaguazu_Pob_2024_2 = format_Caaguazu_Pob_2024_2.readFeatures(json_Caaguazu_Pob_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caaguazu_Pob_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caaguazu_Pob_2024_2.addFeatures(features_Caaguazu_Pob_2024_2);
var lyr_Caaguazu_Pob_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caaguazu_Pob_2024_2, 
                style: style_Caaguazu_Pob_2024_2,
                popuplayertitle: "Caaguazu_Pob_2024",
                interactive: true,
    title: 'Caaguazu_Pob_2024<br />\
    <img src="styles/legend/Caaguazu_Pob_2024_2_0.png" /> 8,65 - 19,18<br />\
    <img src="styles/legend/Caaguazu_Pob_2024_2_1.png" /> 19,18 - 32,99<br />\
    <img src="styles/legend/Caaguazu_Pob_2024_2_2.png" /> 32,99 - 47,59<br />\
    <img src="styles/legend/Caaguazu_Pob_2024_2_3.png" /> 47,59 - 76,73<br />\
    <img src="styles/legend/Caaguazu_Pob_2024_2_4.png" /> 76,73 - 150,90<br />'
        });
var format_Puestos_de_Salud_3 = new ol.format.GeoJSON();
var features_Puestos_de_Salud_3 = format_Puestos_de_Salud_3.readFeatures(json_Puestos_de_Salud_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puestos_de_Salud_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puestos_de_Salud_3.addFeatures(features_Puestos_de_Salud_3);
var lyr_Puestos_de_Salud_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puestos_de_Salud_3, 
                style: style_Puestos_de_Salud_3,
                popuplayertitle: "Puestos_de_Salud",
                interactive: true,
                title: '<img src="styles/legend/Puestos_de_Salud_3.png" /> Puestos_de_Salud'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Caaguazu_Pob_2024_2.setVisible(true);lyr_Puestos_de_Salud_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Caaguazu_Pob_2024_2,lyr_Puestos_de_Salud_3];
lyr_Caaguazu_Pob_2024_2.set('fieldAliases', {'DPTO_DESC': 'DPTO_DESC', 'DIST_DESC': 'DIST_DESC', 'CANT_HOMBR': 'CANT_HOMBR', 'CANT_MUJER': 'CANT_MUJER', 'POB_TOTAL': 'POB_TOTAL', 'Area_m2': 'Area_m2', 'Area_km2': 'Area_km2', 'Densidad': 'Densidad', });
lyr_Puestos_de_Salud_3.set('fieldAliases', {'DptoDesc': 'DptoDesc', 'DistDesc': 'DistDesc', 'BarlocDesc': 'BarlocDesc', 'DescCodRef': 'DescCodRef', 'DescRef': 'DescRef', });
lyr_Caaguazu_Pob_2024_2.set('fieldImages', {'DPTO_DESC': 'TextEdit', 'DIST_DESC': 'TextEdit', 'CANT_HOMBR': 'TextEdit', 'CANT_MUJER': 'TextEdit', 'POB_TOTAL': 'TextEdit', 'Area_m2': 'TextEdit', 'Area_km2': 'TextEdit', 'Densidad': 'TextEdit', });
lyr_Puestos_de_Salud_3.set('fieldImages', {'DptoDesc': '', 'DistDesc': '', 'BarlocDesc': '', 'DescCodRef': '', 'DescRef': '', });
lyr_Caaguazu_Pob_2024_2.set('fieldLabels', {'DPTO_DESC': 'inline label - always visible', 'DIST_DESC': 'inline label - always visible', 'CANT_HOMBR': 'inline label - always visible', 'CANT_MUJER': 'inline label - always visible', 'POB_TOTAL': 'inline label - always visible', 'Area_m2': 'inline label - always visible', 'Area_km2': 'inline label - always visible', 'Densidad': 'inline label - always visible', });
lyr_Puestos_de_Salud_3.set('fieldLabels', {'DptoDesc': 'inline label - always visible', 'DistDesc': 'inline label - always visible', 'BarlocDesc': 'inline label - always visible', 'DescCodRef': 'inline label - always visible', 'DescRef': 'inline label - always visible', });
lyr_Puestos_de_Salud_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});