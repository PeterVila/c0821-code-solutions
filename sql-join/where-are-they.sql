select "addresses"."line1" as "line1",
      "addresses"."district" as "district",
      "cities"."name" as "city"
from "addresses"
join "cities" using ("cityId");
      