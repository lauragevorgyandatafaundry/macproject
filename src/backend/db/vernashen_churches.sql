create table vernashen_churches
(
    id        int auto_increment,
    name      varchar(255) null,
    latitude  double       not null,
    longitude double       not null,
    constraint vernashen_churches_id_uindex
        unique (id)
);

alter table vernashen_churches
    add primary key (id);

INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (1, 'Աղլի վանք', 39.794995, 45.273219);
INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (2, 'Հազի մատուռ', 39.795863, 45.308613);
INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (3, 'Խաչ քար', 39.77812, 45.305062);
INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (4, 'Սուրբ խաչ եկեղեցի', 39.77944, 45.420813);
INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (5, 'Պռոշաբերդ', 39.831396, 45.375055);
INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (6, 'Դադայի ամրոց Մ.Թ.Ա.', 39.783831, 45.304086);
INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (7, 'Թանահատ', 39.780266, 45.399305);
INSERT INTO gladzor_community_map.vernashen_churches (id, name, latitude, longitude) VALUES (8, 'Սպիտակավոր (Նժդեհի գերեզման)', 39.82987, 45.3637);