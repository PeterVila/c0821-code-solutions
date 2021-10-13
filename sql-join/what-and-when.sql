select "films"."releaseYear",
       "categories"."name"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
where "films"."title" = 'Boogie Amelie'
