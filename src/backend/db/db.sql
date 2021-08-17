create table getap_community
(
    id        int auto_increment,
    street    varchar(255) null,
    blind     varchar(255) null,
    alley     varchar(255) null,
    house     varchar(255) null,
    latitude  double       null,
    longitude double       null,
    constraint getap_community_id_uindex
        unique (id)
);

alter table getap_community
    add primary key (id);

create table gladzor_community
(
    id        int auto_increment,
    street    varchar(255) null,
    blind     varchar(255) null,
    alley     varchar(255) null,
    house     varchar(255) null,
    latitude  double       not null,
    longitude double       null,
    constraint gladzor_id_uindex
        unique (id)
);

create table vernashen
(
    id        int auto_increment,
    street    varchar(255) null,
    blind     varchar(255) null,
    alley     varchar(255) null,
    house     varchar(255) null,
    latitude  double       not null,
    longitude double       null,
    constraint vernashen_id_uindex
        unique (id)
);

alter table vernashen
    add primary key (id);

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

