ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7851").setExtent([485409.745389, 8067161.583471, 509437.697755, 8081321.282752]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.850000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DisturbanceOutline_1 = new ol.format.GeoJSON();
var features_DisturbanceOutline_1 = format_DisturbanceOutline_1.readFeatures(json_DisturbanceOutline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DisturbanceOutline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_1.addFeatures(features_DisturbanceOutline_1);
var lyr_DisturbanceOutline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DisturbanceOutline_1, 
                style: style_DisturbanceOutline_1,
                popuplayertitle: "Disturbance Outline",
                interactive: false,
                title: '<img src="styles/legend/DisturbanceOutline_1.png" /> Disturbance Outline'
            });
var format_Watercourses1kmBuffer_2 = new ol.format.GeoJSON();
var features_Watercourses1kmBuffer_2 = format_Watercourses1kmBuffer_2.readFeatures(json_Watercourses1kmBuffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Watercourses1kmBuffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watercourses1kmBuffer_2.addFeatures(features_Watercourses1kmBuffer_2);
var lyr_Watercourses1kmBuffer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Watercourses1kmBuffer_2, 
                style: style_Watercourses1kmBuffer_2,
                popuplayertitle: "Watercourses (1km Buffer)",
                interactive: true,
                title: '<img src="styles/legend/Watercourses1kmBuffer_2.png" /> Watercourses (1km Buffer)'
            });
var format_SouthernSpringExlcusionZone_3 = new ol.format.GeoJSON();
var features_SouthernSpringExlcusionZone_3 = format_SouthernSpringExlcusionZone_3.readFeatures(json_SouthernSpringExlcusionZone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_SouthernSpringExlcusionZone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthernSpringExlcusionZone_3.addFeatures(features_SouthernSpringExlcusionZone_3);
var lyr_SouthernSpringExlcusionZone_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthernSpringExlcusionZone_3, 
                style: style_SouthernSpringExlcusionZone_3,
                popuplayertitle: "Southern Spring Exlcusion Zone",
                interactive: true,
                title: '<img src="styles/legend/SouthernSpringExlcusionZone_3.png" /> Southern Spring Exlcusion Zone'
            });
var format_MountJowalengaEast1kmBuffer_4 = new ol.format.GeoJSON();
var features_MountJowalengaEast1kmBuffer_4 = format_MountJowalengaEast1kmBuffer_4.readFeatures(json_MountJowalengaEast1kmBuffer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_MountJowalengaEast1kmBuffer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountJowalengaEast1kmBuffer_4.addFeatures(features_MountJowalengaEast1kmBuffer_4);
var lyr_MountJowalengaEast1kmBuffer_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MountJowalengaEast1kmBuffer_4, 
                style: style_MountJowalengaEast1kmBuffer_4,
                popuplayertitle: "Mount Jowalenga East (1km Buffer)",
                interactive: true,
                title: '<img src="styles/legend/MountJowalengaEast1kmBuffer_4.png" /> Mount Jowalenga East (1km Buffer)'
            });
var format_BellsTowerExclusionZone_5 = new ol.format.GeoJSON();
var features_BellsTowerExclusionZone_5 = format_BellsTowerExclusionZone_5.readFeatures(json_BellsTowerExclusionZone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_BellsTowerExclusionZone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BellsTowerExclusionZone_5.addFeatures(features_BellsTowerExclusionZone_5);
var lyr_BellsTowerExclusionZone_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BellsTowerExclusionZone_5, 
                style: style_BellsTowerExclusionZone_5,
                popuplayertitle: "Bells Tower Exclusion Zone",
                interactive: true,
                title: '<img src="styles/legend/BellsTowerExclusionZone_5.png" /> Bells Tower Exclusion Zone'
            });
var format_MountJowalengaExclusionZone_6 = new ol.format.GeoJSON();
var features_MountJowalengaExclusionZone_6 = format_MountJowalengaExclusionZone_6.readFeatures(json_MountJowalengaExclusionZone_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_MountJowalengaExclusionZone_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountJowalengaExclusionZone_6.addFeatures(features_MountJowalengaExclusionZone_6);
var lyr_MountJowalengaExclusionZone_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MountJowalengaExclusionZone_6, 
                style: style_MountJowalengaExclusionZone_6,
                popuplayertitle: "Mount Jowalenga Exclusion Zone",
                interactive: true,
                title: '<img src="styles/legend/MountJowalengaExclusionZone_6.png" /> Mount Jowalenga Exclusion Zone'
            });
var format_ManmanLake1kmBuffer_7 = new ol.format.GeoJSON();
var features_ManmanLake1kmBuffer_7 = format_ManmanLake1kmBuffer_7.readFeatures(json_ManmanLake1kmBuffer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_ManmanLake1kmBuffer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManmanLake1kmBuffer_7.addFeatures(features_ManmanLake1kmBuffer_7);
var lyr_ManmanLake1kmBuffer_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ManmanLake1kmBuffer_7, 
                style: style_ManmanLake1kmBuffer_7,
                popuplayertitle: "Manman Lake (1km Buffer)",
                interactive: true,
                title: '<img src="styles/legend/ManmanLake1kmBuffer_7.png" /> Manman Lake (1km Buffer)'
            });
var format_Section18ExclusionZone_8 = new ol.format.GeoJSON();
var features_Section18ExclusionZone_8 = format_Section18ExclusionZone_8.readFeatures(json_Section18ExclusionZone_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Section18ExclusionZone_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Section18ExclusionZone_8.addFeatures(features_Section18ExclusionZone_8);
var lyr_Section18ExclusionZone_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Section18ExclusionZone_8, 
                style: style_Section18ExclusionZone_8,
                popuplayertitle: "Section 18 Exclusion Zone",
                interactive: true,
                title: '<img src="styles/legend/Section18ExclusionZone_8.png" /> Section 18 Exclusion Zone'
            });
var format_HeritageExlcusionZone_9 = new ol.format.GeoJSON();
var features_HeritageExlcusionZone_9 = format_HeritageExlcusionZone_9.readFeatures(json_HeritageExlcusionZone_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_HeritageExlcusionZone_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageExlcusionZone_9.addFeatures(features_HeritageExlcusionZone_9);
var lyr_HeritageExlcusionZone_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeritageExlcusionZone_9, 
                style: style_HeritageExlcusionZone_9,
                popuplayertitle: "Heritage Exlcusion Zone",
                interactive: true,
                title: '<img src="styles/legend/HeritageExlcusionZone_9.png" /> Heritage Exlcusion Zone'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DisturbanceOutline_1.setVisible(true);lyr_Watercourses1kmBuffer_2.setVisible(true);lyr_SouthernSpringExlcusionZone_3.setVisible(true);lyr_MountJowalengaEast1kmBuffer_4.setVisible(true);lyr_BellsTowerExclusionZone_5.setVisible(true);lyr_MountJowalengaExclusionZone_6.setVisible(true);lyr_ManmanLake1kmBuffer_7.setVisible(true);lyr_Section18ExclusionZone_8.setVisible(true);lyr_HeritageExlcusionZone_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DisturbanceOutline_1,lyr_Watercourses1kmBuffer_2,lyr_SouthernSpringExlcusionZone_3,lyr_MountJowalengaEast1kmBuffer_4,lyr_BellsTowerExclusionZone_5,lyr_MountJowalengaExclusionZone_6,lyr_ManmanLake1kmBuffer_7,lyr_Section18ExclusionZone_8,lyr_HeritageExlcusionZone_9];
lyr_DisturbanceOutline_1.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'name': 'name', 'land use': 'land use', 'description': 'description', 'tenement': 'tenement', 'date cleared': 'date cleared', 'mrf category': 'mrf category', 'permit number': 'permit number', 'area (ha)': 'area (ha)', 'layer': 'layer', 'path': 'path', });
lyr_Watercourses1kmBuffer_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_SouthernSpringExlcusionZone_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_MountJowalengaEast1kmBuffer_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_BellsTowerExclusionZone_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_MountJowalengaExclusionZone_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_ManmanLake1kmBuffer_7.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Section18ExclusionZone_8.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_HeritageExlcusionZone_9.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_DisturbanceOutline_1.set('fieldImages', {'id': 'Hidden', 'fid': 'Hidden', 'name': 'Hidden', 'land use': 'Hidden', 'description': 'Hidden', 'tenement': 'Hidden', 'date cleared': 'Hidden', 'mrf category': 'Hidden', 'permit number': 'Hidden', 'area (ha)': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_Watercourses1kmBuffer_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_SouthernSpringExlcusionZone_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_MountJowalengaEast1kmBuffer_4.set('fieldImages', {'id': '', 'name': '', });
lyr_BellsTowerExclusionZone_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_MountJowalengaExclusionZone_6.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_ManmanLake1kmBuffer_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Section18ExclusionZone_8.set('fieldImages', {'id': '', 'name': '', });
lyr_HeritageExlcusionZone_9.set('fieldImages', {'id': '', 'name': '', });
lyr_DisturbanceOutline_1.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'name': 'hidden field', 'land use': 'hidden field', 'description': 'hidden field', 'tenement': 'hidden field', 'date cleared': 'hidden field', 'mrf category': 'hidden field', 'permit number': 'hidden field', 'area (ha)': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Watercourses1kmBuffer_2.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_SouthernSpringExlcusionZone_3.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', });
lyr_MountJowalengaEast1kmBuffer_4.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_BellsTowerExclusionZone_5.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_MountJowalengaExclusionZone_6.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', });
lyr_ManmanLake1kmBuffer_7.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_Section18ExclusionZone_8.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_HeritageExlcusionZone_9.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', });
lyr_HeritageExlcusionZone_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});