ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:23832").setExtent([112953.091634, 1378071.809472, 352022.063227, 1518263.176454]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Maps_2 = new ol.layer.Tile({
            'title': 'Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_megathrust_3 = new ol.format.GeoJSON();
var features_megathrust_3 = format_megathrust_3.readFeatures(json_megathrust_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_megathrust_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_megathrust_3.addFeatures(features_megathrust_3);
var lyr_megathrust_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_megathrust_3, 
                style: style_megathrust_3,
                popuplayertitle: 'megathrust',
                interactive: true,
                title: '<img src="styles/legend/megathrust_3.png" /> megathrust'
            });
var format_Patahan_4 = new ol.format.GeoJSON();
var features_Patahan_4 = format_Patahan_4.readFeatures(json_Patahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_Patahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Patahan_4.addFeatures(features_Patahan_4);
var lyr_Patahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Patahan_4, 
                style: style_Patahan_4,
                popuplayertitle: 'Patahan',
                interactive: true,
                title: '<img src="styles/legend/Patahan_4.png" /> Patahan'
            });
var format_KawasanRawanGempa_5 = new ol.format.GeoJSON();
var features_KawasanRawanGempa_5 = format_KawasanRawanGempa_5.readFeatures(json_KawasanRawanGempa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_KawasanRawanGempa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanRawanGempa_5.addFeatures(features_KawasanRawanGempa_5);
var lyr_KawasanRawanGempa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanRawanGempa_5, 
                style: style_KawasanRawanGempa_5,
                popuplayertitle: 'Kawasan Rawan Gempa',
                interactive: true,
    title: 'Kawasan Rawan Gempa<br />\
    <img src="styles/legend/KawasanRawanGempa_5_0.png" /> Kawasan Rawan Bencana Gempabumi Menengah<br />\
    <img src="styles/legend/KawasanRawanGempa_5_1.png" /> Kawasan Rawan Bencana Gempabumi Rendah<br />\
    <img src="styles/legend/KawasanRawanGempa_5_2.png" /> Kawasan Rawan Bencana Gempabumi Tinggi<br />\
    <img src="styles/legend/KawasanRawanGempa_5_3.png" /> <br />' });
var format_BatasAdministrativeTanahDatar_6 = new ol.format.GeoJSON();
var features_BatasAdministrativeTanahDatar_6 = format_BatasAdministrativeTanahDatar_6.readFeatures(json_BatasAdministrativeTanahDatar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_BatasAdministrativeTanahDatar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrativeTanahDatar_6.addFeatures(features_BatasAdministrativeTanahDatar_6);
var lyr_BatasAdministrativeTanahDatar_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrativeTanahDatar_6, 
                style: style_BatasAdministrativeTanahDatar_6,
                popuplayertitle: 'Batas Administrative Tanah Datar',
                interactive: true,
    title: 'Batas Administrative Tanah Datar<br />\
    <img src="styles/legend/BatasAdministrativeTanahDatar_6_0.png" /> 11507 - 17573<br />\
    <img src="styles/legend/BatasAdministrativeTanahDatar_6_1.png" /> 17573 - 21873<br />\
    <img src="styles/legend/BatasAdministrativeTanahDatar_6_2.png" /> 21873 - 31349<br />\
    <img src="styles/legend/BatasAdministrativeTanahDatar_6_3.png" /> 31349 - 38614<br />\
    <img src="styles/legend/BatasAdministrativeTanahDatar_6_4.png" /> 38614 - 47700<br />' });
var format_BatasAdminisrativePadangpanjang_7 = new ol.format.GeoJSON();
var features_BatasAdminisrativePadangpanjang_7 = format_BatasAdminisrativePadangpanjang_7.readFeatures(json_BatasAdminisrativePadangpanjang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_BatasAdminisrativePadangpanjang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminisrativePadangpanjang_7.addFeatures(features_BatasAdminisrativePadangpanjang_7);
var lyr_BatasAdminisrativePadangpanjang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdminisrativePadangpanjang_7, 
                style: style_BatasAdminisrativePadangpanjang_7,
                popuplayertitle: 'Batas Adminisrative Padang panjang',
                interactive: true,
                title: '<img src="styles/legend/BatasAdminisrativePadangpanjang_7.png" /> Batas Adminisrative Padang panjang'
            });
var format_SPBU_PT_50K_8 = new ol.format.GeoJSON();
var features_SPBU_PT_50K_8 = format_SPBU_PT_50K_8.readFeatures(json_SPBU_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_SPBU_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_PT_50K_8.addFeatures(features_SPBU_PT_50K_8);
var lyr_SPBU_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_PT_50K_8, 
                style: style_SPBU_PT_50K_8,
                popuplayertitle: 'SPBU_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SPBU_PT_50K_8.png" /> SPBU_PT_50K'
            });
var format_AIRPORT_PT_50K_9 = new ol.format.GeoJSON();
var features_AIRPORT_PT_50K_9 = format_AIRPORT_PT_50K_9.readFeatures(json_AIRPORT_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_AIRPORT_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_PT_50K_9.addFeatures(features_AIRPORT_PT_50K_9);
var lyr_AIRPORT_PT_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_PT_50K_9, 
                style: style_AIRPORT_PT_50K_9,
                popuplayertitle: 'AIRPORT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_PT_50K_9.png" /> AIRPORT_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_10 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_10 = format_PENDIDIKAN_PT_50K_10.readFeatures(json_PENDIDIKAN_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_PENDIDIKAN_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_10.addFeatures(features_PENDIDIKAN_PT_50K_10);
var lyr_PENDIDIKAN_PT_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_10, 
                style: style_PENDIDIKAN_PT_50K_10,
                popuplayertitle: 'PENDIDIKAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_10.png" /> PENDIDIKAN_PT_50K'
            });
var format_PUSKESMAS_PT_50K_11 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_11 = format_PUSKESMAS_PT_50K_11.readFeatures(json_PUSKESMAS_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_PUSKESMAS_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_PT_50K_11.addFeatures(features_PUSKESMAS_PT_50K_11);
var lyr_PUSKESMAS_PT_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_PT_50K_11, 
                style: style_PUSKESMAS_PT_50K_11,
                popuplayertitle: 'PUSKESMAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_11.png" /> PUSKESMAS_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_12 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_12 = format_RUMAHSAKIT_PT_50K_12.readFeatures(json_RUMAHSAKIT_PT_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_RUMAHSAKIT_PT_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_12.addFeatures(features_RUMAHSAKIT_PT_50K_12);
var lyr_RUMAHSAKIT_PT_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_12, 
                style: style_RUMAHSAKIT_PT_50K_12,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_12.png" /> RUMAHSAKIT_PT_50K'
            });
var format_SARANAIBADAH_PT_50K_13 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_50K_13 = format_SARANAIBADAH_PT_50K_13.readFeatures(json_SARANAIBADAH_PT_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_SARANAIBADAH_PT_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_50K_13.addFeatures(features_SARANAIBADAH_PT_50K_13);
var lyr_SARANAIBADAH_PT_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_50K_13, 
                style: style_SARANAIBADAH_PT_50K_13,
                popuplayertitle: 'SARANAIBADAH_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_50K_13.png" /> SARANAIBADAH_PT_50K'
            });
var format_Ekonomi_dan_belanja_14 = new ol.format.GeoJSON();
var features_Ekonomi_dan_belanja_14 = format_Ekonomi_dan_belanja_14.readFeatures(json_Ekonomi_dan_belanja_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_Ekonomi_dan_belanja_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ekonomi_dan_belanja_14.addFeatures(features_Ekonomi_dan_belanja_14);
var lyr_Ekonomi_dan_belanja_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ekonomi_dan_belanja_14, 
                style: style_Ekonomi_dan_belanja_14,
                popuplayertitle: 'Ekonomi_dan_belanja',
                interactive: true,
                title: '<img src="styles/legend/Ekonomi_dan_belanja_14.png" /> Ekonomi_dan_belanja'
            });
var format_Kesehatan_15 = new ol.format.GeoJSON();
var features_Kesehatan_15 = format_Kesehatan_15.readFeatures(json_Kesehatan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_Kesehatan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_15.addFeatures(features_Kesehatan_15);
var lyr_Kesehatan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_15, 
                style: style_Kesehatan_15,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_15.png" /> Kesehatan'
            });
var format_olahragadanrekreasi_16 = new ol.format.GeoJSON();
var features_olahragadanrekreasi_16 = format_olahragadanrekreasi_16.readFeatures(json_olahragadanrekreasi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_olahragadanrekreasi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_olahragadanrekreasi_16.addFeatures(features_olahragadanrekreasi_16);
var lyr_olahragadanrekreasi_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_olahragadanrekreasi_16, 
                style: style_olahragadanrekreasi_16,
                popuplayertitle: 'olahraga dan rekreasi',
                interactive: true,
                title: '<img src="styles/legend/olahragadanrekreasi_16.png" /> olahraga dan rekreasi'
            });
var format_pemerintahan_17 = new ol.format.GeoJSON();
var features_pemerintahan_17 = format_pemerintahan_17.readFeatures(json_pemerintahan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_pemerintahan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_17.addFeatures(features_pemerintahan_17);
var lyr_pemerintahan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemerintahan_17, 
                style: style_pemerintahan_17,
                popuplayertitle: 'pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/pemerintahan_17.png" /> pemerintahan'
            });
var format_pendidikan_18 = new ol.format.GeoJSON();
var features_pendidikan_18 = format_pendidikan_18.readFeatures(json_pendidikan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_pendidikan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_18.addFeatures(features_pendidikan_18);
var lyr_pendidikan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_18, 
                style: style_pendidikan_18,
                popuplayertitle: 'pendidikan',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_18.png" /> pendidikan'
            });
var format_tempatIbadah_19 = new ol.format.GeoJSON();
var features_tempatIbadah_19 = format_tempatIbadah_19.readFeatures(json_tempatIbadah_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_tempatIbadah_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatIbadah_19.addFeatures(features_tempatIbadah_19);
var lyr_tempatIbadah_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatIbadah_19, 
                style: style_tempatIbadah_19,
                popuplayertitle: 'tempatIbadah',
                interactive: true,
                title: '<img src="styles/legend/tempatIbadah_19.png" /> tempatIbadah'
            });
var format_transportasi_20 = new ol.format.GeoJSON();
var features_transportasi_20 = format_transportasi_20.readFeatures(json_transportasi_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_transportasi_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transportasi_20.addFeatures(features_transportasi_20);
var lyr_transportasi_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_transportasi_20, 
                style: style_transportasi_20,
                popuplayertitle: 'transportasi',
                interactive: true,
                title: '<img src="styles/legend/transportasi_20.png" /> transportasi'
            });
var format_wisataBudaya_21 = new ol.format.GeoJSON();
var features_wisataBudaya_21 = format_wisataBudaya_21.readFeatures(json_wisataBudaya_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_wisataBudaya_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wisataBudaya_21.addFeatures(features_wisataBudaya_21);
var lyr_wisataBudaya_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wisataBudaya_21, 
                style: style_wisataBudaya_21,
                popuplayertitle: 'wisataBudaya',
                interactive: true,
                title: '<img src="styles/legend/wisataBudaya_21.png" /> wisataBudaya'
            });
var format_Radius_22 = new ol.format.GeoJSON();
var features_Radius_22 = format_Radius_22.readFeatures(json_Radius_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_Radius_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius_22.addFeatures(features_Radius_22);
var lyr_Radius_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius_22, 
                style: style_Radius_22,
                popuplayertitle: 'Radius',
                interactive: true,
    title: 'Radius<br />\
    <img src="styles/legend/Radius_22_0.png" /> 22 - 26.2<br />\
    <img src="styles/legend/Radius_22_1.png" /> 26.2 - 30.4<br />\
    <img src="styles/legend/Radius_22_2.png" /> 30.4 - 34.6<br />\
    <img src="styles/legend/Radius_22_3.png" /> 34.6 - 38.8<br />\
    <img src="styles/legend/Radius_22_4.png" /> 38.8 - 43<br />' });
var format_Kedalaman_23 = new ol.format.GeoJSON();
var features_Kedalaman_23 = format_Kedalaman_23.readFeatures(json_Kedalaman_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_Kedalaman_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kedalaman_23.addFeatures(features_Kedalaman_23);
var lyr_Kedalaman_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kedalaman_23, 
                style: style_Kedalaman_23,
                popuplayertitle: 'Kedalaman',
                interactive: true,
    title: 'Kedalaman<br />\
    <img src="styles/legend/Kedalaman_23_0.png" /> 10 - 47<br />\
    <img src="styles/legend/Kedalaman_23_1.png" /> 47 - 84<br />\
    <img src="styles/legend/Kedalaman_23_2.png" /> 84 - 121<br />\
    <img src="styles/legend/Kedalaman_23_3.png" /> 121 - 158<br />\
    <img src="styles/legend/Kedalaman_23_4.png" /> 158 - 195<br />' });
var format_Magnetude_24 = new ol.format.GeoJSON();
var features_Magnetude_24 = format_Magnetude_24.readFeatures(json_Magnetude_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_Magnetude_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magnetude_24.addFeatures(features_Magnetude_24);
var lyr_Magnetude_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Magnetude_24, 
                style: style_Magnetude_24,
                popuplayertitle: 'Magnetude',
                interactive: true,
    title: 'Magnetude<br />\
    <img src="styles/legend/Magnetude_24_0.png" /> 3.7 - 3.88<br />\
    <img src="styles/legend/Magnetude_24_1.png" /> 3.88 - 4.06<br />\
    <img src="styles/legend/Magnetude_24_2.png" /> 4.06 - 4.24<br />\
    <img src="styles/legend/Magnetude_24_3.png" /> 4.24 - 4.42<br />\
    <img src="styles/legend/Magnetude_24_4.png" /> 4.42 - 4.6<br />' });
var format_Data_Gempa_25 = new ol.format.GeoJSON();
var features_Data_Gempa_25 = format_Data_Gempa_25.readFeatures(json_Data_Gempa_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23832'});
var jsonSource_Data_Gempa_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Gempa_25.addFeatures(features_Data_Gempa_25);
var lyr_Data_Gempa_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Gempa_25, 
                style: style_Data_Gempa_25,
                popuplayertitle: 'Data_Gempa',
                interactive: true,
                title: '<img src="styles/legend/Data_Gempa_25.png" /> Data_Gempa'
            });
var group_Fasilitasumumpadangpanjang = new ol.layer.Group({
                                layers: [lyr_Ekonomi_dan_belanja_14,lyr_Kesehatan_15,lyr_olahragadanrekreasi_16,lyr_pemerintahan_17,lyr_pendidikan_18,lyr_tempatIbadah_19,lyr_transportasi_20,lyr_wisataBudaya_21,],
                                fold: 'close',
                                title: 'Fasilitas umum padang panjang'});
var group_TanahDatar = new ol.layer.Group({
                                layers: [lyr_SPBU_PT_50K_8,lyr_AIRPORT_PT_50K_9,lyr_PENDIDIKAN_PT_50K_10,lyr_PUSKESMAS_PT_50K_11,lyr_RUMAHSAKIT_PT_50K_12,lyr_SARANAIBADAH_PT_50K_13,],
                                fold: 'close',
                                title: 'Tanah Datar'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Maps_2.setVisible(true);lyr_megathrust_3.setVisible(true);lyr_Patahan_4.setVisible(true);lyr_KawasanRawanGempa_5.setVisible(true);lyr_BatasAdministrativeTanahDatar_6.setVisible(true);lyr_BatasAdminisrativePadangpanjang_7.setVisible(true);lyr_SPBU_PT_50K_8.setVisible(true);lyr_AIRPORT_PT_50K_9.setVisible(true);lyr_PENDIDIKAN_PT_50K_10.setVisible(true);lyr_PUSKESMAS_PT_50K_11.setVisible(true);lyr_RUMAHSAKIT_PT_50K_12.setVisible(true);lyr_SARANAIBADAH_PT_50K_13.setVisible(true);lyr_Ekonomi_dan_belanja_14.setVisible(true);lyr_Kesehatan_15.setVisible(true);lyr_olahragadanrekreasi_16.setVisible(true);lyr_pemerintahan_17.setVisible(true);lyr_pendidikan_18.setVisible(true);lyr_tempatIbadah_19.setVisible(true);lyr_transportasi_20.setVisible(true);lyr_wisataBudaya_21.setVisible(true);lyr_Radius_22.setVisible(true);lyr_Kedalaman_23.setVisible(true);lyr_Magnetude_24.setVisible(true);lyr_Data_Gempa_25.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Maps_2,lyr_megathrust_3,lyr_Patahan_4,lyr_KawasanRawanGempa_5,lyr_BatasAdministrativeTanahDatar_6,lyr_BatasAdminisrativePadangpanjang_7,group_TanahDatar,group_Fasilitasumumpadangpanjang,lyr_Radius_22,lyr_Kedalaman_23,lyr_Magnetude_24,lyr_Data_Gempa_25];
lyr_megathrust_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Patahan_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'LAYER': 'LAYER', 'Id': 'Id', 'LCLASSSTR': 'LCLASSSTR', 'Type': 'Type', 'Mmax_d': 'Mmax_d', 'Sliprate_1': 'Sliprate_1', 'Fault_Name': 'Fault_Name', 'Segment_Na': 'Segment_Na', 'LENGHT': 'LENGHT', 'Name': 'Name', 'Segment': 'Segment', 'Fault': 'Fault', 'LENGTH_KM': 'LENGTH_KM', 'CLASSSTR': 'CLASSSTR', 'Seg_Name': 'Seg_Name', 'lenght_km_': 'lenght_km_', 'lenght_km': 'lenght_km', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'GM_LAYER_1': 'GM_LAYER_1', 'GM_TYPE_1': 'GM_TYPE_1', 'LCLASSSTR_': 'LCLASSSTR_', 'Fault_Na_1': 'Fault_Na_1', 'Segment__1': 'Segment__1', 'Shape_Leng': 'Shape_Leng', 'name_group': 'name_group', 'Shape_Le_1': 'Shape_Le_1', });
lyr_KawasanRawanGempa_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KRBID': 'KRBID', 'KELAS': 'KELAS', 'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'FCODE': 'FCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdministrativeTanahDatar_6.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'juml_pend': 'juml_pend', });
lyr_BatasAdminisrativePadangpanjang_7.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'juml_pend': 'juml_pend', });
lyr_SPBU_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_AIRPORT_PT_50K_9.set('fieldAliases', {'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KATKBM': 'KATKBM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PUSKESMAS_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_RUMAHSAKIT_PT_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_SARANAIBADAH_PT_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Ekonomi_dan_belanja_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kesehatan_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_olahragadanrekreasi_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_pemerintahan_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_pendidikan_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tempatIbadah_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_transportasi_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_wisataBudaya_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Radius_22.set('fieldAliases', {'Waktu': 'Waktu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kedalaman (km)': 'Kedalaman (km)', 'Magnitudo': 'Magnitudo', 'Tipe Magnitudo': 'Tipe Magnitudo', 'Lokasi': 'Lokasi', 'Estimasi MMI': 'Estimasi MMI', 'Kategori Kerusakan': 'Kategori Kerusakan', 'Radius Buffer (km)': 'Radius Buffer (km)', 'Catatan': 'Catatan', });
lyr_Kedalaman_23.set('fieldAliases', {'Waktu': 'Waktu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kedalaman (km)': 'Kedalaman (km)', 'Magnitudo': 'Magnitudo', 'Tipe Magnitudo': 'Tipe Magnitudo', 'Lokasi': 'Lokasi', 'Estimasi MMI': 'Estimasi MMI', 'Kategori Kerusakan': 'Kategori Kerusakan', 'Radius Buffer (km)': 'Radius Buffer (km)', 'Catatan': 'Catatan', });
lyr_Magnetude_24.set('fieldAliases', {'Waktu': 'Waktu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kedalaman (km)': 'Kedalaman (km)', 'Magnitudo': 'Magnitudo', 'Tipe Magnitudo': 'Tipe Magnitudo', 'Lokasi': 'Lokasi', 'Estimasi MMI': 'Estimasi MMI', 'Kategori Kerusakan': 'Kategori Kerusakan', 'Radius Buffer (km)': 'Radius Buffer (km)', 'Catatan': 'Catatan', });
lyr_Data_Gempa_25.set('fieldAliases', {'Waktu': 'Waktu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kedalaman (km)': 'Kedalaman (km)', 'Magnitudo': 'Magnitudo', 'Tipe Magnitudo': 'Tipe Magnitudo', 'Lokasi': 'Lokasi', 'Estimasi MMI': 'Estimasi MMI', 'Kategori Kerusakan': 'Kategori Kerusakan', 'Radius Buffer (km)': 'Radius Buffer (km)', 'Catatan': 'Catatan', });
lyr_megathrust_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Patahan_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'LAYER': 'TextEdit', 'Id': 'TextEdit', 'LCLASSSTR': 'TextEdit', 'Type': 'TextEdit', 'Mmax_d': 'TextEdit', 'Sliprate_1': 'TextEdit', 'Fault_Name': 'TextEdit', 'Segment_Na': 'TextEdit', 'LENGHT': 'TextEdit', 'Name': 'TextEdit', 'Segment': 'TextEdit', 'Fault': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'CLASSSTR': 'TextEdit', 'Seg_Name': 'TextEdit', 'lenght_km_': 'TextEdit', 'lenght_km': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'GM_LAYER_1': 'TextEdit', 'GM_TYPE_1': 'TextEdit', 'LCLASSSTR_': 'TextEdit', 'Fault_Na_1': 'TextEdit', 'Segment__1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'name_group': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_KawasanRawanGempa_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KRBID': 'TextEdit', 'KELAS': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasAdministrativeTanahDatar_6.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'juml_pend': 'Range', });
lyr_BatasAdminisrativePadangpanjang_7.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'juml_pend': 'TextEdit', });
lyr_SPBU_PT_50K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_AIRPORT_PT_50K_9.set('fieldImages', {'KOBDMI': 'TextEdit', 'KDICAO': 'TextEdit', 'KDIATA': 'TextEdit', 'ELEVAS': 'TextEdit', 'MAVBMI': 'TextEdit', 'LGTBMI': 'TextEdit', 'KLSBMI': 'Range', 'ADABMI': 'TextEdit', 'ADRBMI': 'TextEdit', 'REMARK': 'TextEdit', 'TIPAIP': 'Range', 'TIPLOK': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KATKBM': 'Range', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PENDIDIKAN_PT_50K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'Range', 'JLPDDK': 'Range', 'FGGPDK': 'Range', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'Range', 'JNSPDL': 'Range', });
lyr_PUSKESMAS_PT_50K_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'Range', 'KMPPKM_': 'Range', 'JPLPKM_': 'Range', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'Range', 'PKMLMT_': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', });
lyr_SARANAIBADAH_PT_50K_13.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Ekonomi_dan_belanja_14.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Kesehatan_15.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_olahragadanrekreasi_16.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_pemerintahan_17.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_pendidikan_18.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_tempatIbadah_19.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_transportasi_20.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_wisataBudaya_21.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Radius_22.set('fieldImages', {'Waktu': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kedalaman (km)': 'TextEdit', 'Magnitudo': 'TextEdit', 'Tipe Magnitudo': 'TextEdit', 'Lokasi': 'TextEdit', 'Estimasi MMI': 'TextEdit', 'Kategori Kerusakan': 'TextEdit', 'Radius Buffer (km)': 'TextEdit', 'Catatan': 'TextEdit', });
lyr_Kedalaman_23.set('fieldImages', {'Waktu': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kedalaman (km)': 'TextEdit', 'Magnitudo': 'TextEdit', 'Tipe Magnitudo': 'TextEdit', 'Lokasi': 'TextEdit', 'Estimasi MMI': 'TextEdit', 'Kategori Kerusakan': 'TextEdit', 'Radius Buffer (km)': 'TextEdit', 'Catatan': 'TextEdit', });
lyr_Magnetude_24.set('fieldImages', {'Waktu': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kedalaman (km)': 'TextEdit', 'Magnitudo': 'TextEdit', 'Tipe Magnitudo': 'TextEdit', 'Lokasi': 'TextEdit', 'Estimasi MMI': 'TextEdit', 'Kategori Kerusakan': 'TextEdit', 'Radius Buffer (km)': 'TextEdit', 'Catatan': 'TextEdit', });
lyr_Data_Gempa_25.set('fieldImages', {'Waktu': '', 'Latitude': '', 'Longitude': '', 'Kedalaman (km)': '', 'Magnitudo': '', 'Tipe Magnitudo': '', 'Lokasi': '', 'Estimasi MMI': '', 'Kategori Kerusakan': '', 'Radius Buffer (km)': '', 'Catatan': '', });
lyr_megathrust_3.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_Patahan_4.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'OBJECTID_2': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'GM_LAYER': 'inline label - visible with data', 'GM_TYPE': 'inline label - visible with data', 'LAYER': 'inline label - visible with data', 'Id': 'inline label - visible with data', 'LCLASSSTR': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Mmax_d': 'inline label - visible with data', 'Sliprate_1': 'inline label - visible with data', 'Fault_Name': 'inline label - visible with data', 'Segment_Na': 'inline label - visible with data', 'LENGHT': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Segment': 'inline label - visible with data', 'Fault': 'inline label - visible with data', 'LENGTH_KM': 'inline label - visible with data', 'CLASSSTR': 'inline label - visible with data', 'Seg_Name': 'inline label - visible with data', 'lenght_km_': 'inline label - visible with data', 'lenght_km': 'inline label - visible with data', 'OBJECTID_3': 'inline label - visible with data', 'OBJECTID_4': 'inline label - visible with data', 'GM_LAYER_1': 'inline label - visible with data', 'GM_TYPE_1': 'inline label - visible with data', 'LCLASSSTR_': 'inline label - visible with data', 'Fault_Na_1': 'inline label - visible with data', 'Segment__1': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'name_group': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', });
lyr_KawasanRawanGempa_5.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'KRBID': 'inline label - visible with data', 'KELAS': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_BatasAdministrativeTanahDatar_6.set('fieldLabels', {'KDPPUM': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'UUPP': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - visible with data', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - visible with data', 'KDBBPS': 'inline label - visible with data', 'KDBPUM': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', 'juml_pend': 'inline label - visible with data', });
lyr_BatasAdminisrativePadangpanjang_7.set('fieldLabels', {'KDPPUM': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'UUPP': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - visible with data', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - visible with data', 'KDBBPS': 'inline label - visible with data', 'KDBPUM': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', 'juml_pend': 'inline label - visible with data', });
lyr_SPBU_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', });
lyr_AIRPORT_PT_50K_9.set('fieldLabels', {'KOBDMI': 'inline label - visible with data', 'KDICAO': 'inline label - visible with data', 'KDIATA': 'inline label - visible with data', 'ELEVAS': 'inline label - visible with data', 'MAVBMI': 'inline label - visible with data', 'LGTBMI': 'inline label - visible with data', 'KLSBMI': 'inline label - visible with data', 'ADABMI': 'inline label - visible with data', 'ADRBMI': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'TIPAIP': 'inline label - visible with data', 'TIPLOK': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'KATKBM': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', });
lyr_PENDIDIKAN_PT_50K_10.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'KATPDK': 'inline label - visible with data', 'JLPDDK': 'inline label - visible with data', 'FGGPDK': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'JJGPDF': 'inline label - visible with data', 'JNSPDL': 'inline label - visible with data', });
lyr_PUSKESMAS_PT_50K_11.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'KWKPKM_': 'inline label - visible with data', 'KMPPKM_': 'inline label - visible with data', 'JPLPKM_': 'inline label - visible with data', 'PKMKODE_': 'inline label - visible with data', 'PKMKAT_': 'inline label - visible with data', 'PKMLMT_': 'inline label - visible with data', });
lyr_RUMAHSAKIT_PT_50K_12.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'TIPRST': 'inline label - visible with data', 'JPLYRS': 'inline label - visible with data', 'ALAMAT': 'inline label - visible with data', });
lyr_SARANAIBADAH_PT_50K_13.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'FGSIBD': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', });
lyr_Ekonomi_dan_belanja_14.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_Kesehatan_15.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_olahragadanrekreasi_16.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_pemerintahan_17.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_pendidikan_18.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_tempatIbadah_19.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_transportasi_20.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_wisataBudaya_21.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMo': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_Radius_22.set('fieldLabels', {'Waktu': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Kedalaman (km)': 'inline label - visible with data', 'Magnitudo': 'inline label - visible with data', 'Tipe Magnitudo': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Estimasi MMI': 'inline label - visible with data', 'Kategori Kerusakan': 'inline label - visible with data', 'Radius Buffer (km)': 'inline label - visible with data', 'Catatan': 'inline label - visible with data', });
lyr_Kedalaman_23.set('fieldLabels', {'Waktu': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Kedalaman (km)': 'inline label - visible with data', 'Magnitudo': 'inline label - visible with data', 'Tipe Magnitudo': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Estimasi MMI': 'inline label - visible with data', 'Kategori Kerusakan': 'inline label - visible with data', 'Radius Buffer (km)': 'inline label - visible with data', 'Catatan': 'inline label - visible with data', });
lyr_Magnetude_24.set('fieldLabels', {'Waktu': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Kedalaman (km)': 'inline label - visible with data', 'Magnitudo': 'inline label - visible with data', 'Tipe Magnitudo': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Estimasi MMI': 'inline label - visible with data', 'Kategori Kerusakan': 'inline label - visible with data', 'Radius Buffer (km)': 'inline label - visible with data', 'Catatan': 'inline label - visible with data', });
lyr_Data_Gempa_25.set('fieldLabels', {'Waktu': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Kedalaman (km)': 'inline label - visible with data', 'Magnitudo': 'inline label - visible with data', 'Tipe Magnitudo': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Estimasi MMI': 'no label', 'Kategori Kerusakan': 'inline label - visible with data', 'Radius Buffer (km)': 'inline label - visible with data', 'Catatan': 'inline label - visible with data', });
lyr_Data_Gempa_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});