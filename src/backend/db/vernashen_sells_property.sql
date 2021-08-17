create table vernashen_sells_property
(
    id        int auto_increment,
    name      varchar(255) null,
    latitude  double       not null,
    longitude double       not null,
    constraint vernashen_sells_property_id_uindex
        unique (id)
);

alter table vernashen_sells_property
    add primary key (id);

INSERT INTO gladzor_community_map.vernashen_sells_property (id, name, latitude, longitude) VALUES (1, 'Գլաձոր համայնք Գլաձոր բնակավայր', 39.8064, 45.328844);
INSERT INTO gladzor_community_map.vernashen_sells_property (id, name, latitude, longitude) VALUES (2, 'Գլաձոր համայնք Գլաձոր բնակավայր', 39.830982, 45.368831);
INSERT INTO gladzor_community_map.vernashen_sells_property (id, name, latitude, longitude) VALUES (3, 'Գլաձոր համայնք Գլաձոր բնակավայր', 39.832292, 45.36661);
INSERT INTO gladzor_community_map.vernashen_sells_property (id, name, latitude, longitude) VALUES (4, 'Գլաձոր համայնք Վերնաշեն բնակավայր
', 39.801397, 45.410394);
INSERT INTO gladzor_community_map.vernashen_sells_property (id, name, latitude, longitude) VALUES (5, 'Գլաձոր համայնք Վերնաշեն բնակավայր', 39.80007, 45.400041);