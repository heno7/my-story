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