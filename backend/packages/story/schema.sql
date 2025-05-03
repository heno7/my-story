create table story (
	id serial primary key,
	author text not null,
	title text unique,
	shortIntro text,
	topic text references topic(name),
	markdownContent text,
	status story_status default 'draft'
	
)

create type story_status as enum (
	'draft',
	'publish',
	'hide',
	'delete'
)

create table topic (
	id serial primary key,
	name text unique,
	author text,
	title text unique
);

alter table story drop constraint story_title_key
alter table topic drop constraint topic_title_key
alter table topic drop constraint topic_name_key
alter table story drop constraint story_topic_fkey

select * from information_schema.table_constraints where constraint_name like '%story_topic%' ;

alter table topic add unique(name, author)
alter table story add foreign key (author, topic) references topic(author, name);

alter table story drop column createdAt
alter table story add column createdAt timestamp without time zone default localtimestamp
alter table story add column updatedAt timestamp without time zone

select now(), current_timestamp
select localtimestamp

show timezone;