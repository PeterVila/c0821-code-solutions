select "categories"."name", count("actors".*) as "appeared"
  from "categories"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
-- group by "actors"."actorId"
where "firstName" = 'Lisa'
group by "categories"."name"
