create table vernashen_tourist_places
(
    id        int auto_increment,
    name      varchar(255) null,
    latitude  double       not null,
    longitude double       not null,
    constraint vernashen_tourist_places_id_uindex
        unique (id)
);

alter table vernashen_tourist_places
    add primary key (id);

INSERT INTO gladzor_community_map.vernashen_tourist_places (id, name, latitude, longitude) VALUES (5, 'Գլաձորի պատմության թանգարան', 39.792521, 45.364089);
INSERT INTO gladzor_community_map.vernashen_tourist_places (id, name, latitude, longitude) VALUES (7, 'Գետափի գինեգործարան', 39.766051, 45.311446);
INSERT INTO gladzor_community_map.vernashen_tourist_places (id, name, latitude, longitude) VALUES (8, 'Գետափի մրգօղու արտադրամաս', 39.751836, 45.311188);
INSERT INTO gladzor_community_map.vernashen_tourist_places (id, name, latitude, longitude) VALUES (9, 'Վերնաշենի պահածոների <<Փունջ>> գործարան', 39.779492, 45.358375);