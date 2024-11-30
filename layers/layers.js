var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundary_polygon_1 = new ol.format.GeoJSON();
var features_boundary_polygon_1 = format_boundary_polygon_1.readFeatures(json_boundary_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_polygon_1.addFeatures(features_boundary_polygon_1);
var lyr_boundary_polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_polygon_1, 
                style: style_boundary_polygon_1,
                popuplayertitle: "boundary_polygon",
                interactive: true,
    title: 'boundary_polygon<br />\
    <img src="styles/legend/boundary_polygon_1_0.png" /> -1793195 - -398421.6<br />\
    <img src="styles/legend/boundary_polygon_1_1.png" /> -398421.6 - -398413.2<br />\
    <img src="styles/legend/boundary_polygon_1_2.png" /> -398413.2 - -398404.4<br />\
    <img src="styles/legend/boundary_polygon_1_3.png" /> -398404.4 - -398394.4<br />\
    <img src="styles/legend/boundary_polygon_1_4.png" /> -398394.4 - -398386<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_boundary_polygon_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundary_polygon_1];
lyr_boundary_polygon_1.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME': 'name', 'ADMIN_LVL': 'ADMIN_LVL', 'retired 2007-2008 _amount': 'retired 2007-2008 _amount', });
lyr_boundary_polygon_1.set('fieldImages', {'OSM_ID': 'Hidden', 'NAME': 'TextEdit', 'ADMIN_LVL': 'Hidden', 'retired 2007-2008 _amount': 'TextEdit', });
lyr_boundary_polygon_1.set('fieldLabels', {'NAME': 'inline label - visible with data', 'retired 2007-2008 _amount': 'inline label - visible with data', });
lyr_boundary_polygon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});