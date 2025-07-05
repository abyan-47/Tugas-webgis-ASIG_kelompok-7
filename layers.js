var wms_layers = [];


        var lyr_SatelitegoogleMap_0 = new ol.layer.Tile({
            'title': 'Satelite googleMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.com/maps/vt?lyrs=s@180&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_rubber_1 = new ol.format.GeoJSON();
var features_rubber_1 = format_rubber_1.readFeatures(json_rubber_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rubber_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rubber_1.addFeatures(features_rubber_1);
var lyr_rubber_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rubber_1, 
                style: style_rubber_1,
                popuplayertitle: 'rubber',
                interactive: true,
                title: '<img src="styles/legend/rubber_1.png" /> rubber'
            });
var format_oilpalm_2 = new ol.format.GeoJSON();
var features_oilpalm_2 = format_oilpalm_2.readFeatures(json_oilpalm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oilpalm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oilpalm_2.addFeatures(features_oilpalm_2);
var lyr_oilpalm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oilpalm_2, 
                style: style_oilpalm_2,
                popuplayertitle: 'oil palm',
                interactive: true,
                title: '<img src="styles/legend/oilpalm_2.png" /> oil palm'
            });

lyr_SatelitegoogleMap_0.setVisible(true);lyr_rubber_1.setVisible(true);lyr_oilpalm_2.setVisible(true);
var layersList = [lyr_SatelitegoogleMap_0,lyr_rubber_1,lyr_oilpalm_2];
lyr_rubber_1.set('fieldAliases', {'id': 'id', 'rubber': 'rubber', 'luas lahan': 'luas lahan', });
lyr_oilpalm_2.set('fieldAliases', {'id': 'id', 'oil palm': 'oil palm', 'luas lahan': 'luas lahan', });
lyr_rubber_1.set('fieldImages', {'id': 'TextEdit', 'rubber': 'TextEdit', 'luas lahan': 'TextEdit', });
lyr_oilpalm_2.set('fieldImages', {'id': 'TextEdit', 'oil palm': 'TextEdit', 'luas lahan': 'TextEdit', });
lyr_rubber_1.set('fieldLabels', {'id': 'no label', 'rubber': 'inline label - visible with data', 'luas lahan': 'inline label - visible with data', });
lyr_oilpalm_2.set('fieldLabels', {'id': 'no label', 'oil palm': 'inline label - visible with data', 'luas lahan': 'inline label - visible with data', });
lyr_oilpalm_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});